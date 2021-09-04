import React, {useState} from 'react';

import TitleAndServices from "../../helpers/TitleAndServices";

import Paginate from "../../helpers/scroll/Paginate";
import {DataStoreSites} from "./store/DataStoreSites";

import {DataStoreApp} from "./store/DataStoreApp";

import RowImages from "./row_image/RowImages";
import {DataStoreBots} from "./store/DataStoreBots";


function Portfolio(props, ref) {
    const margin = {
        marginBottom: "5%",
    }
    const paginate = new Paginate(3, useState(0));
    const portfolio = [
        DataStoreSites,
        DataStoreBots,
        DataStoreApp,
    ]
    return (
        <div ref={ref} className="body global-margin">
            <TitleAndServices paginate={paginate} title="Портфолио"/>
            <div style={margin}/>
            <RowImages portfolios={portfolio[paginate.currentPage]}/>
        </div>
    );
}

export default React.forwardRef(Portfolio);