import React, {Fragment, useState} from 'react';

import { v4 as uuidv4 } from 'uuid';

const Formulario = () => {

    //Crear State de Citas
    const[cita, actualizarCita] = useState({
        mascota: '',
        propietario:'',
        fecha: '',
        hora: '',
        sintomas:''
    });

    //Creamos un segundo state para el error de validacion
    //Este no tiene un false en vez de un parentesis debido a que 
    //no es un objeto, si no un valor primitivo
    const [error, actualizarError] = useState(false)


    //Funcion que se ejecuta cada que el usuario escribe un input

    // e es evento
    const actualizarState = e => {
        //console.log(e.target.name);
        //console.log(e.target.value);

        actualizarCita({
            ...cita, 
            [e.target.name]: e.target.value
        })
    }


    //Extraer los valores con destructuring
    const {mascota, propietario, fecha, hora, sintomas } = cita;

    //Cuando el usuario presiona Agregar cita
    const submitCita = e => { 
        //Preevenir la accion por default como en ajax
        e.preventDefault();


        // VALIDAR FORMULARIO
        // trim quita los espacios en blanco del principio y al final de la cadena

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || 
        hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);     
            // Es necesario clocar un return para que no se siga ejecutando el codigo
            return;
        }

        //ELIMINAR EL MENSAJE PREVIO
        actualizarError(false);


        // ASIGNAR UN ID
        actualizarCita({
            ...cita,
            id: uuidv4()
        });
        
        console.log(cita);

        // CREAR LISTA

        // REINICIAR FORM
    }


    //u-full-width es parte de la sintaxis de skeleton
    return (
        <Fragment>
            <h2>Crear Citas</h2>
            
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>    
            
            : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Feacha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                >
                    
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita
                </button>
            </form>
        </Fragment>
    );
}

export default Formulario;