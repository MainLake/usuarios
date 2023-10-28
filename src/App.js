import FormUsuario from "./components/FormUsuario";
import TableUser from "./components/TableUsers";
import { useUsersContext } from "./context/userContext";


const App = () => {

  const {users, setUsers} = useUsersContext();

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">
        React Usuarios con axios y json web server
      </h1>

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Formulario</div>
            <div className="card-body">
              <FormUsuario users={users} setUsers={setUsers} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Tabla de Usuarios</div>
            <div className="card-body">
              <TableUser usuarios={users} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
