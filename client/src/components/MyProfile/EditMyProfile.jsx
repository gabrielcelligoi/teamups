import ShowName from "./ShowName";
import FormName from "./FormName";
import ShowEmail from "./ShowEmail"
import FormEmail from "./FormEmail"
import { useLocation } from "react-router-dom";
import useVisualMode from "../../hooks/useVisualMode";
import ShowPassword from "./ShowPassword";
import FormPassword from "./FormPassword";


export default function EditMyProfile(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const EDITNAME = "EDITNAME"
  const EDITEMAIL = "EDITEMAIL"
  const EDITPASSWORD = "EDITPASSWORD"
  const location = useLocation();
  const user = location.state.users[0];
  const { mode, transition, back } = useVisualMode(
    user ? SHOW : EMPTY
  );

  return (
    <section>
      {mode === SHOW && (
        <ShowName
        name={user.name}
        onEdit={() => transition(EDITNAME)}
        />
      )}
      {mode === EDITNAME && (
        <FormName 
        name={user.name}
        onCancel={back}
        onSave={() => transition(SHOW)}
        />
      )}
      {mode === SHOW && (
        <ShowEmail 
        email={user.email}
        onEdit={() => transition(EDITEMAIL)}/>
      )}
      {mode === EDITEMAIL && (
        <FormEmail 
        email={user.email}
        onCancel={back}
        onSave={() => transition(SHOW)}/>
      )}
            {mode === SHOW && (
        <ShowPassword 
        password={user.password}
        onEdit={() => transition(EDITPASSWORD)}/>
      )}
            {mode === EDITPASSWORD && (
        <FormPassword
        password={user.password}
        onCancel={back}
        onSave={() => transition(SHOW)}/>
      )}
    </section>
  )
}