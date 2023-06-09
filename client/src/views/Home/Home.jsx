import React from "react";
//import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonTypes } from "../../redux/actions";
import Card from "../../components/Card/Card";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Home.module.css";
import { getAllPokemons } from "../../redux/actions";
const Home = () => {
  //estados
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);

  //Paginado
  const [page, setPage] = useState(1);
  const showPerPage = 12;
  const lastOnPage = page * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;
  const shownPokemons = pokemons.slice(firstOnPage, lastOnPage);

  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };
  //efectos
  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getPokemonTypes());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {pokemons.length > 0 && (
        <div className="">
          <NavBar setPage={setPage} types={types} showPerPage={showPerPage} />
        </div>
      )}
      {shownPokemons.length > 0 ? (
        <div className={styles.conteinerPagination}>
          <br />
          <Pagination
            showPerPage={showPerPage}
            pokemons={pokemons.length}
            paginate={paginate}
            page={page}
          />
        </div>
      ) : null}
      {!pokemons.length > 0 && <Loading />}
      <div className={styles.cardContainer}>
        {pokemons.length > 0
          ? shownPokemons.map((poke) => {
              return (
                <Card
                  key={poke.id}
                  id={poke.id}
                  name={poke.name}
                  types={
                    !poke.types ? poke.Types.join(" ") : poke.types.join(" ")
                  }
                  image={!poke.image ? poke.imagen : poke.image}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Home;
