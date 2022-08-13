import logo from './logo.svg';
import './App.css';
import {NavLink,Routes, Route} from 'react-router-dom'


const Nav = () =>(
  <nav className='nav'>
    <ul>
      <li><NavLink to = '/'>Home </NavLink></li>
      <li><NavLink to = '/About'>About </NavLink></li>
    </ul>
  </nav>
)
const Main= ()=>(
  <Routes>
    <Route  path='/' element={<Home/>}></Route>
    <Route  path='/About' element={<About/>}></Route>
  </Routes>
)
const Home= ()=>(
  <div className="Home">
  <img src={logo} className="App-logo" alt="logo" />

<header className="App-header">
  <p>
  This is my super professional website built with React.JS.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    See my other sites!
  </a>
</header>
</div>
)
const About = () => (
  <div className='about'>
    <img src={logo} className="App-logo" alt="logo" />

    <h1>About Me</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>
);

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Main/>
    </div>
  );
}

export default App;
