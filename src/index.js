import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar'
import Catogery from './components/catogery';
import Topics from './components/topics'
import Final__topics from './components/final__topics';
const root=ReactDOM.createRoot(document.getElementById("root"))


root.render(<>
  <Navbar></Navbar>
  <Catogery></Catogery>
  <Topics></Topics>
  <Final__topics></Final__topics>
  </>
)