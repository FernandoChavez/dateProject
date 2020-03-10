import React, {Fragment, useState, useEffect} from 'react';
import Formulario  from './components/Formulario';
import Cita  from './components/Cita';

function App() {

  //Arreglo de cita
  const [citas, guardarCitas] = useState([]);

  // Use Efffect para realizar ciertas operacion cuando el state cambia
  useEffect(() => {
    console.log('Documento listo o algo pasó con las citas');
  }, [citas]);

  //Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita =>{
    //Siempre tenemos que tomar una copia del state con el spread operator
    guardarCitas([...citas, cita]);
  }


  //Funcion que elimina una cita con su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  // Mensaje condicional
  const titulo = citas.length === 0 ?  'No hay citas': 'Administrar tus citas';

  return (
    //AqUi estamos usando skeleton, una libreria similar a bootstrap
    //En bootstrap para el grind, se usa col-md-x y en skeleton
    //es one-half column
    <Fragment>
      <h1>Administrador de pacientes</h1>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
           <Formulario 
              crearCita={crearCita}
           />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
