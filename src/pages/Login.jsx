import React from "react";
import Button from "../components/ui/Button";
const Login = () => {
  return (
    <div>
      <h1>login</h1>
      <button>Hello</button>
      <Button
        onClick={() => {
          alert("Hi Asad Noor");
        }}
        type='submit'
        disabled={false}
        className='btn-danger'
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
