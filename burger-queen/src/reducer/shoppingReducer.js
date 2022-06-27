// import { TYPES } from "../Actions/shoppingActions";
import { getProductsData } from "../util/getProducts"


export const TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
};


export const shoppingInitialState = {
  products: getProductsData(),
  cart: [],
};


export function shoppingReducer(state, action) {
    switch (action.type) {
      case TYPES.ADD_TO_CART: {
        let newItem = shoppingInitialState.getProductsData((prod) => prod.find( (product) => product.id === action.payload))


        // state.products.find(
        //   (product) => product.id === action.payload
        // )
        return {
          ...state,
          cart:[...state.cart,newItem],
            
            };
      }
      
    }}


        // let newItem = state.products.find(
        //   (product) => product.id === action.payload
        // );
        // console.log(newItem);
  
        // let itemInCart = state.cart.find((item) => item.id === newItem.id);
  
        // return itemInCart
    //       ? {
    //           ...state,
    //           cart: state.cart.map((item) =>
    //             item.id === newItem.id
    //               ? { ...item, quantity: item.quantity + 1 }
    //               : item
    //           ),
    //         }
    //       : {
        // return {
        //   ...state,
        //   cart:[...state.cart,newItem],
            //   cart: [...state.cart, { ...newItem, quantity: 1 }],
            // };
      // }
    //   case TYPES.REMOVE_ONE_FROM_CART: {
    //     let itemToDelete = state.cart.find((item) => item.id === action.payload);
  
    //     return itemToDelete.quantity > 1
    //       ? {
    //           ...state,
    //           cart: state.cart.map((item) =>
    //             item.id === action.payload
    //               ? { ...item, quantity: item.quantity - 1 }
    //               : item
    //           ),
    //         }
    //       : {
    //           ...state,
    //           cart: state.cart.filter((item) => item.id !== action.payload),
    //         };
    //   }
    //   case TYPES.REMOVE_ALL_FROM_CART: {
    //     return {
    //       ...state,
    //       cart: state.cart.filter((item) => item.id !== action.payload),
    //     };
    //   }
    //   case TYPES.CLEAR_CART:
    //     return shoppingInitialState;
    //   default:
    //     return state;
  //   }
  // }