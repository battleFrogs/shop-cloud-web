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
                <App>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/page1/pageDetail1" element={<Goods/>}/>
                        <Route path="*" element={<Unknown/>}/>
                    </Routes>
                </App>
            </BrowserRouter>
        );
    }
}

export default AppRouter;