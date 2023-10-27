import { useState } from "react";
import getMaxId from "../utils/getMaxId";
import axios from "axios";

const URL = "http://localhost:3000/usuarios";

const FormUsuario = ({ users, setUsers }) => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
  });
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const nuevoUsuario = {
      id: getMaxId(users) + 1,
      nombre: userData.nombre,
      apellidos: userData.apellidos,
      email: userData.email,
    };

    console.log("Nuevo usuario: ", nuevoUsuario);

    axios
      .post(URL, nuevoUsuario)
      .then((res) => {
        console.log(res.data);
        setUsers([...users, res.data]);
        setMensaje("Se a agregado a el usuario con exito");
        setTimeout(() => {
          setMensaje("");
        }, 2000);
      })
      .catch((error) => {
        setMensaje("A ocurrido un error al agregar el usuario");
        setTimeout(() => {
          setMensaje("");
        }, 2000);
      });

    setUserData({ nombre: "", apellidos: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      {mensaje !== "" ? (
        <div className="alert alert-danger">{mensaje}</div>
      ) : null}
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          className="form-control"
          value={userData.nombre}
          onChange={(evt) =>
            setUserData({ ...userData, nombre: evt.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="apellidos" className="form-label">
          Apellidos
        </label>
        <input
          type="text"
          id="apellidos"
          className="form-control"
          value={userData.apellidos}
          onChange={(evt) =>
            setUserData({ ...userData, apellidos: evt.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={userData.email}
          onChange={(evt) =>
            setUserData({ ...userData, email: evt.target.value })
          }
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Subir
      </button>
    </form>
  );
};

export default FormUsuario;
