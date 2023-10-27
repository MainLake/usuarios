import TrUsuario from "./TrUsuario";

const TableUser = ({ usuarios }) => {
  console.log("usuarios Table:", usuarios);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => {
          return <TrUsuario key={usuario.id} usuario={usuario} />;
        })}
      </tbody>
    </table>
  );
};

export default TableUser;
