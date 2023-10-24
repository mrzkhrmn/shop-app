export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cartList: action.payload.products };
    case "REMOVE_FROM_CART":
      return { ...state, cartList: action.paylaod.products };
    case "UPDATE_TOTAL":
      return { ...state, total: action.payload.total };
    case "UPDATE_COUNT":
      return { ...state, productCount: action.payload.count };
    default:
      throw new Error("Unknown action!");
  }
}
