
import Sidebar from './Components/Sidebar';
import './index.css'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

function App() {
  return (
      <div>
      <div className='side-top'></div>

      <div className="contenedor-app">
      <div className='side-left'></div>
      
      <Sidebar />
      <div className="seccion-principal">
          <main>
          <section className="section">
            <section className="section-item">hola</section>
            <section className="section-item">hola dos</section>
            <section className="section-item">hola tres</section>
            <section className="section-item">hola cuatrossssssssssssss</section>
          </section>

          <section className="section">
            <section className="section-item">
              
              <h1>hellou</h1></section>
            </section>

            <section className="section">
            <section className="section-item">hola</section>
            </section>
          </main>
        
      </div>
      </div>

      </div>
  );
}

export default App;
