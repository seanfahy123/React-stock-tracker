export function updateStock(ticker: string, quantity: number) {
  return {
    type: "UPDATE",
    payload: {
      ticker,
      quantity
    }
  };
}

export function deleteStock(ticker: string) {
  return {
    type: "DELETE",
    payload: {
      ticker
    }
  };
}
