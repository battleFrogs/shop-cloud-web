import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Home from "./Page/Home";
import Unknown from "./Page/Unknown";
import Goods from "./Page/Goods";

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home/*" element={<HomeInfo/>}/>
                    <Route path="*" element={<Unknown/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}


class HomeInfo extends Component {

    render() {
        return (
            <App>
                <Routes>
                    <Route path="/goods/goodsDetail" element={<Goods/>}/>
                    <Route path="*" element={<Unknown/>}/>
                </Routes>
            </App>)
    }

}


export default AppRouter;