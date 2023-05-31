import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../redux/actions";

const Detail = () => {
  let { id } = useParams();

  const dispatch = useDispatch();
  const detail = useSelector((state) => state.pokemon);
  useEffect(() => {
    dispatch(getPokemon(id));
  }, [id]);

  return (
    <>
      <h1>Esta es la vista de Detail</h1>
      <div>
        <img src={detail.img} alt="" width={200} height={200} />
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
    </>
  );
};

export default Detail;
