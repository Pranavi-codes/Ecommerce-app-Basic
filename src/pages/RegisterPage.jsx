import React from "react";
import { toast, ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const [details, setDetails] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    dob: "",
    address: "",
    state: "",
    pinCode: "",
    password:""
  });
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);

    window.localStorage.setItem("details", JSON.stringify(details));

    toast.success("Register successfully 😊");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-container border border-success m-5 p-5"
    >
      <div className="row">
        <h1 className="text-center">Register</h1>
      </div>

      <div className="row">
        <div className="col">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            required
            name="firstName"
            className="form-control"
            placeholder="Enter First Name"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            required
            name="lastName"
            className="form-control"
            placeholder="Enter Last Name"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="">Email</label>
          <input
            type="email"
            required
            name="email"
            className="form-control"
            placeholder="abc@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="">PhoneNo</label>
          <input
            type="tel"
            required
            name="phoneNo"
            pattern="[6-9]{1}[0-9]{9}"
            className="form-control"
            placeholder="+91"
            onChange={handleChange}
          />
        </div>

        <div className="col">
          <label htmlFor="">Date of Birth</label>
          <input
            type="date"
            name="dob"
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <label htmlFor="">Address</label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            placeholder="enter full address"
            className="form-control"
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <label htmlFor="">State</label>
          <select
            name="state"
            onChange={handleChange}
            className="form-control"
            id=""
          >
            <option value="">Choose State</option>
            <option value="AP">AP</option>
            <option value="TL">TL</option>
            <option value="KL">KL</option>
            <option value="KA">KA</option>
            <option value="MA">MA</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="">Pin Code </label>
          <input
            className="form-control"
            name="pinCode"
            onChange={handleChange}
            type="number"
            placeholder="564210"
          />
        </div>
        <div className="col">
          <label htmlFor=""> Create Password </label>
          <input
            className="form-control"
            name="password"
            onChange={handleChange}
            type="password"
            minLength={6}
            maxLength={8}
            required
            placeholder="admin@123"
          />
        </div>
      </div>

      <div className="row m-2">
        <div className="col">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <button className="btn btn-warning mx-3" type="reset">
            Cancel
          </button>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};
export default RegisterPage;