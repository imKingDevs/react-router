
import './App.css';
import Home from './Home';
import {Route, Routes} from 'react-router-dom';
import About from './About';
import Help from './Help';
import NotFound from './NotFound';
import Menu from './Menu';
import User from './User';
import Search from './Search';

function App() {

  const Dev = () => {
    return <h1> Hii! I Am React Dev. </h1>
  }
  
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path='/' element={<Home />}/> 
        <Route exact path='/about' element={<About name='Us'/>} />
        <Route path='/about/Devloper' element={<Dev />} />
        <Route exact path='/search' element={<Search />} />
        <Route path='/user/:name/:nick' element={<User />} />
        <Route exact path='/help' element={<Help />} />
        
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </>
  );
}

export default App;
