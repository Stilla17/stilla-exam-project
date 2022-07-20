import React, {useEffect, useState} from 'react';
import "./Search.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import {useDispatch, useSelector} from "react-redux";
import {getSearchProductData} from "../../redux/actions/windowActions";
import Badge from "@mui/material/Badge";
import PagePagination from "../../components/pagination/PagePagination";
import {useHistory} from "react-router-dom";

const Search = () => {

    const [isResult, setIsResult] = useState(false);

    const dispatch = useDispatch();

    const {search_product_data, searchProductNumberPage, loading, search_text, current_type, current_page} = useSelector(state => state.windowReducer)

    const [searchText, setSearchText] = useState(search_text);
    const [page, setPage] = useState(current_page);
    const [type, setType] = useState(current_type);

    const getSearchData = () => {
        if (searchText !== "") {
            dispatch(getSearchProductData(type, searchText, page));
            setIsResult(true);
        } else {
            alert("Fill in the search field !!!")
        }
    };

    const history = useHistory();

    useEffect(() => {
        if (searchText !== "") {
            dispatch(getSearchProductData(type, searchText, page));
            setIsResult(true);
        }

    }, [page, type]);

    return (
        <div className="my-3">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off">

                <TextField
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />

                <Button
                    variant={"contained"}
                    style={{marginLeft: -10}}
                    onClick={() => getSearchData()}>
                    <SearchIcon/>
                </Button>

            </Box>

            <div className="product">
                <div className="row my-5">
                    {
                        search_product_data?.map((item, index) => (
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
                searchProductNumberPage > 1 ?

                    <PagePagination page={page} setPage={setPage} numberOfPages={searchProductNumberPage}/>

                    : ""
            }
        </div>
    );
};

export default Search;