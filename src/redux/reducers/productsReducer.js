import { ActionTypes } from "../constraint/action-types";

const initialState = {
    // products: [
    //     {
    //         id: 1,
    //         title: "Hello",
    //         category: "programmer"
    //     }
    // ],
    products:[]
};
//console.log('initialState',initialState)
export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
       
            return {
                ...state,
                products:payload
            };
        default:
            return state;
    }
}

export const selectedProductsReducer = (state={} , {type,payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
       
            return {
                ...state,...payload
            };
            case ActionTypes.REMOVE_SELECTED_PRODUCT:
       
            return {};
        default:
            return state;
    }
}

