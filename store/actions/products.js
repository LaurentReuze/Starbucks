export const ADD_PRODUCT = "ADD_PRODUCT";

// Attention au majuscule ici erreur à productName que j'avais ecrit ProductName
export const addProduct = (productName) => {
  return {
    type: ADD_PRODUCT,
    productName: productName,
  };
};
