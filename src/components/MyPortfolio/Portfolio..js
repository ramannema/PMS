import React, { useState, useEffect, Component } from 'react';
// import { Outlet, Link } from "react-router-dom";
import "../../Assests/delete.png"
import "../../Assests/insert.png"
import "../../Assests/update.png"
import Header from '../header/header';
import Footer from '../footer/footer';

export default function Portfolio() {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8089/folio/getallassetdetails')

            .then(response => response.json())

            .then(data => setData(data))

            .catch(error => console.log(error));
    }, []);

    return (
             <><Header />
            <div className='h3'>
            <p>Portfolio Management</p>
            <div className='bo'>
                <body className='bod'>
                    <img src={'insert'} className="img1" />
                    <button className='bts'> <img src={'update'} className="img2" /></button>
                    <img src={'delete'} className="img3" />
                    <div className="table table-sm table-dark">
                        <table class="table"style={{ 'margin-top': '35px' }}>
                            <thead>
                                <th></th>
                                <th>Portfolio Name </th>
                                <th>Fund Manager</th>
                                <th>Bench Mark</th>
                                <th>Theme</th>
                                <th>Investment</th>
                                <th>No.of.Securities</th>
                             </thead>

                            <tbody>

                                {data.map(obj => <tr key={obj.name}>
                                    {/* <td><input type="checkbox"></input></td> */}
                                    <td>{obj.portfolio_name}</td>
                                    <td>{obj.amount}</td>
                                    <td>{obj.benchmark}</td>
                                    <td>{obj.currency}</td>
                                    <td>{obj.exchange}</td>
                                    <td>{obj.rebalancing_freq}</td>
                                    <td>{obj.theme}</td>
                                    <td>{obj.theme_id}</td>

                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </body>
                
            </div>
            <Footer/>
        </div></>
    )
}