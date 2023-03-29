import React from "react";
import { useSelector } from 'react-redux'
import moment from 'moment'

const SunPart = () => {
    const data = useSelector((state) => state.openWeather)

    return (
        <>
            <div className="container d-flex justify-content-between m-0">
                <div>
                    <span>
                        <h6>sunset</h6>
                        <span>
                            <p>{moment((data.sunset) * 1000).format('HH:mm a')}</p>
                        </span>
                    </span>
                </div>
                <div>
                    <span>
                        <h6>sunrise</h6>
                        <span>
                            <p>{moment((data.sunrise) * 1000).format('HH:mm a')} </p>
                        </span>
                    </span>
                </div>
            </div>
        </>
    );
};

export default SunPart;
