import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { getPokemon, getPokemonById, resetState } from "../../redux/actions";

const Detail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.pokemon);

  const reset = () => {
    dispatch(resetState());
  };
  useEffect(() => {
    dispatch(getPokemonById(id));
    // dispatch(getPokemons());
  }, [dispatch, id]);

  return (
    <>
      <h1>Esta es la vista de Detail</h1>
      <div>
        <img src={detail.image ? detail.image :detail.img} alt="" width={200} height={200} />
        <h1>Name: {detail.name}</h1>
        <h3>ID: {detail.id}</h3>
      </div>
      <div>
        <h2>Hp : {detail.hp}</h2>
        <h2>Attack : {detail.attack}</h2>
        <h2>Defense : {detail.defense}</h2>
        <h2>Speed : {detail.speed}</h2>
        <h2>Height : {detail.height}</h2>
        <h2>Weight : {detail.weight}</h2>
        <h2>
          Types : {"  "}
          {!detail.createdInDb ? detail.types + " " : detail.Types + " "}
        </h2>
      </div>
      <Link to={"/home"} onClick={() => reset()} className="">
        Back to Home
      </Link>
    </>
    ///////
    // <div className="">
    //   {detail.name && detail.types ? (
    //     <div className="">
    //       <div className="">
    //         <h2>{detail.name.toUpperCase()}</h2>
    //       </div>
    //       <div className="">
    //         <p>{detail.types[0] ? detail.types[0].toUpperCase() : null}</p>
    //         {/* <img
    //           src={
    //             pokemon.types[0] === "bug"
    //               ? bug
    //               : pokemon.types[0] === "dark"
    //               ? dark
    //               : pokemon.types[0] === "dragon"
    //               ? dragon
    //               : pokemon.types[0] === "electric"
    //               ? electric
    //               : pokemon.types[0] === "fairy"
    //               ? fairy
    //               : pokemon.types[0] === "fighting"
    //               ? fighting
    //               : pokemon.types[0] === "fire"
    //               ? fire
    //               : pokemon.types[0] === "flying"
    //               ? flying
    //               : pokemon.types[0] === "ghost"
    //               ? ghost
    //               : pokemon.types[0] === "grass"
    //               ? grass
    //               : pokemon.types[0] === "ground"
    //               ? ground
    //               : pokemon.types[0] === "ice"
    //               ? ice
    //               : pokemon.types[0] === "normal"
    //               ? normal
    //               : pokemon.types[0] === "poison"
    //               ? poison
    //               : pokemon.types[0] === "psychic"
    //               ? psychic
    //               : pokemon.types[0] === "rock"
    //               ? rock
    //               : pokemon.types[0] === "steel"
    //               ? steel
    //               : pokemon.types[0] === "water"
    //               ? water
    //               : pokemon.types[0] === "unknown"
    //               ? unknown
    //               : pokemon.types[0] === "shadow"
    //               ? shadow
    //               : null
    //           }
    //           alt="not found"
    //           className={styles.icon}
    //         /> */}
    //       </div>
    //       <div className="">
    //         <p>{detail.types[1] ? detail.types[1].toUpperCase() : null}</p>
    //         {/* <img
    //           src={
    //             pokemon.types[1] === "bug"
    //               ? bug
    //               : pokemon.types[1] === "dark"
    //               ? dark
    //               : pokemon.types[1] === "dragon"
    //               ? dragon
    //               : pokemon.types[1] === "electric"
    //               ? electric
    //               : pokemon.types[1] === "fairy"
    //               ? fairy
    //               : pokemon.types[1] === "fighting"
    //               ? fighting
    //               : pokemon.types[1] === "fire"
    //               ? fire
    //               : pokemon.types[1] === "flying"
    //               ? flying
    //               : pokemon.types[1] === "ghost"
    //               ? ghost
    //               : pokemon.types[1] === "grass"
    //               ? grass
    //               : pokemon.types[1] === "ground"
    //               ? ground
    //               : pokemon.types[1] === "ice"
    //               ? ice
    //               : pokemon.types[1] === "normal"
    //               ? normal
    //               : pokemon.types[1] === "poison"
    //               ? poison
    //               : pokemon.types[1] === "psychic"
    //               ? psychic
    //               : pokemon.types[1] === "rock"
    //               ? rock
    //               : pokemon.types[1] === "steel"
    //               ? steel
    //               : pokemon.types[1] === "water"
    //               ? water
    //               : pokemon.types[1] === "unknown"
    //               ? unknown
    //               : pokemon.types[1] === "shadow"
    //               ? shadow
    //               : null
    //           }
    //           alt="not found"
    //           className={styles.icon}
    //           hidden={pokemon.types.length < 2 ? true : false}
    //         /> */}
    //       </div>
    //       <div className="">
    //         <span>HP: {detail.hp}</span>
    //         <span>ATTACK: {detail.attack}</span>
    //         <span>DEFENSE: {detail.defense}</span>
    //       </div>
    //       <div className="">
    //         <span>SPEED: {detail.speed}</span>
    //         <span>HEIGHT: {detail.height}</span>
    //         <span>WEIGHT: {detail.weight}</span>
    //       </div>
    //       {/* <div className="">
    //         <img
    //           src={pokemon.image ? pokemon.image : pokebola}
    //           alt="img not found"
    //           className={styles.image}
    //         />
    //       </div> */}
    //     </div>
    //   ) : (
    //     <p className="">Not found</p>
    //   )}
    //   <Link to={"/home"} onClick={() => reset()} className="">
    //     Back to Home
    //   </Link>
    // </div>
  );
};

export default Detail;
