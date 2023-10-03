import React, { useState } from "react";
import Navbar from "./Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Home from "./Home";
import Footer from "./Footer";

const App = () => {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addUser = () => {
    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = { userName, password, email, mobileNo };
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, { userName, password, email, mobileNo }]);
    }
    setUserName("");
    setPassword("");
    setEmail("");
    setMobileNo("");
  };

  const editUser = (index) => {
    const userToEdit = users[index];
    setUserName(userToEdit.userName);
    setPassword(userToEdit.password);
    setEmail(userToEdit.email);
    setMobileNo(userToEdit.mobileNo);
    setEditIndex(index);
  };

  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
    setEditIndex(null);
  };

  return (
    <>
      <Navbar />
      <div className="container back   mt-5  text-center">
        <h1 className="mt-5 border-bottom border-3 border-dark">
          {" "}
          USER <span className=" text-primary">DETAILS</span>
        </h1>
        <div className="mt-5">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            className="form-control mt-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="email"
            className="form-control mt-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            className="form-control mt-2"
            placeholder="Mobile No"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <button className="btn btn-primary mt-3 mb-2" onClick={addUser}>
            {editIndex !== null ? "Update User" : "Add User"}
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered border-dark">
            <thead>
              <tr>
                <th>Username</th>
                <th>Password</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.userName}</td>
                  <td>{user.password}</td>
                  <td>{user.email}</td>
                  <td>{user.mobileNo}</td>
                  <td>
                    <button
                      className="btn btn-warning me-2 mb-1"
                      onClick={() => editUser(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
