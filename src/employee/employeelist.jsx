import { Button, Card, Col, Container, Modal, Row, Table } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import AddEmployee from './addemployee';
import style from './employee.module.css'
import qs from 'qs';
import axios from 'axios';
import UpdateEmployee from './updateemployee';
import DelEmployee from './delemployee';

const EmployeeList = () => {

    // State to store the visibility of full details for each employee
    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [value, allValue]= useState("");
    const [id, SetId] = useState('');
    const [detailsVisible, setDetailsVisible] = useState({});
    const [modalContent, setModalContent] = useState(null);
    const [showModals, setShowModals] = useState(false);
    const [modalSizeE, setModalSizeE] = useState("lg");
    
      function refresh(){
        const fetchDatas = async () => {
        //   setLoading(true);
          const res = await axios.get(process.env.REACT_APP_BASE_URL + "employees/get-all", qs.stringify());
          setData(res.data);
        //   setLoading(false);
        };
        fetchDatas();
      }  
    
      // Toggle the visibility of employee details
      const toggleDetails = (id) => {
        setDetailsVisible(prevState => ({
          ...prevState,
          [id]: !prevState[id]
        }));
      };
      function setupEmpModal(key, employee) {
        if(key === 'add-employee') {
            setModalSizeE('lg');
            setModalContent("");
            setModalContent(<AddEmployee closeModal={() => setShowModals(false)} refresh={refresh} />);
            setShowModals(true);
        }
      }
      function AddEmployeeModal(props) {
        return (
          <Modal {...props} size={modalSizeE}>
            {modalContent}
          </Modal>
        );
      }
      function editEmployee(employee){
        if(employee.ID) {
          allValue(employee)
        }else{
          allValue('')
        }
      }
      function delEmp(ID){
        if(ID){
          SetId(ID);
        }else {
          SetId(null);
        }
      }
    useEffect(()=>{
        const fetchDatas = async () => {
            // setLoading(true);
            const res = await axios.get(process.env.REACT_APP_BASE_URL + "employees/get-all", qs.stringify());
            setData(res.data);
            // setLoading(false);
          };
          fetchDatas();
    },[])
    return(
        <>
            <div className="App">
                <section>
                    <Container style={{minHeight: "100vh",paddingTop: "50px"}}>
                        <Row className="justify-content-md-center">
                            <Col xs lg="8">
                                <Card>
                                    <Card.Header className='d-flex justify-content-between p-3' style={{backgroundColor:"transparent"}}>
                                        <Card.Title>Employee</Card.Title>
                                        <Button onClick={() => setupEmpModal('add-employee')}><FaPlus /> Add Employee</Button>
                                    </Card.Header>
                                    <Card.Body>
                                        <Container className="container mt-5 justify-content-start">
                                            <Table>
                                                <tbody>
                                                    {data.map((employee) => (
                                                        <tr key={employee.ID} style={{textAlign:"left"}}>
                                                            <td>
                                                                <p className='m-0 p-0'><strong>Name:</strong> {employee.Name}</p>
                                                                <p className='m-0 p-0'><strong>Position:</strong>{employee.Position}</p> 
                                                                {detailsVisible[employee.ID] && (
                                                                    <div className="mt-0" style={{paddingLeft:"0"}}>
                                                                        <p className='m-0'><strong>Department:</strong> {employee.Department}</p>
                                                                        <p className='m-0'><strong>Email:</strong> {employee.Email}</p>
                                                                        <p className='m-0'><strong>Phone:</strong> {employee.Phone}</p>
                                                                    </div>
                                                                )}
                                                            </td>
                                                            <td>
                                                                <button className="btn btn-primary outline-none m-1" onClick={() => toggleDetails(employee.ID)}>
                                                                    {detailsVisible[employee.ID] ? 'Less Details' : 'More Details'}
                                                                </button>
                                                                <button className='btn btn-secondary outline-none m-1' onClick={(e) => editEmployee(employee) }>Update</button>
                                                                <button className='btn btn-danger outline-none m-1' onClick={(e) => delEmp(employee.ID) }>Delete</button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                            {/* <ul className="list-group">
                                                {employees.map((employee) => (
                                                <li key={employee.id} className="list-group-item">
                                                    <h5>{employee.name}</h5>
                                                    <p>{employee.position}</p>
                                                    <button className="btn btn-primary" onClick={() => toggleDetails(employee.id)}>
                                                    {detailsVisible[employee.id] ? 'Less Details' : 'More Details'}
                                                    </button>
                                                    {detailsVisible[employee.id] && (
                                                    <div className="mt-3">
                                                        <p><strong>Department:</strong> {employee.department}</p>
                                                        <p><strong>Email:</strong> {employee.email}</p>
                                                        <p><strong>Phone:</strong> {employee.phone}</p>
                                                    </div>
                                                    )}
                                                </li>
                                                ))}
                                            </ul> */}
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <AddEmployeeModal show={showModals} refresh={refresh} onHide={() => setShowModals(false)} contentClassName={style.add_employee_modal} />
                {value.ID && <UpdateEmployee value={value} editEmployee={editEmployee} refresh={refresh} />}
                {id && <DelEmployee id={id} refresh={refresh} delEmp={delEmp} />}
               
            </div>
        </>
    )
}

export default EmployeeList;