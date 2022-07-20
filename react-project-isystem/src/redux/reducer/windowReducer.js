import {
    GET_INFO, GET_PRODUCT_CATEGORY,
    GET_PRODUCT_INFO, GET_SEARCH_PRODUCT_DATA,
    GET_WINDOW,
    LOADING_FALSE,
    LOADING_TRUE, SET_SEARCH_TEXT
} from "../actionTypes/actionTypes";

const initialState = {
    product:[],
    productNumberOfPages: 1,
    singleProduct:[],

    search_product_data: [],
    search_text: '',
    current_page: 1,
    current_type: 0,
    searchProductNumberPage: 1,



    loading: false,
}

export const windowReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOADING_TRUE:
            return {
                ...state,
                loading: true,
            }

        case LOADING_FALSE:
            return {
                ...state,
                loading: false,
            }

        case GET_WINDOW:
            return {
                ...state,
                product: payload.products,
                productNumberOfPages: payload.count,
                loading: false,
            }
        case GET_PRODUCT_INFO:
            return {
                ...state,
                productSingle: payload.products[0],
                loading: false,
            }
        case GET_INFO:
            return {
                ...state,
                singleProduct: payload,
                loading: false,
            }
        case GET_SEARCH_PRODUCT_DATA:
            return {
                ...state,
                search_product_data:payload.products,
                searchProductNumberPage: payload.count,
                loading: false,
            }
        case SET_SEARCH_TEXT:
            return {
                ...state,
                search_text: payload.searchText,
                current_page: payload.currentPage,
                current_type: payload.currentType,
            }
        case GET_PRODUCT_CATEGORY:
            return {
                ...state,
                product_category: payload,
                loading: false,
            };

        default:
            return state;
    }
}
