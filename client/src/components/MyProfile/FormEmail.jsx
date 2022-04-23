import { useState, useEffect } from "react";

export default function FormEmail(props){
  const [email, setEmail] = useState(props.email);
  const [error, setError] = useState("");

  const reset = function() {
    setEmail("");
  }
  const cancel = function() {
    reset();
    props.onCancel();
  }
  function validate() {
    if (email === "") {
      setError("Name cannot be blank");
      return;
    }
    else {
  
    setError("");
    props.onSave(email);
    }
  }

  return (
    <main>
      <section>
        <h1>Email:</h1>
        <form autoComplete="off" onSubmit={evt => evt.preventDefault()}>
          <input
            name="name"
            type="text"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
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