
import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import EmployeeList from './employee/employeelist';
import { ToastContainer } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer/>
        <Routes>
          <Route exact path="/" element={<EmployeeList />}  />
          {/* <Route exact path="/home" component={HomePage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/admin-login" component={AdminLogin} /> */}
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
