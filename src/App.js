// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react'
import './App.css';
import Sidenav from './components/Sidenav';
import Contentarea from './components/Contentarea';
import Flipkart from './Flipkart/Flipkart';
import Search from './Flipkart/Search';
import Login from './components/Login';


function App() {

  useEffect(()=>{
    return () =>{};
  },[])
  return (
    <div className="App">
     <div className='app-layout'>
     <Sidenav/>
      <Contentarea>
      <Search/>
      <Login/>
      <Flipkart/>
      
      </Contentarea>
     </div>
    </div>
  );
}

export default App;
