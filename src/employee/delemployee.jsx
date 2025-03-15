import React from "react";
import { Formik } from "formik";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import qs from 'qs';

const DelEmployee = (props) => {
  var id = props.id;
  return (
    <div className="modal bs-example-sm fade show" id="delModal" tabIndex={-1} role="dialog" aria-hidden="true" style={{display:"block", backdropFilter: "brightness(0.5)"}} >
     
      <div className="modal-dialog">
        <div className="modal-content" style={{paddingBottom:"30px"}}>
            <div className="modal-header">
                <h5 className="modal-title">Delete Employee</h5>
            </div>
            <Formik initialValues={{ id: id}}
                onSubmit={(values, { setSubmitting }) => {
                const config = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }

                axios.delete(process.env.REACT_APP_BASE_URL+"employees/"+id, qs.stringify(values), config)
                    .then((response) => {
                        toast.success('Employee Deleted successfully', {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        props.refresh();
                        props.delEmp();
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
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body m-3 mb-0">
                            <div className="col-lg-12">
                                <h5 className="modal-title text-center" id="myCenterModalLabel">Are you sure want to delete?</h5>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center pb-10" style={{border:"none"}}>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>props.delEmp()}>
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary">Delete</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
      </div>
    </div>
  );
};

export default DelEmployee;
