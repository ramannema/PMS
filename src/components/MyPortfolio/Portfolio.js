import React, { useState, useEffect, Component } from 'react';
// import { Outlet, Link } from "react-router-dom";
import "../../Assests/delete.png"
import "../../Assests/insert.png"
import "../../Assests/update.png"
import Header from '../header/header';
import Footer from '../footer/footer';
import '../MyPortfolio/Portfolio.css'

export default function Portfolio() {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8091/folio/getallassetdetails')

            .then(response => response.json())

            .then(data => setData(data))

            .catch(error => console.log(error));
    }, []);

    return (
        <><Header />
            <br />
            <br />
            <div className='h3'>
                <p>Portfolio Management</p>
                <div className='bo'>
                    <body className='bod'>
                        {/* <img src={'insert'} className="img1" /> */}
                        {/* <img src={require('../../Assests/insert.png')} className="img2" /> 
                    <button className='bts'> <img src={require('../../Assests/update.png')} className="img3" /></button>
                    <img src={require('../../Assests/delete.png')} className="img4" /> */}
                        <div className="table table-sm table-dark">
                            <table class="table" style={{ 'margin-top': '35px', 'backgroundColor': 'cadetblue' }}>
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
                                        <td><input type="checkbox" ></input></td>
                                        <td><a href="">{obj.portfolio_name}</a></td>
                                        <td>{obj.fund_Manager}</td>
                                        <td>{obj.bench_Mark}</td>
                                        <td>{obj.theme}</td>
                                        <td>{obj.investment}</td>
                                        <td>{obj.no_Of_Securities}</td>

                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </body>

                </div>
                <Footer />
            </div></>
    )
}