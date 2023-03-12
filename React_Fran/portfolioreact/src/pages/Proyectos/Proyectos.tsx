import React from 'react'
import './Proyectos.css'
import Msg from './common/modal'


export const Proyectos = () => {
  return (
    <>
      <section id='proyectos'>
        <h1 id='tittle'>Proyectos</h1>
        <p>A continuación se presentan todos los proyectos que Francisco ha realizado a lo largo de su trayectoria
          con los cuáles ha aprendido mucho sobre cierto lenguajes de marcas y de programación</p>
        <p>Todos estos proyectos se pueden encontrar en mi página web <a href="https://frparra.vercel.app/">frparra</a> también se tiene pensado disponer de una VPS y crear una API para obtener un mayor aprendizaje y experiencia con estas nuevas novedades y tecnologías que molan tanto</p>
        <Msg />
      </section>



    </>
  )
}
