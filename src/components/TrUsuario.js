const TrUsuario = ({ usuario }) => {
  return (
    <tr className="table-row">
      <td className="table-cell">{usuario.id}</td>
      <td className="table-cell">{usuario.nombre}</td>
      <td className="table-cell">{usuario.apellidos}</td>
      <td className="table-cell">{usuario.email}</td>
    </tr>
  );
};

export default TrUsuario;
