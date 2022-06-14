import { useState } from "react"
import { useNavigate } from "react-router-dom";

function UserForm() {
  let navigate = useNavigate();
  const initialState = { username: "", email: "", }
  const [data, setData] = useState({ ...initialState });
  const [btnIsDisabled, setBtnIsDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleInputChange = (ev) => {
    if (data.username.length <= 3) {
      setMessage('Username must be at least 3 characters')
      setBtnIsDisabled(true)
    } else {
      setMessage(null)
      setBtnIsDisabled(false)
    }
    console.log(ev.target.name, ev.target.value);
    setData({
      ...data,
      [ev.target.name]: ev.target.value,
    })
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(`sending data... ${data.name} ${data.email}`);
    clearState();
    setMessage("Formulario enviado con éxito");
    setTimeout(() => { navigate("/") }, 1000)
  }
  const clearState = () => { setData({ ...initialState }); };

  return (
    <>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={data.username}
          onChange={handleInputChange}
          name="username"
        />
        <input
          type="email"
          placeholder="email"
          value={data.email}
          onChange={handleInputChange}
          name="email"
        />
        <button type="submit" disabled={btnIsDisabled}>Send</button>
        <button type="reset" onClick={clearState}>Reset</button>
      </form>
      {message}
    </>
  )
}

export default UserForm