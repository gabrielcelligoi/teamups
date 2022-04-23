import ShowName from "./ShowName";
import FormName from "./FormName";
import { useLocation } from "react-router-dom";
import useVisualMode from "../../hooks/useVisualMode";


export default function EditMyProfile(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const EDITNAME = "EDITNAME"
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
        onEditName={() => transition(EDITNAME)}
        />
      )}
      {mode === EDITNAME && (
        <FormName 
        name={user.name}
        onCancel={back}
        />
      )}
    </section>
  )
}