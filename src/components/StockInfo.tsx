import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";
import Loading from "./Loading";

interface IProps {
  ticker: string;
  quantity: number;
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

      console.log("API called");

      if (res.status === 200) {
        setApiData(res.data);
      }
    } catch {
      console.log("there has been an error");
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
          <Card.Header>{apiData.companyName}</Card.Header>
          <div id="stockInfo">
            <div>
              <Card.Description>
                Current price: ${apiData.latestPrice}
              </Card.Description>
              <Card.Description>
                Market Cap: ${apiData.marketCap}
              </Card.Description>
            </div>
            <div>
              <Card.Description>P/E ratio: {apiData.peRatio}</Card.Description>
              <Card.Description>
                52 week high: ${apiData.week52High}
              </Card.Description>
            </div>
            <div>
              <Card.Description>
                52 week low: ${apiData.week52Low}
              </Card.Description>
              <Card.Description>
                Holdings Value: ${apiData.latestPrice * props.quantity}
              </Card.Description>
            </div>
          </div>
        </Card.Content>
      </Card>
    );
  } else {
    return <Loading />;
  }
};

export default StockInfo;
