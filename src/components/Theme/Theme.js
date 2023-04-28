import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Header from '../header/header';
import Footer from '../footer/footer';
import '../Theme/Theme.css'
import AddAssetsPage from '../addStocks/addStocks';



function ThemeAddingPage() {

const [themeType, setThemeType] = useState('');

const [investmentDuration, setInvestmentDuration] = useState('');

const [risk, setRisk] = useState('');

const [themeId, setThemeId] = useState('');

const handleSubmit = async (e) => {

e.preventDefault();

try {

const themeData = { themeType, investmentDuration, risk };

const response = await axios.post('http://localhost:8087/project/api/themes', themeData);

const savedThemeId = response.data.themeId;

// setThemeId(response.data.themeId);

// Display themeId in pop-up

alert(`Your themeId is: ${savedThemeId}`);

} catch (error) {

console.error(error);

}

}

return (

<div className="container">
    <Header/>

<h1>Add Your Custom Theme</h1>

<Form onSubmit={handleSubmit}>

<Form.Group controlId="themeType">

<Form.Label>Theme Type</Form.Label>

<Form.Control type="text" value={themeType} onChange={(e) => setThemeType(e.target.value)} />

</Form.Group>

<Form.Group controlId="investmentDuration">

<Form.Label>Investment Duration</Form.Label>

<Form.Control type="text" value={investmentDuration} onChange={(e) => setInvestmentDuration(e.target.value)} />

</Form.Group>

<Form.Group controlId="risk">

<Form.Label>Risk</Form.Label>

<Form.Control type="text" value={risk} onChange={(e) => setRisk(e.target.value)} />

</Form.Group>

<Button variant="primary" type="submit">

Save

</Button>

</Form>
<br/>
<br/>
<div>
    <AddAssetsPage/>
</div>


<Footer/>

</div>

);

}

export default ThemeAddingPage;