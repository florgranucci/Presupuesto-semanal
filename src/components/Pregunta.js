import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({setPresupuesto, setRestante, actualizarPregunta}) => {

    //Definir state 
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);


    //Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value, 10)); //parseInt convierte strings a number
    }

    //Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault(); //Evita los query stirngs y que se actualice la pagina

        //Validar form
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true);
            return;
        }


        //Si la validacion es ccorrecta
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        actualizarPregunta(false);
    }

    return ( 
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>

            {error ? <Error mensaje="El presupuesto no es válido"/>: null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>

        </Fragment>

     );
}

//Documentar componente
Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;