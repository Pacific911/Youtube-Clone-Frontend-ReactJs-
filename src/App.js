import React from "react";
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Recommendedvideos from './components/Recommendedvideos';
function App() {
  return (
    <div>
     <Header />
     <div className="app_page">
     <Sidebar />
     <Recommendedvideos />
     </div>
    
    </div>
  );
}

export default App;
