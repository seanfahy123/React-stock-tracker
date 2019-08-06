export default function updateStock(ticker: string, quantity: number) {
  return {
    type: "UPDATE",
    payload: {
      ticker,
      quantity
    }
  };
}
