import React, { useState, useEffect } from "react";
import axios from "axios";
import accounting from "accounting";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import Loading from "./Loading";
import { deleteStock } from "../actions/stockActions";

interface IProps {
  ticker: string;
  quantity: number;
  deleteStock: Function;
}

const StockInfo: React.FC<IProps> = (props: IProps) => {
  const [apiData, setApiData] = useState();

  const fetchData: Function = async (ticker: string) => {
    try {
      const res = await axios.get(
        `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${
          process.env.REACT_APP_CLIENT_ID
        }`
      );

      if (res.status === 200) {
        setApiData(res.data);
      }
    } catch {
      // If there is an error, remove stock
      props.deleteStock(props.ticker);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      fetchData(props.ticker);
    }, 5000);
    return () => clearInterval(timer);
  });

  if (apiData !== undefined) {
    return (
      <Card className="stock" fluid={true}>
        <Card.Content>
          <Card.Header>
            {apiData.companyName}
            {"  "}
            <i
              className="fas fa-times"
              onClick={() => {
                props.deleteStock(props.ticker);
              }}
            />
          </Card.Header>
          <div id="stockInfo">
            <Card.Description>
              Current price: {accounting.formatMoney(apiData.latestPrice)}
            </Card.Description>
            <Card.Description>
              Market Cap:{" "}
              {accounting.formatMoney(apiData.marketCap, {
                precision: 0
              })}
            </Card.Description>
            <Card.Description>
              P/E ratio: {apiData.peRatio.toFixed(1)}
            </Card.Description>
            <Card.Description>
              52 week high: {accounting.formatMoney(apiData.week52High)}
            </Card.Description>
            <Card.Description>
              52 week low: {accounting.formatMoney(apiData.week52Low)}
            </Card.Description>
            <Card.Description>
              Holdings Value:{" "}
              {accounting.formatMoney(apiData.latestPrice * props.quantity, {
                precision: 0
              })}
            </Card.Description>
          </div>
        </Card.Content>
      </Card>
    );
  } else {
    return <Loading />;
  }
};

const mapStateToProps = (state: any) => {
  return {
    stocks: state.stock.stocks
  };
};

export default connect(
  mapStateToProps,
  { deleteStock }
)(StockInfo);
