import React, {useState} from 'react';

import TitleAndServices from "../../helpers/TitleAndServices";

import Paginate from "../../helpers/scroll/Paginate";
import {DataStoreSites} from "./store/DataStoreSites";
import {DataStoreSmm} from "./store/DataStoreSMM";
import {DataStoreApp} from "./store/DataStoreApp";
import {DataStoreDesign} from "./store/DataStoreDesign";
import RowImages from "./row_image/RowImages";


function Portfolio(props, ref) {
    const margin = {
        marginBottom: "5%",
    }
    const paginate = new Paginate(4, useState(0));
    const portfolio = [
        DataStoreSites,
        DataStoreSmm,
        DataStoreApp,
        DataStoreDesign
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