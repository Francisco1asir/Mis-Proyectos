import React from 'react'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet } from 'react-router-dom';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import fotofran from '../../img/FotoFran.png'


export const Main = () => {
    return (
        <section id="sc2">
            <Outlet />
        </section>
        // <main>
        //     <section className="d">
        //         <section id="sc1">
        //             <div className="tittle-ppal">
        //                 <h2 className='nombre'>Francisco Parra presenta:</h2>
        //                 <h1 className='tittle'>Mi Portfolio<sub>En_react</sub> </h1>
        //                 <p>Francisco Parra Navarro, estudiante del ciclo superior de administración de sistemas en red, presenta su nuevo e inovador portfolio creado en react con el cuál ha aprendido mucho sobre este lenguaje y como implementarlo.</p>
        //             </div>
        //             <div className="angle">
        //                 <FontAwesomeIcon icon={faAngleDown} />
        //             </div>
        //             <div className="social">
        //                 <a href="https://youtube.com"><FaYoutube /></a>
        //                 <a href="https://youtube.com"><FaTwitch /></a>
        //                 <a href="https://youtube.com"><FaInstagram /></a>
        //                 <a href="https://youtube.com"><FaGithub /></a>
        //             </div>
        //         </section>
        //         <figure id='fotofran'>
        //             {/* <img src={fotofran} /> */}
        //         </figure>
        //     </section>
        // </main>
    )
}
