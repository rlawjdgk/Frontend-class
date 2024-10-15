const getProduct = (searchQuery) => {
  return async (dispatch) => {
    const url = `https://my-json-server.typicode.com/ParkTH-Dev/shoppingmall/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    dispatch({ type: "Get_PRODUCT_SUCESS", payload: { data } });
  };
};

export const productAction = { getProduct };
