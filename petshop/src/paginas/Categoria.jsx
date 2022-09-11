import React from 'react'
import {useParams, Route, useRouteMatch}  from 'react-router-dom'
import ListaCategorias from '../components/ListaCategorias'
import '../assets/css/blog.css'
import ListaPost from '../components/ListaPost'

const Categoria = () => {
    
    const { id } = useParams()
    const { path } = useRouteMatch()

    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
        </div>
        <ListaCategorias/>
        <Route exact path={`${path}/`}>
            <ListaPost url={`/posts?categoria=${id}`}/>
        </Route>
        </>
    )
}

export default Categoria