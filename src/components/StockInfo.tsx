import React, { useState, Fragment } from "react";
import axios from "axios";
import { Header } from "semantic-ui-react";

interface IProps {
  ticker: string;
}

const StockInfo: React.FC<IProps> = (props: IProps) => {
  const [apiCalled, setApiCalled] = useState(false);
  const [apiData, setApiData] = useState();

  const fetchData: Function = async (ticker: string) => {
    const res = await axios.get(
      `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${
        process.env.REACT_APP_CLIENT_ID
      }`
    );

    console.log("API CALLED");
    console.log(res);

    if (res.status === 200) {
      setApiCalled(true);
      setApiData(res.data);
    } else {
      setApiCalled(false);
    }
  };

  if (!apiCalled && props.ticker !== "") {
    fetchData(props.ticker);
  }

  if (apiData !== undefined) {
    return (
      <Fragment>
        <Header as="h1">{apiData.companyName}</Header>
        <ul>
          <li>Current price: ${apiData.latestPrice}</li>
          <li>Market Cap: ${apiData.marketCap}</li>
          <li>P/E ratio: {apiData.peRatio}</li>
          <li>52 week high: ${apiData.week52High}</li>
          <li>52 week low: ${apiData.week52Low}</li>
        </ul>
      </Fragment>
    );
  } else {
    return null;
  }
};

export default StockInfo;
