import './App.css';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import PortfolioForm from './components/portfolio/PortfolioForm';
import Contact from './components/Contact/contact';
import SearchableTable from './components/stocks/Stock';
import Portfolio from './components/MyPortfolio/Portfolio';
// import ThemeForm from './components/Theme/Theme';
import ThemeAddingPage from './components/Theme/Theme';
import AddAssetsPage from './components/addStocks/addStocks';
import Comparision from './components/Comparision/comparision';

// import SearchPage from './searchPage';
// import About from './about';
// import Contact from './contact';


function App() {
  return (
     <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/Portfolio' element={<PortfolioForm></PortfolioForm>}></Route> */}
        <Route path='/CreatePortfolio' element={<PortfolioForm></PortfolioForm>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route> 
        <Route path='/Portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/ThemeAddingPage' element={<ThemeAddingPage></ThemeAddingPage>}></Route>
        <Route path='/ThemeAddingPage' element={<AddAssetsPage></AddAssetsPage>}></Route>
        {/* <Route path='/search' element={<SearchPage></SearchPage>}></Route>
        <Route path='/about' element={<About></About>}></Route>*/}
        <Route path='/Comparision' element={<Comparision></Comparision>}></Route>
        
        {<Route path='/search' element={<SearchableTable></SearchableTable>}></Route> }
  
      </Routes>
       
     </div>

  )
}

export default App;
