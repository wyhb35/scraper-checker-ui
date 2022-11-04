import logo from './logo.svg';
import './App.css';
import NavTabs from './navTab';
import Container from '@mui/material/Container';
import customLineChart from './d3Sample';
import BarChart from './d3Sample';
import {Routes, Route, useNavigate } from 'react-router-dom';



const App = () => {
  const navigate = useNavigate();

  const tabMap = [
    { 'name': 'a' ,'href': '/a'},
    { 'name': 'b' ,'href': '/b'},
    { 'name': 'c' ,'href': '/c'},
  ];

  const data = [
    {year: 1980, efficiency: 24.3, sales: 8949000},
    {year: 1985, efficiency: 27.6, sales: 10979000},
    {year: 1990, efficiency: 28, sales: 9303000},
]


  return (
      <div className="App">
        <NavTabs tabMap={tabMap} navigate={navigate} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Container maxWidth='sm'>
            <BarChart data={data} />
          </Container>
        </header>
        <Routes>
          {tabMap.map(item => 
            <Route path={item.href} key={item.name} />
          )}
        </Routes>
      </div>
  );
}

export default App;
