interface action {
  type: string;
  payload: stock;
}

interface stock {
  ticker: string;
  quantity: number;
}

const stockReducer = (state = { stocks: [] as stock[] }, action: action) => {
  switch (action.type) {
    case "UPDATE":
      let StockExists = false;
      for (const stock of state.stocks) {
        if (action.payload.ticker === stock.ticker) {
          StockExists = true;
          break;
        }
      }
      if (StockExists) {
        break;
      }
      state = {
        ...state,
        stocks: [...state.stocks, action.payload]
      };
      break;
    case "DELETE":
      const stocks = state.stocks.filter(stock => {
        return stock.ticker !== action.payload.ticker;
      });
      state = {
        ...state,
        stocks
      };
      break;
    default:
      break;
  }
  return state;
};

export default stockReducer;
