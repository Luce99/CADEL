import React, { useState } from "react";
import {
  Dialog,
  TextField,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EditIcon from "@material-ui/icons/Edit";
import { Button as Btn } from "@material-ui/core";
import { Button } from "reactstrap";
import { gql, useMutation, useQuery } from "@apollo/client";

const LiderPage = () => {
  const GetUsuario = gql`
    query getusers {
      getUsers {
        _id
        nombre
        apellido
        tipoUsuario
        estado
      }
    }
  `;
  const UpdateUser = gql`
    mutation updateUser($id: String!, $tipoUsuario: String!, $estado: String) {
      updateUser(_id: $id, tipoUsuario: $tipoUsuario, estado: $estado) {
        id
      }
    }
  `;

  //

  const [modalEdit, setModalEdit] = useState(false);

  const openModalEdit = () => {
    setModalEdit(true);
  };
  const closeModalEdit = () => {
    setModalEdit(false);
  };

  // const rows = [
  //   ('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   ('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   ('Eclair', 262, 16.0, 24, 6.0),
  //   ('Cupcake', 305, 3.7, 67, 4.3),
  //   ('Gingerbread', 356, 16.0, 49, 3.9),
  // ];

  const [user] = useState({});
  // const [id, setId] = useState(0);
  // const [newStatus, setNewStatus] = useState("");
  // const [tipoUsuario, setRol] = useState("");
  const [estado, setStatus] = useState("");

  const [updateUser] = useMutation(UpdateUser);
  const handleSubmit = (e) => {
    updateUser({ variables: { ...user } });
  };

  const { data, loading } = useQuery(GetUsuario);
  
  return (
    <div className="main_container">
      <h1>Gestión de Usuarios</h1>
      <div style={{ height: "800px", width: "80vw" }} className="principal-box">
        <Btn
          startIcon={<EditIcon style={{ height: 15 }} />}
          variant="contained"
          color="secondary"
          className="main-btn"
          style={{ fontSize: 12, padding: 8 }}
          onClick={openModalEdit}
        >
          Editar usuario
        </Btn>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Rol (Lider)</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow></TableRow>
              ) : (
                <>
                  {data &&
                    data.getUsers.map((users) => (
                      <TableRow key={users._id}>
                        <TableCell>{users.tipoUsuario}</TableCell>
                        <TableCell>{users.nombre}</TableCell>
                        <TableCell>{users.apellido}</TableCell>
                        <TableCell>{users.estado}</TableCell>
                      </TableRow>
                    ))}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog
          open={modalEdit}
          onClose={closeModalEdit}
          className="main_modal"
        >
          <form className="main_modal">
            <h1>Gestión Usuarios</h1>
            <TextField
              className="text-field"
              label="estado de usuario"
              variant="filled"
              required
              value={estado}
              onChange={(e) => setStatus(e.target.value)}
            />
            <div>
              <Button
                color="primary"
                onClick={() => {
                  handleSubmit();
                }}
                className="modal-btn"
              >
                Aceptar
              </Button>
              <Button
                color="danger"
                onClick={closeModalEdit}
                className="modal-btn"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </Dialog>
      </div>
    </div>
  );
};

export default LiderPage;
