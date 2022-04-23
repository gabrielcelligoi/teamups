import { useState, useEffect } from "react";

export default function FormName(props){
  const [name, setName] = useState(props.name);
  const [error, setError] = useState("");

  const reset = function() {
    setName("");
  }
  const cancel = function() {
    reset();
    props.onCancel();
  }
  function validate() {
    if (name === "") {
      setError("Name cannot be blank");
      return;
    }
    else {
  
    setError("");
    props.onSave(name);
    }
  }

  return (
    <main>
      <section>
        <form autoComplete="off" onSubmit={evt => evt.preventDefault()}>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
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