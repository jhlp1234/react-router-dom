import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Test() {
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/test' element={<Test/>}></Route>
      </Routes>
      <li><Link to="/">Home</Link></li>
      <li><a href='/test'>Test</a></li>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
