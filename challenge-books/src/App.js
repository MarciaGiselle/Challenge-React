
import Sidebar from './Components/layout/Sidebar';
import './index.css'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Dashboard from './Components/dashboard/Dashboard';

function App() {
  return (
     
      <div className="contenedor-app">
      
      <Sidebar />
      <div className="seccion-principal">
         <header className='app-header'><span>Hola <b> libros! </b></span></header>
          <main>
            <div className='flex-container' >
                  <div className='section-left'>
                    
                  </div>

                <div className='section-right'>
                  <Dashboard/>
                </div>
              </div>


          </main>
        
      </div>
      </div>
     
  );
}

export default App;
