import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import Provider from "react-redux/es/components/Provider";
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
