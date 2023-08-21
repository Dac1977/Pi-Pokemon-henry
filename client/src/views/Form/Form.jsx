import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getTypes, postPoke, resetState } from "../../redux/actions";
import validate from "./validate";
import style from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const reset = () => {
    dispatch(resetState());
  };
  const [form, setForm] = useState({
    name: "",
    imagen: "",
    hp: "",
    attack: "",
    defense: "",
    weight: "",
    height: "",
    speed: "",
    types: [],
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [property]: value,
    });
    validate({
      ...form,
      [property]: value,
    });
    setErrors(
      validate({
        ...form,
        [property]: value,
      })
    );
  };
  const submitHandler = (event) => {
    event.preventDefault(); //evita que se recarge la pagina
    try {
      dispatch(postPoke(form));
      alert("Personaje creado");
      setForm({
        name: "",
        imagen: "",
        hp: "",
        attack: "",
        defense: "",
        weight: "",
        height: "",
        speed: "",
        types: [],
      });
    } catch {
      alert("Error. Please try again");
      setForm({});
    }
  };
  const handlerSelect = (event) => {
    setForm({
      ...form,
      types: [...form.types, event.target.value],
    });
  };

  return (
    <div className={style.container}>
      <form onSubmit={submitHandler} className={style.form}>
        <h1>Crea tu Pokemon</h1>
        <div>
          <label className="">Name:</label>
          <input
            className={style.input}
            name="name"
            type="text"
            value={form.name}
            onChange={changeHandler}
          />
          <p className="">{errors.name}</p>
        </div>
        <div>
          <label className="">Imagen:</label>
          <input
            className={style.input}
            name="imagen"
            type="text"
            value={form.imagen}
            onChange={changeHandler}
          />
          <p className="">{errors.imagen}</p>
        </div>
        <div>
          <label className="">Hp:</label>
          <input
            className={style.input}
            name="hp"
            type="text"
            value={form.hp}
            onChange={changeHandler}
          />
          <p className="">{errors.hp}</p>
        </div>
        <div>
          <label className="">Attack:</label>
          <input
            className={style.input}
            name="attack"
            type="text"
            value={form.attack}
            onChange={changeHandler}
          />
          <p className="">{errors.attack}</p>
        </div>
        <div>
          <label className="">Defense:</label>
          <input
            className={style.input}
            name="defense"
            type="text"
            value={form.defense}
            onChange={changeHandler}
          />
          <p className="">{errors.defense}</p>
        </div>
        <div>
          <label className="">Speed:</label>
          <input
            className={style.input}
            name="speed"
            type="text"
            value={form.speed}
            onChange={changeHandler}
          />
          <p className="">{errors.speed}</p>
        </div>
        <div>
          <label className="">Weight:</label>
          <input
            className={style.input}
            name="weight"
            type="text"
            value={form.weight}
            onChange={changeHandler}
          />
          <p className="">{errors.weight}</p>
        </div>
        <div>
          <label className="">Height:</label>
          <input
            className={style.input}
            name="height"
            type="text"
            value={form.height}
            onChange={changeHandler}
          />
          <p className="">{errors.height}</p>
        </div>
        <label className="">Type: </label>
        <select className={style.types} onChange={handlerSelect}>
          {types?.map((type) => (
            <option value={type.name}>{type.name}</option>
          ))}
        </select>

        <p className="">{errors.types}</p>
        <li className="">{form.types.map((type) => type + " , ")}</li>
        <button className="">
          <span className="">Submit</span>
        </button>
        <br />
        <br />
        <Link to={"/home"} onClick={() => reset()}>
          Back to Home
        </Link>
      </form>
    </div>
  );
};

export default Form;
