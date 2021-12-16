import {Modal, Form, Alert, Button} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import { useEffect } from 'react';
import editAccountResolver from '../../../validations/editAccountResolver';
import useAuth from '../../../auth/useAuth';


export default function EditModal({isOpen, close, user}){
    const {register, handleSubmit, formState: {errors, dirtyFields}, reset} = useForm({resolver: editAccountResolver});
    const {updateUser} = useAuth
    const isDirty = !!Object.keys(dirtyFields).length;


    const onSubmit = (formData) => {
        if(!isDirty) return;

        let newUserData;
        if(formData.role){
            newUserData = formData;

        } else {
            const {role, ...resFormData} = formData;
            newUserData = resFormData;
        }
        alert("Cambios realizados exitosamente")
        updateUser(newUserData);
        close();
    }

    useEffect(() =>{
        if(!isOpen){
            reset()
        }
    }, [isOpen, reset])

    useEffect(() =>{
        if (user)  reset({
                nombre: user.nombre,
                apellido: user.apellido,
                identificacion: user.identificacion,
                correo: user.correo,
                role: user.role

            })
        }, [user, reset])
    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Cambiar contraseña</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Escribe un nombre"
                            {...register("nombre")}
                      />
                       {errors.nombre &&(
                       <Form.Text>
                           <Alert variant="danger">
                               {errors.nombre.message}
                           </Alert>
                       </Form.Text>
                       )}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Escribe un apellido"
                            {...register("apellido")}
                      />
                       {errors.apellido &&(
                       <Form.Text>
                           <Alert variant="danger">
                               {errors.apellido.message}
                           </Alert>
                       </Form.Text>
                       )}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Identificacion</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Escribe la identificación"
                            {...register("identificacion")}
                      />
                       {errors.identificacion &&(
                       <Form.Text>
                           <Alert variant="danger">
                               {errors.identificacion.message}
                           </Alert>
                       </Form.Text>
                       )}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Correo</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Escribe un correo"
                            {...register("correo")}
                      />
                       {errors.correo &&(
                       <Form.Text>
                           <Alert variant="danger">
                               {errors.correo.message}
                           </Alert>
                       </Form.Text>
                       )}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rol</Form.Label>
                        <Form.Control 
                            as= "select"
                            disabled={!user?.role==='admin'}
                            {...register("role")}
                      >
                          <option>estudiante</option>
                          <option>admin</option>
                          <option>lider</option>
                          </Form.Control>
                       {errors.role &&(
                       <Form.Text>
                           <Alert variant="danger">
                               {errors.role.message}
                           </Alert>
                       </Form.Text>
                       )}
                    </Form.Group>
                </Form> 
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>Cancelar</Button>
                <Button variant="primary" onClick= {handleSubmit(onSubmit)}
                disabled={!isDirty}
                >Actualizar mi cuenta</Button>
                        
            </Modal.Footer>
        </Modal>
    )
}