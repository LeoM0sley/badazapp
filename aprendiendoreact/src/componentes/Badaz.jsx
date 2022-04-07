import React from 'react'
import maopinga from '../imagenes/maopelao.png'

export const Badaz = ({ name,job,texto,img }) => {

  console.log(name,job,texto);

  return (
    <div className='badaz-contenedor'>
      <img className='image-badaz' src={ img } alt={name}/>

      <div className='contenedor-texto-badaz'>
        <p className='nombre-badaz'>{ name }</p>
        <p className='cargo-badaz'>{ job }</p>
        <p className='texto-badaz'>{ texto }</p>

      </div>
    </div>
  )
}
