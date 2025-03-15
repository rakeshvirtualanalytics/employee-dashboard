/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import { toast } from "react-toastify";
import { Formik, useFormik } from "formik";
import { Col, Form, Modal, Row } from "react-bootstrap";
import * as Yup from 'yup';

const UpdateEmployee = (props) => {
    var id = props.value.ID; 
    var name = props.value.Name;
    var position = props.value.Position;
    var email = props.value.Email;
    var department = props.value.Department;
    var phone = props.value.Phone;
    

  const formik = useFormik({
    initialValues : {ID:id,name: name,position: position,department:department, email:email,phone:phone, },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
      axios.put(process.env.REACT_APP_BASE_URL + "employees/update", qs.stringify(values), config)
        .then((response) => {
          toast.success("Employee added successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          props.refresh();
          props.editEmployee({})
        })
        .catch((error) => {
          toast.error(error, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    },
  });
  useEffect(() => {
    
  }, []);
  
  return (
    <>
        <div className="modal fade show backdropFilter" id="updateemployee" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" style={{display:"block"}}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <Modal.Header onClick={()=>props.editEmployee({})}>
                        <Modal.Title>Add Employee</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={formik.handleSubmit} className="employeeModal">
                        <Modal.Body>
                            <Row>
                                <Col  lg={6} className="mb-3">
                                <label htmlFor="name" className="col-form-label" style={{width:"100%",textAlign:"left"}}>
                                    Employee Name:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Employee Name"
                                    name="name"
                                    id="name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <div style={{ color: 'red' }}>{formik.errors.name}</div>
                                )}
                                </Col>
                                <Col  lg={6} className="mb-3">
                                <label htmlFor="position" className="col-form-label" style={{width:"100%",textAlign:"left"}}>
                                    Position:
                                </label>
                                <input
                                    type="position"
                                    className="form-control"
                                    id="position"
                                    placeholder="Position"
                                    name="position"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.position}
                                />
                                {formik.touched.position && formik.errors.position && (
                                    <div style={{ color: 'red' }}>{formik.errors.position}</div>
                                )}
                                </Col>
                                <Col  lg={6} className="mb-3">
                                <label htmlFor="deparment" className="col-form-label" style={{width:"100%",textAlign:"left"}}>
                                    Department:
                                </label>
                                <input
                                    type="department"
                                    className="form-control"
                                    id="department"
                                    placeholder="Department"
                                    name="department"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.department}
                                />
                                {formik.touched.department && formik.errors.department && (
                                    <div style={{ color: 'red' }}>{formik.errors.department}</div>
                                )}
                                </Col>
                                <Col  lg={6} className="mb-2">
                                <label htmlFor="email" className="col-form-label" style={{width:"100%",textAlign:"left"}}>
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    id="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div style={{ color: 'red' }}>{formik.errors.email}</div>
                                )}
                                </Col>      
                                <Col  lg={6} className="mb-3">
                                <label htmlFor="phone" className="col-form-label" style={{width:"100%",textAlign:"left"}}>
                                    Mobile Number:
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Mobile Number"
                                    name="phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} 
                                    value={formik.values.phone}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <div style={{ color: 'red' }}>{formik.errors.phone}</div>
                                )}
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer style={{ border: "0px" }}>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={()=>props.editEmployee({})}
                            >
                                Close
                            </button>
                            <button type="submit" className="btn btn-primary">
                                {" "}
                                Save
                            </button>
                        </Modal.Footer>
                    </Form>
                </div>
            </div>
        </div>
    </>
  );
};

export default UpdateEmployee;
