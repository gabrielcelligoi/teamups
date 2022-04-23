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
      <section className='profile'>
        <h1>New Password:</h1>
        <div className='edit'>
        <form autoComplete="off" onSubmit={evt => evt.preventDefault()}>
          <input
            name="name"
            type="text"
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </form>
      <section>
        <section>
        <button onClick={validate}>Save</button>
          <button onClick={cancel}>Cancel</button>
        </section>
        </section>
        </div>
      </section>
    </main>
  );
}