import React, {Fragment} from 'react';
import Formulario  from './components/Formulario';

function App() {
  return (
    //AqUi estamos usando skeleton, una libreria similar a bootstrap
    //En bootstrap para el grind, se usa col-md-x y en skeleton
    //es one-half column
    <Fragment>
      <h1>Administrador de pacientes</h1>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
           <Formulario />
          </div>
          <div className="one-half column">
            
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
