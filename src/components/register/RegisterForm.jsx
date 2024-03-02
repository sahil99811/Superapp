import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './RegisterForm.css';

export default function RegisterForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    checkbox: null,
  });

  const navigate = useNavigate();

  const handleSignUp = () => {
    let isErrors = false;

    if (formValues.name.trim().length === 0) {
      setErrors((prev) => ({ ...prev, name: "Name is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, name: null }));
    }

    if (formValues.username.trim().length === 0) {
      setErrors((prev) => ({ ...prev, username: "Username is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, username: null }));
    }

    if (formValues.email.trim().length === 0) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, email: null }));
    }

    if (formValues.mobile.trim().length === 0) {
      setErrors((prev) => ({ ...prev, mobile: "Mobile is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, mobile: null }));
    }

    if (!formValues.checkbox) {
      setErrors((prev) => ({
        ...prev,
        checkbox: "Please accept the terms and conditions",
      }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, checkbox: null }));
    }

    if (!isErrors) {
      navigate("/movies");
      localStorage.setItem("userData", JSON.stringify(formValues));
    }
  };

  const handleChange = (e) => {
    console.log(e.target.checked)
    if(e.target.name=="checkbox")
    setFormValues({...formValues,[e.target.name]: e.target.checked})
    else
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    if (errors[e.target.name] !== null) {
      setErrors((prev) => ({ ...prev, [e.target.name]: null }));
    }
  };
  return (
    <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center", background: "#000000" }}>
      <div className="register-container">
        <div className="upper-part">
          <h1>Super app</h1>
          <p>Create your new account</p>
        </div>
        <form className="form">
          <input type="text" placeholder="Name" className="textInput" onChange={handleChange} value={formValues.name} name="name" />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          <input type="text" placeholder="UserName" className="textInput" onChange={handleChange} value={formValues.username} name="username" />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
          <input type="email" placeholder="Email" className="textInput" onChange={handleChange} value={formValues.email} name="email" />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          <input type="number" placeholder="Mobile" className="textInput" onChange={handleChange} value={formValues.mobile} name="mobile" />
          {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
          <div className="checkbox">
            <input type="checkbox" id="checkbox" onChange={handleChange} checked={formValues.checkbox} name="checkbox" />
            <p>Share my registration data with Superapp</p>
          </div>
          {errors.checkbox && <p style={{ color: "red" }}>{errors.checkbox}</p>}
          <button type="button" onClick={handleSignUp}>SIGN UP</button>
        </form>
        <div className="term-condition">
          <p>By Clicking on Sign up.you agree to Superapp <span style={{ color: "#72DB73" }}>Terms and Conditions of Use</span></p>
          <p>To learn more about how Superapp collects,uses,shares and protects your personal data please head Superapp <span style={{ color: "#72DB73" }}>Privacy Policy</span></p>
        </div>
      </div>
    </div>
  );
}
