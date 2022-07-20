import React, {useEffect, useState} from 'react';
import axios from "axios";
import {MAIN_URL} from "../../tools/url";

const Category = () => {

    const {} = useState();

    useEffect(() => {
        axios.get(`${MAIN_URL}/api/category`).then((res) => {
            console.log(res.data);
        })
    }, [])

    return (
        <div className="my-4">
            <select className="form-control">
                {/*{*/}
                {/*    .map((item, index) => (*/}
                {/*        <option value={item} key={index}>{item}</option>*/}
                {/*    ))*/}
                {/*}*/}
            </select>
        </div>
    );
};

export default Category;