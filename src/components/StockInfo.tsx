import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "semantic-ui-react";

interface IProps {
  ticker: string;
}

const StockInfo: React.FC<IProps> = (props: IProps) => {
  const [apiData, setApiData] = useState();

  const fetchData: Function = async (ticker: string) => {
    const res = await axios.get(
      `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${
        process.env.REACT_APP_CLIENT_ID
      }`
    );

    if (res.status === 200) {
      setApiData(res.data);
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
      <div className="stock">
        <Header as="h1">{apiData.companyName}</Header>
        <ul>
          <li>Current price: ${apiData.latestPrice}</li>
          <li>Market Cap: ${apiData.marketCap}</li>
          <li>P/E ratio: {apiData.peRatio}</li>
          <li>52 week high: ${apiData.week52High}</li>
          <li>52 week low: ${apiData.week52Low}</li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default StockInfo;
