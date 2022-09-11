import React, { useState, useEffect } from "react";
import { useParams, Route, useRouteMatch, Link } from "react-router-dom";
import ListaCategorias from "../components/ListaCategorias";
import "../assets/css/blog.css";
import ListaPost from "../components/ListaPost";
import { busca } from "../api/api";

const Categoria = () => {
  const [subCategorias, setSubCategorias] = useState([]);
  const { url,id } = useParams();
  const { path } = useRouteMatch();

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subCategoria);
    });
  }, [id]);
  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias />
        
      <ul className="lista-categorias container flex">
        {
            subCategorias.map(subcategoria=>(
                <li
                className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
                key={subcategoria}
            >
                <Link to={`${url}/${subcategoria}`}>
                    {subcategoria}
                </Link>
            </li>
            ))           
        }
      </ul>
      <Route exact path={`${path}/`}>
        <ListaPost url={`/posts?categoria=${id}`} />
      </Route>
    </>
  );
};

export default Categoria;
