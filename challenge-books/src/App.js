
import Sidebar from './Components/layout/Sidebar';
import './index.css'
import Dashboard from './Components/dashboard/Dashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
     <Router>
      <div className="contenedor-app">
        <Sidebar />
        <div className="seccion-principal">
         <header className='app-header'><span>Hola <b> libros! </b></span></header>
          <main>
          <Routes>
            <Route exact path="/" element={<Dashboard/>}/>
          </Routes>
          </main>
      </div>
    </div>
     </Router>
      
     
  );
}

export default App;
