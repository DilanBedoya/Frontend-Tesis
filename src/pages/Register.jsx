import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

import imagenes from '../components/images'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/register.css'
import { IoMdPersonAdd } from "react-icons/io";
import Swal from 'sweetalert2';

import { useForm } from 'react-hook-form'
import axios from 'axios'
import NavBarComponent from '../components/Navbar';

export default function Register() {

    const navigate = useNavigate();

    //hook para el register
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Función que se ejecutará cuando el formulario se envíe
    const onSubmit = async (data) => {
        try {
            //url del endpoint
            const url = `${import.meta.env.VITE_URL_BACKEND}/docente/registro-docente`
            // Hacer la petición POST al backend
            const response = await axios.post(url, data);


            //mostrar alerta correcta
            Swal.fire({
                imageUrl: imagenes.alertEmail,
                title: '¡Registro correcto!',
                text: response.data.msg,
                confirmButtonText: 'OK',
                confirmButtonColor: 'black'
            });
            // Manejar la respuesta
            console.log('Respuesta exitosa:', response.data);
            //limpiar form
            reset();
            navigate("/");
        } catch (error) {
            // Manejar errores
            console.error('Error en la petición:', error);
            //mostrar alerta incorrecta
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response.data.msg,
                confirmButtonText: 'OK',
                confirmButtonColor: 'black'
            });
        }
    };


    return (
        <>
            {/* Barra de navegación */}
            <NavBarComponent />
            <div
                className="login-page"
                style={{
                    backgroundImage: `url('${imagenes.fondoRegister}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>

                    <div className="login-box p-4">
                        <div className="text-center mb-7">
                            <h1>
                                Registrate
                            </h1>
                            <IoMdPersonAdd style={{ fontSize: '4rem' }}></IoMdPersonAdd>
                        </div>
                        <Form onSubmit={handleSubmit(onSubmit)}>

                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" placeholder="Ingresa tu nombre" className={errors.nombre ? 'is-invalid mb-1' : 'mb-1'}
                                            {...register('nombre', {
                                                required: {
                                                    value: true,
                                                    message: "Nombre es requerido"
                                                },

                                            })}
                                        />

                                    </Form.Group>


                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicApellido">
                                        <Form.Label>Apellido</Form.Label>
                                        <Form.Control type="text" placeholder="Ingresa tu apellido" className={errors.apellido ? 'is-invalid mb-1' : 'mb-1'}
                                            {...register('apellido', {
                                                required: {
                                                    value: true,
                                                    message: "Apellido es requerido"
                                                },

                                            })}
                                        />
                                    </Form.Group>

                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicCiudad">
                                        <Form.Label>Ciudad</Form.Label>
                                        <Form.Control type="text" placeholder="Ingresa la ciudad" className={errors.ciudad ? 'is-invalid mb-1' : 'mb-1'}
                                            {...register('ciudad', {
                                                required: {
                                                    value: true,
                                                    message: "Ciudad es requerido"
                                                },

                                            })}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicDireccion">
                                        <Form.Label>Dirección</Form.Label>
                                        <Form.Control type="text" placeholder="Ingresa tu dirección" className={errors.Direccion ? 'is-invalid mb-1' : 'mb-1'}
                                            {...register('direccion', {
                                                required: {
                                                    value: true,
                                                    message: "Direccion es requerido"
                                                },

                                            })}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Correo Electrónico</Form.Label>
                                    <Form.Control type="email" placeholder="Ingresa un correo electrónico" className={errors.email ? 'is-invalid mb-1' : 'mb-1'}
                                        {...register('email', {
                                            required: {
                                                value: true,
                                            },
                                            //Validar luego para el correo

                                            // pattern: {
                                            //     value: /^[a-z0-9._%+-]+@epn\.edu\.ec$/,
                                            //     message: "El correo debe ser institucional - @epn.edu.ec"
                                            // }

                                        })}
                                    />
                                </Form.Group>
                                {errors.email && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.email.message}</span>}

                            </Row>
                            <Row>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type='text' placeholder="Ingresa una contraseña" className={errors.password ? 'is-invalid mb-1' : 'mb-1'}
                                        {...register('password', {
                                            required: {
                                                value: true,
                                            },
                                            minLength: {
                                                value: 3,
                                                message: "Debe tener más de tres dígitos"
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: "Debe tener menos de 20 dígitos"
                                            }

                                        })}

                                    />
                                </Form.Group>
                                {errors.password && <span style={{ color: 'red', fontSize: '0.8rem', }}>{errors.password.message}</span>}

                            </Row>
                            <br />
                            <Row>
                                <Button variant="dark" type="submit" className="w-100">
                                    Registrarse
                                </Button>
                            </Row>

                        </Form>
                        <br />
                        <p>¿Ya tienes cuenta? <Link to="/login" style={{ color: 'black' }}>Iniciar Sesión</Link></p>

                    </div>
                </Container>
            </div>
        </>
    );
}
