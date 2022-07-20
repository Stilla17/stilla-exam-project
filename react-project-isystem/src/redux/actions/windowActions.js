import {
    GET_INFO, GET_PRODUCT_CATEGORY,
    GET_PRODUCT_INFO,
    GET_SEARCH_PRODUCT, GET_SEARCH_PRODUCT_DATA,
    GET_WINDOW,
    LOADING_FALSE,
    LOADING_TRUE, SET_SEARCH_TEXT
} from "../actionTypes/actionTypes";
import axios from "axios";
import {MAIN_URL} from "../../tools/url";


export const getWindow = (page) => async (dispatch) => {

    dispatch({
        type: LOADING_TRUE
    });


    try {
        const res = await axios.get(`${MAIN_URL}/api/product?limit=3&offset=${page * 3 - 3}`);

        dispatch({
            type: GET_WINDOW,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: LOADING_FALSE,
        })
    }
}

export const getSingleProduct = (id) => async (dispatch) => {
    dispatch({
        type: LOADING_TRUE,
    });
    try {
        const res = await axios.get(`${MAIN_URL}/api/product/${id}`);

        dispatch({
            type: GET_INFO,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: LOADING_FALSE,
        });
    }
};

export const getProductSingle = (product_type, product_id) => async (dispatch) => {

    dispatch({
        type: LOADING_TRUE
    });

    try {

        const res = await axios.get(`${MAIN_URL}/api/product/${product_id}`);

        dispatch({
            type: GET_PRODUCT_INFO,
            payload: res.data
        });


    } catch (err) {
        dispatch({
            type: LOADING_FALSE
        })
    }
};

export const getSearchProductData = (type, searchText, page) => async (dispatch) => {
    dispatch({
        type: LOADING_TRUE
    });

    try {
        const res = await axios.get(`${MAIN_URL}/api/product?name=${searchText}`);

        dispatch({
            type: GET_SEARCH_PRODUCT_DATA,
            payload: res.data,
        });

        dispatch({
            type: SET_SEARCH_TEXT,
            payload: {
                searchText,
                currentPage: page,
                currentType: type
            }
        });
    } catch (err) {
        dispatch({
            type: LOADING_FALSE,
        })
    }
};

export const getProductCategory = (type) => async (dispatch) => {

    dispatch({
        type: LOADING_TRUE
    });

    try {

        const res = await axios.get(`${MAIN_URL}/api/category`);

        dispatch({
            type: GET_PRODUCT_CATEGORY,
            payload: res.data
        });


    } catch (err) {
        dispatch({
            type: LOADING_FALSE
        })
    }
};