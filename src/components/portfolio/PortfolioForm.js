import './PortfolioForm.css'
import { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Button, Form } from 'react-bootstrap';




const currencies = ['INR', 'USD'];

const themes = ['Aggressive', 'Conservative', 'Moderate'];

const reblanceFrequencys = ['Daily', 'Monthly', 'Quarterly'];

const exchanges = ['NSE', 'Nasdaq'];




function PortfolioForm() {



    const [portfolioName, setPortfolioName] = useState('');

    const [fundManagerName, setFundManager] = useState('');

    const [currency, setBaseCurrency] = useState('INR');
    const [benchMark, setBenchmark] = useState('');

    const [type, setType] = useState('Amount');

    const [theme, setTheme] = useState('Moderate');

    const [investmentAmount, setInitialInvestment] = useState('');

    const [rebalancingFrequency, setRebalanceFrequency] = useState('Daily');

    const [exchange, setExchange] = useState('NSE');





    function handleSave(event) {

        event.preventDefault();

        console.log('submitting form');




        fetch('http://localhost:8087/project/portfolioManagement/addportfolio', {




            method: 'POST',

            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify({ portfolioName, fundManagerName, currency, benchMark, type, theme, investmentAmount, rebalancingFrequency, exchange })

        })

            .then(response => response.json())

            .then(data => console.log(data))

            .catch(error => console.error(error));








    }



    function handleReset() {

        setPortfolioName('');

        setFundManager('');

        setBaseCurrency('INR');

        setBenchmark('');

        setType('Amount');

        setTheme('Moderate');

        setInitialInvestment('');




    }




    function handleCancel() {

        // implement cancel logic

    }




    return (

        <div>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <div className='h'>
                <br />
                <h1 className='hhh'>Portfolio</h1>
                <br />
            </div>

            <div className='container bd'>

                <Form className='form-group'>
                    <div className='row'>
                        <Form.Group controlId="portfolioName" className='col-sm-6'>

                            <Form.Label>Portfolio Name</Form.Label>

                            <Form.Control type="text" className='form-control' value={portfolioName} onChange={e => setPortfolioName(e.target.value)} />

                        </Form.Group>




                        <Form.Group controlId="fundManager" className='col'>

                            <Form.Label>Fund Manager</Form.Label>

                            <Form.Control type="text" value={fundManagerName} className='form-control' onChange={e => setFundManager(e.target.value)} />

                        </Form.Group>
                    </div>
                    <div className='row'>


                        <Form.Group controlId="baseCurrency" className='col'>

                            <Form.Label>Base Currency</Form.Label>

                            <Form.Control as="select" value={currency} className='form-control' onChange={e => setBaseCurrency(e.target.value)}>

                                {currencies.map(currency => (

                                    <option key={currency} value={currency}>{currency}</option>

                                ))}

                            </Form.Control>

                        </Form.Group>




                        <Form.Group controlId="benchmark" className='col'>

                            <Form.Label>Benchmark</Form.Label>

                            <Form.Control className='form-control' type="text" value={benchMark} onChange={e => setBenchmark(e.target.value)} />

                        </Form.Group>
                    </div>


                    {/* 
                <Form.Group controlId="type">

                    <Form.Label>Type</Form.Label>

                    

                        <Form.Check className='form-control'

                            type="radio"

                            label="Amount"

                            checked={type === 'Amount'}

                            onChange={() => setType('Amount')}

                        />

                        <Form.Check className='form-control'

                            type="radio"

                            label="Weightage"

                            checked={type === 'Weightage'}

                            onChange={() => setType('Weightage')}

                        />

                    

                </Form.Group> */}


                    <div className='row'>

                        <Form.Group controlId="theme" className='col'>

                            <Form.Label>Theme</Form.Label>

                            <Form.Control as="select" value={theme} onChange={e => setTheme(e.target.value)}>

                                {themes.map(theme => (

                                    <option key={theme} value={theme}>{theme}</option>

                                ))}

                            </Form.Control>

                        </Form.Group>




                        <Form.Group controlId="initialinvestment" className='col'>

                            <Form.Label>Initial Investment</Form.Label>

                            <Form.Control className='form-control' type="text" value={investmentAmount} onChange={e => setInitialInvestment(e.target.value)} />

                        </Form.Group>
                    </div>


                    <div className='row'>
                        <Form.Group controlId="exchange" className='col'>

                            <Form.Label>Exchanges</Form.Label>

                            <Form.Control className='form-control' as="select" value={exchange} onChange={e => setExchange(e.target.value)}>

                                {exchanges.map(exchange => (

                                    <option key={exchange} value={exchange}>{exchange}</option>

                                ))}

                            </Form.Control>

                        </Form.Group>




                        <Form.Group controlId="rebalancingFrequency" className='col'>

<Form.Label>Re-Balance Frequency</Form.Label>

<Form.Control as="select" value={rebalancingFrequency} onChange={e => setRebalanceFrequency(e.target.value)}>

{reblanceFrequencys.map(rebalancingFrequency => (

<option key={rebalancingFrequency} value={rebalancingFrequency}>{rebalancingFrequency}</option>

))}

</Form.Control>

</Form.Group>

                    </div>
                    <br /><br />




                    <div className='form-group'>
                        <Button className='btn btn-primary col-sm-2' variant="primary" onClick={handleSave}>Save</Button>{' '}

                        <Button className='btn btn-success col-sm-2' variant="secondary" onClick={handleReset}>Reset</Button>{' '}

                        <Button className='btn btn-danger col-sm-2' variant="danger" onClick={handleCancel}>Cancel</Button>


                    </div>
                </Form>
                <br />
            </div>
            <Footer />
        </div>

    );

}

export default PortfolioForm;


