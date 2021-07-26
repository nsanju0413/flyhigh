import React from 'react';
import FlightSearchContainer from '../containers/FlightSearchContainer';

const Homepage = () => (
    <div className="row">
        <div className="col-md-12">
            <div className="search-tabs search-tabs-bg mt-5">
                <h1>CTS Flights</h1>
                <div className="tabbable">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#flights" role="tab">
                                <i className="fa fa-plane"></i> <span>Flights</span>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="flights" role="tabpanel">
                            <FlightSearchContainer position="homepage" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Homepage;