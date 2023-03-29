import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment'




const AsideTop = () => {
    const stateData = useSelector((state) => state.openWeather)

    return (
        <div className="d-flex  justy-content-space-between">
            <div style={{ marginLeft: '20px' }}>
                <h4>{moment().format('ddd')}</h4>
                <p>{stateData.location}</p>
            </div>
            <div>

            </div>
            <div style={{ marginLeft: '40px' }}>
                <h1>{stateData.temp}</h1>
            </div>
            <hr />

        </div>
    );
}


export default AsideTop;
