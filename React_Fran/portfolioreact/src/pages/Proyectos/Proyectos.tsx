import React from 'react'
import './Proyectos.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Msg from './common/modal';


export const Proyectos = () => {
  return (
    <>
      <section id='proyectos'>
        <h1 id='tittle'>Proyectos</h1>
        <p>A continuación se presentan todos los proyectos que Francisco ha realizado a lo largo de su trayectoria
          con los cuáles ha aprendido mucho sobre cierto lenguajes de marcas y de programación</p>
        <p>Todos estos proyectos se pueden encontrar en mi página web <a href="https://frparra.vercel.app/">frparra</a> también se tiene pensado disponer de una VPS y crear una API para obtener un mayor aprendizaje y experiencia con estas nuevas novedades y tecnologías que molan tanto</p>
        <ImageList>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                  {item.msg}
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      </section>



    </>
  )
}
const itemData = [
  {
    img: 'https://wallpapercave.com/wp/wp7420966.jpg',
    title: 'Diseño y creación de páginas webs',
    author: 'Diseño y programación de páginas webs con diferentes lenguajes de programación y con sistemas de gestión de contenidos',
    rows: 2,
    cols: 2,
    msg: <Msg />,
    featured: true,
  },
  {
    img: 'https://www.slinkywebdesign.com.au/file/why-is-responsive-web-design-so-important.jpg',
    title: 'Responsive Web Design',
    author: 'Diseño adaptable a diferentes pantallas de dispositivos incluyendo moviles, tablets, escritorio...',
  },
  {
    img: 'https://c0.wallpaperflare.com/preview/345/723/808/search-engine-optimization-seo-digital-marketing-laptop.jpg',
    title: 'Posicionamiento en SEO',
    author: 'Páginas Web optimizadas para facilitar su indexación en los motores de búsqueda son la base del buen posicionamiento',
  },
  {
    img: 'https://i.pinimg.com/originals/6d/fd/c0/6dfdc015089a0809eda60e0a4281588f.jpg',
    title: 'Mantemiento de Redes Sociales',
    author: 'Mantenimiento y gestión de redes sociales para una mayor administración de las mismas y rapidez de soporte a particualares',
    cols: 2,
  },
  {
    img: 'https://p4.wallpaperbetter.com/wallpaper/464/547/794/logo-laptop-microsoft-windows-10-wallpaper-preview.jpg',
    title: 'Gestión de sistemas Windows',
    author: 'Alta capacidad de gestión, administración y solución de errores en entornos windows tanto clientes como servidor',
    cols: 2,
  },
  {
    img: 'https://www.crucial.com//content/dam/ballistix/brand-assets/photography/builds/team-ballistix-memorial-pc-build/041019_Ballistix_Team_Ballistix_Memorial_Build_Image_02.PSD.transform/large-jpg/img.jpg',
    title: 'Reparación de equipos',
    author: 'Montaje, reparación, realización de presupuestos de equipos a informáticos a clientes para obtener el mejor ordenador a un precio asequible',
    rows: 2,
    cols: 2,
    featured: true,
  }
];