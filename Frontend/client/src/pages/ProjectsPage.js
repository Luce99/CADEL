import React, { useState } from "react";
import {
  Dialog,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
} from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import EditIcon from "@material-ui/icons/Edit";
import { Button as Btn } from "@material-ui/core";
import { Button } from "reactstrap";
import {
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

export default function ProjectsPage() {
  const GetProjects = gql`
    query {
      getProjects {
        _id
        nombre
        estadoProyecto
        faseProyecto
      }
    }
  `;

  const [modalEdit, setModalEdit] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [setPhase] = useState("");
  const [setState] = useState("");

  const { data, loading } = useQuery(GetProjects);

  const closeModalEdit = () => {
    setModalEdit(false);
  };

  const openModalEdit = () => {
    setModalEdit(true);
  };

  const closeModalAdd = () => {
    setModalAdd(false);
  };

  const openModalAdd = () => {
    setModalAdd(true);
  };

  return (
    <>
      <ApolloProvider>
        <div className="main_container">
          <h1>Projects Administration</h1>
          <div style={{ height: 500, width: "100%" }} className="principal-box">
            <Btn
              startIcon={<EditIcon style={{ height: 15 }} />}
              variant="contained"
              color="secondary"
              onClick={openModalEdit}
              className="main-btn"
              style={{ fontSize: 12, padding: 8 }}
            >
              Edit Projects
            </Btn>
            <Button color="success" onClick={openModalAdd} className="main-btn">
              Add Projects
            </Button>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Project Name</TableCell>
                    <TableCell>Phase</TableCell>
                    <TableCell>State</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loading ? (
                    <TableRow></TableRow>
                  ) : (
                    <>
                      {data &&
                        data.getProjects.map((projects) => (
                          <TableRow key={projects._id}>
                            <TableCell>{projects.nombre}</TableCell>
                            <TableCell>{projects.faseProyecto}</TableCell>
                            <TableCell>{projects.estadoProyecto}</TableCell>
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
                <h1>Projects</h1>
                <TextField
                  className="text-field"
                  label="State"
                  variant="filled"
                  required
                  onChange={(e) => {
                    setPhase(e.target.value);
                  }}
                />
                <TextField
                  className="text-field"
                  label="Phase"
                  variant="filled"
                  required
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                />
                <div>
                  <Button color="primary" className="modal-btn">
                    Accept
                  </Button>
                  <Button
                    color="danger"
                    onClick={closeModalEdit}
                    className="modal-btn"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Dialog>

            <Dialog
              open={modalAdd}
              onClose={closeModalAdd}
              className="main_modal"
            >
              <form>
                <TextField
                  className="text-field"
                  label="Project Name"
                  variant="filled"
                  required
                />
                <TextField
                  className="text-field"
                  label="Phase"
                  variant="filled"
                  required
                />
                <TextField
                  className="text-field"
                  label="State"
                  variant="filled"
                  required
                />
                <div>
                  <Button color="primary" className="modal-btn">
                    Add Project
                  </Button>
                  <Button
                    color="danger"
                    onClick={closeModalAdd}
                    className="modal-btn"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Dialog>
          </div>
        </div>
      </ApolloProvider>
    </>
  );
}
