import logo from './logo.svg';
import './App.css';
import {NavLink,Routes, Route} from 'react-router-dom'
import React, { useEffect, useState } from "react"
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import  WalletButton  from "./WALLETS.js";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";


const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://gnews.io/api/v4/top-headlines?lang=en&token=2154d2a046993b65994698e0d5f45ecb")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data.articles)
        console.log(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const Conlog = ()=>{
    console.log(users)
  }

  return (
    <div>
      <Conlog/>
      {users.length > 0 && (
        <ul className='apia'>
          {users.map(user => (
            <li key={user.title}><p>{user.title}</p><p><a href={user.url}>{user.url}</a></p> </li>
          ))}
        </ul>
      )}
    </div>
  )
}


const Nav = () =>(
  <nav className='nav'>
    <ul>
      <li className='linav'><NavLink to = '/'>Home </NavLink></li>
      <li className='linav'><NavLink to = '/About'>About </NavLink></li>
      <li className='linav'><NavLink to = '/Skills'>Skills </NavLink></li>
      <li className='linav'><NavLink to = '/News'>News </NavLink></li>
      <li className='linav'><NavLink to = '/Donate'>Crypto </NavLink></li>
    </ul>
  </nav>
)
const Main= ()=>(
  <Routes>
    <Route  path='/' element={<Home/>}></Route>
    <Route  path='/About' element={<About/>}></Route>
    <Route  path='/Skills' element={<Skills/>}></Route>
    <Route  path='/News' element={<News/>}></Route>
    <Route  path='/Donate' element={<Donate/>}></Route>
  </Routes>
)
const Home= ()=>(
  <div className="Home">
  <img src={logo} className="App-logo" alt="logo" />

<header className="App-header">
  <p>
  This is my portfolio website built with React.JS. Have a look around!
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

    <h1 id='aboutH1'>About Me</h1>
    <p>I am a web developer who is ready to get to work building the best websites possible.</p>
    <p>I can build a responsive web experience tailored for different tasks through the use of React or vanilla JS, CSS, and HTML. Along with these basics, I can incorporate different libraries and software to accomplish tasks like a 3d world with simulated physics and movements, a site that reacts to the way you move your mouse and other inputs to catch the eye of the user, manage source control, webscrape, and develop 3d models and textures for them.</p>
    <p>What makes me valuable is that I'm always ready to learn and build something new!</p>
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
      <li>Ethers.js</li>
      <li>Web3Modal</li>
      <li>Blender</li>
      <li>Github</li>
      <li>Git</li>
      <li>Vercel</li>
      <li>*Webscraping</li>
      <li>*Python</li>
    </ul>
  </div>
)

const News = () =>(
  <div className='about'>
    <img src={logo} className="App-logo" alt="logo" />
  <h3 className='hnews'>from Gnews api</h3>
    <UsingFetch/>
  </div>
)

const Donate = () =>(
  <div className='about'>
    <img src={logo} className="App-logo" alt="logo" />
  <h3 className='hnews'>Help ya boii out!</h3>
  <WalletButton/>
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
