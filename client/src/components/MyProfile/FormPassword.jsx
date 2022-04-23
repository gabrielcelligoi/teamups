import React, { useState } from 'react';

export default function FormPassword(props){
  const [password, setPassword] = useState(props.password);
  const [error, setError] = useState("");

  const reset = function() {
    setPassword("");
  }
  const cancel = function() {
    reset();
    props.onCancel();
  }
  function validate() {
    if (password === "") {
      setError("Password cannot be blank");
      return;
    }
    else {
  
    setError("");
    props.onSave(password);
    }
  }



  return (
    <main>
      <section>
        <h1>New Password:</h1>
        <form autoComplete="off" onSubmit={evt => evt.preventDefault()}>
          <input
            name="name"
            type="text"
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </form>
      <section>
        <section>
          <button onClick={cancel}>Cancel</button>
          <button onClick={validate}>Save</button>
        </section>
        </section>
      </section>
    </main>
  );
}