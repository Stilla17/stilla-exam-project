import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWindow} from "../../redux/actions/windowActions";
import {useHistory} from 'react-router-dom';
import './window.css'
import Badge from "@mui/material/Badge";
import PagePagination from "../../components/pagination/PagePagination";
import Search from "../search/Search";
import Category from "../category/Category";


function Window({id, type}) {

    const [page, setPage] = useState(1);

    const {product, productNumberOfPages} = useSelector(state => state.windowReducer)

    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        dispatch(getWindow(page))
    }, [page])

    return (
        <div>

            <div className="d-flex justify-content-between">
                <Search/>
                <Category/>
            </div>

            <h1>All product</h1>

            <div className="product">
                <div className="row">
                    {
                        product?.map((item, index) => (
                            <div className="col-4 mb-3" key={item.id}>

                                <div className="block" onClick={() => history.push(`info/${item.id}`, {replace: true})}>

                                    <div className="content">
                                        <Badge
                                            className="badge"
                                            badgeContent={item.rating}
                                            color={'success'}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                        />
                                        <img src={item.thumbnail} alt=""/>
                                    </div>
                                    <div className="block-under">
                                        <h4>{item.title}</h4>
                                        <p className="subtitle">{item.description}</p>
                                        <p className="more">LEARN MORE</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            {
                productNumberOfPages > 1 ?

                    <PagePagination page={page} setPage={setPage} numberOfPages={productNumberOfPages}/>

                    : ""
            }

        </div>
    );
}

export default Window;