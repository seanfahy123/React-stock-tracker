interface action {
  type: string;
  payload: payload;
}

interface payload {
  ticker: string;
  quantity: number;
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
    default:
      break;
  }
  return state;
};
export default stockReducer;
