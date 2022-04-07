
import { Badaz } from './componentes/Badaz'
import  fergos from './imagenes/Fergos333.png'
import  maopelao from './imagenes/maopelao.png'
import  juandiego from './imagenes/juandiego.png'

export const App = () => {
  return (
    <div className='App'>

        <div className='contenedor-principal'>
            <h1>Estos es lo que opina badaz de tu comentario conchetumare</h1>
            <Badaz  name='Jeremy Dalto Herrera Schurmann' job='Ingeniero de Software en Facebook' img={ maopelao} texto="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."/>
            <Badaz  name='Fergos 14' job='Ingeniero argrónomo' texto="badazhijodeperra" img={ fergos }/>
            <Badaz  name='cholito' job='Cabro' texto='Hola badaz' img={ juandiego }/>
        </div>
    </div>
  )
}
