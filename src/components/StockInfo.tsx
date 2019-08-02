import React, { useState } from "react";
import axios from "axios";
import { Container, Header } from "semantic-ui-react";

const StockInfo: React.FC = () => {
  const [apiCalled, setApiCalled] = useState(false);
  const [apiData, setApiData] = useState();

  const fetchData: Function = async () => {
    const res = await axios.get(
      `https://cloud.iexapis.com/stable/stock/aapl/quote?token=${
        process.env.REACT_APP_CLIENT_ID
      }`
    );

    console.log("API CALLED");

    if (res.status === 200) {
      setApiCalled(true);
      setApiData(res.data);
    } else {
      setApiCalled(false);
    }
  };
  if (!apiCalled) {
    fetchData();
  }
  if (apiData !== undefined) {
    return (
      <Container>
        <Header as="h1" border-color="green">
          {apiData.companyName}
        </Header>
        <ul>
          <li>Current price: ${apiData.latestPrice}</li>
          <li>Market Cap: ${apiData.marketCap}</li>
          <li>P/E ratio: {apiData.peRatio}</li>
          <li>52 week high: {apiData.week52High}</li>
          <li>52 week low: {apiData.week52Low}</li>
        </ul>
      </Container>
    );
  } else {
    return null;
  }
};

export default StockInfo;
