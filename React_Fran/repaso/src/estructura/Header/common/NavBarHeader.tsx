import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBarHeader = () => {
  return (
    <>
    <nav id='ln1'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/servicios'>Servicios</NavLink>
        <NavLink to='/proyectos'>Proyectos</NavLink>
        <NavLink to='/formacion'>Formacion</NavLink>
        <NavLink to='/ordenadores'>Ordenadores</NavLink>
    </nav>
    </>
  )
}
