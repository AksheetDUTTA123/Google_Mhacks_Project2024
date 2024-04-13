import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {Component} from 'react';
// Pages
import Landing from './pages/Landing.js';
import Home from './pages/Home.js';
// import {Login} from './components/Login.jsx';
// import Contact from './pages/Contact.js';
// import Chat from './components/Chat.jsx';
// import About from './pages/About.js';

function App() {

    return (
        <div className="App">
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossorigin="anonymous"
            />

            <script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"></script>
            <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />
            <script src="https://apis.google.com/js/api.js"></script>
            <Router basename={process.env.PUBLIC_URL}>
            <Routes>
            <Route exact path='/' element={<Landing/>} />
              <Route exact path="/home" element={<Home />} />
              {/* <Route exact path="/login" element={<Login />} /> */}
              {/* <Route exact path="/about" element={<About />} /> */}
              {/* <Route exact path="/contact" element={<Contact />} /> */}
              {/* <Route exact path="/chat" element={<Chat />} /> */}
            </Routes>
            </Router>
        </div>
      );
}

export default App;
