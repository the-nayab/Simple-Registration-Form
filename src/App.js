import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = { firstName: "",lastName: "",username: "", email: "", mobile: "",course: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors,formValues,isSubmit]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) {
      errors.firstName = "First Name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile Number is required!";
    }
    if (!values.course) {
      errors.course = "Course is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
 
  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <h4>Registered successfully</h4>
      ): (<h5>Please Enter Appropirate Data</h5>)}

      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">

        <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.firstName}</p>

          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.lastName}</p>

          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>

          <div className="field">
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formValues.mobile}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.mobile}</p>

          <div className="field">
            <label>Course</label>
            <input
              type="text"
              name="course"
              placeholder="Course"
              value={formValues.course}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.course}</p>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;