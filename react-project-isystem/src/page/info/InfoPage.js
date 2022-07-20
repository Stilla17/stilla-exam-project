import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProductInfo, getProductSingle, getSingleProduct, getWindow} from "../../redux/actions/windowActions";
import {useParams} from 'react-router-dom'
import './info.css';
import Carousel from "../carousel/Carousel";

const InfoPage = (props) => {

    const {type, id} = useParams();
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const {singleProduct} = useSelector(state => state.windowReducer);

    useEffect(() => {
        dispatch(getProductSingle(type, id));
        dispatch(getSingleProduct(id));
    }, [type, id]);

    return (
        <div className="container">
            <h1>Single Info Product</h1>

            <div className="row my-5">
                <div className="col-6">
                    <Carousel/>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            {
                                <img src={singleProduct.thumbnail} alt=""/>
                            }
                        </div>
                        <div className="card-footer">
                            {
                                <h4>{singleProduct.title}</h4>
                            }
                            {
                                <p>{singleProduct.description}</p>
                            }
                            {
                                <p><span>Category:</span> {singleProduct.category}</p>
                            }
                            {
                                <p><span>Brand:</span> {singleProduct.brand}</p>
                            }
                            {
                                <p><span>Price:</span> {singleProduct.price}</p>
                            }
                            {
                                <p><span>Rating:</span> {singleProduct.rating}</p>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoPage;