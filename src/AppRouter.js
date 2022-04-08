import React, { Component } from 'react';
import { BrowserRouter, Route, Routes ,unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import App from "./App";
import Goods from "./Page/Goods";
import Login from './Page/Login';
import Unknown from "./Page/Unknown";

import history from "./Component/Axios/history";


class AppRouter extends Component {
    render() {
        return (
            <HistoryRouter history={history}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home/*" element={<HomeInfo />} />
                    <Route path="*" element={<Unknown />} />
                </Routes>
            </HistoryRouter>
        );
    }
}


class HomeInfo extends Component {

    render() {
        return (
            <App>
                <Routes>
                    <Route path="/goods/goodsDetail" element={<Goods />} />
                    <Route path="*" element={<Unknown />} />
                </Routes>
            </App>)
    }

}


export default AppRouter;