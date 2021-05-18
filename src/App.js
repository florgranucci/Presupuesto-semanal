import React,{ useState, useEffect } from 'react';
import { Pregunta, Formulario, Listado, Presupuesto } from './components';



function App() {

  //Definir state para presupuesto y presupuesto restante. Definidas en App.js porque fluyen en al menos otros dos componentes
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, setGasto] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  //Use effect que actualiza el restante
  useEffect(() => {

    //Agrega el nuevo presupuesto 
    if(crearGasto){
      setGasto([
        ...gastos,
        gasto
      ]);

      //Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      //resetear a false
      guardarCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante]);

  


  return (
    <div className="container">
      <header>
         <h1>GASTO SEMANAL</h1>
         <div className="contenido-principal contenido">
         {mostrarpregunta 
         ? (
           <Pregunta 
           setPresupuesto={setPresupuesto}
           setRestante={setRestante}
           actualizarPregunta={actualizarPregunta}
         />
         ) 
         : (

         <div className="row">
           <div className="one-half column">
             <Formulario 
               guardarGasto={guardarGasto}
               guardarCrearGasto={guardarCrearGasto}
             />
           </div>
           <div className="one-half column">
             <Listado 
               gastos={gastos}
             />
             <Presupuesto 
               presupuesto={presupuesto}
               restante={restante}
             />
           </div>
         </div>

         )}
         
         </div>
      </header>
    </div>
  );
}



export default App;
