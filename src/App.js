import logo from './logo.svg';
import './App.css';
import {NavLink,Routes, Route} from 'react-router-dom'


const Nav = () =>(
  <nav className='nav'>
    <ul>
      <li className='linav'><NavLink to = '/'>Home </NavLink></li>
      <li className='linav'><NavLink to = '/About'>About </NavLink></li>
      <li className='linav'><NavLink to = '/Skills'>Skills </NavLink></li>
    </ul>
  </nav>
)
const Main= ()=>(
  <Routes>
    <Route  path='/' element={<Home/>}></Route>
    <Route  path='/About' element={<About/>}></Route>
    <Route  path='/Skills' element={<Skills/>}></Route>
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
    href="https://new-portfolio-iota-sand.vercel.app/"
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
    <p>I am a web developer who is ready to get to work building the best websites possible.</p>
    <p>I can build a responsive web experience tailored for different tasks through the use of React or vanilla JS, CSS, and HTML. Along with these basics, I can incorporate different libraries and software such as Three.js, Parallax.js, Cannon.js, Github to manage source control, and Blender to develop 3d models.</p>
    <p>What makes me valuable is that I'm always ready to learn something new!</p>
  </div>
);

const Skills = () => (
  <div className='about'>
    <img src={logo} className="App-logo" alt="logo" />

    <h1>My Skills</h1>
    <ul>
      <li>Three.js</li>
      <li>Cannon.js</li>
      <li>Parallax.js</li>
      <li>Blender</li>
      <li>Github</li>
      <li>Git</li>
      <li>Vercel</li>
      <li>*Webscraping</li>
      <li>*Python</li>
    </ul>
  </div>
)


function App() {
  return (
    <div className='App'>
      <Nav/>
      <Main/>
    </div>
  );
}

export default App;
