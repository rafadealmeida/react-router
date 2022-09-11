import React, { useState, useEffect } from "react";
import {
  useParams,
  Route,
  useRouteMatch,
  Link,
  Switch,
} from "react-router-dom";
import ListaCategorias from "../components/ListaCategorias";
import "../assets/css/blog.css";
import ListaPost from "../components/ListaPost";
import { busca } from "../api/api";
import SubCategorias from '../paginas/SubCategorias'

const Categoria = () => {
  const { id } = useParams();

  const { url,path } = useRouteMatch();
  
  const [subcategorias, setSubCategorias] = useState([])
  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias)
    })
  }, [id])
  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias />

      <ul className="lista-categorias container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPost url={`/posts?categoria=${id}`} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
          <SubCategorias />
        </Route>
      </Switch>
    </>
  );
};

export default Categoria;
