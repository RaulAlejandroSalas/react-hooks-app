import { useEffect } from "react"
import { useState } from "react"

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'alejandro',
    email: 'alejandro@google.com'
  })

  const { username, email} = formState

  const onInputChange = ({target}) =>{
    const { name, value } = target
    console.log({name, value})
    setFormState({
        ...formState,
        [name]:value
    })
  }

  useEffect(()=>{
    console.log("UseEffect called!!!")
  })
  return (
        <>
            <h1>Simple Form</h1>
            <hr/>
            <input
                type="text"
                className="form-control"
                placeholder="UserName"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="text"
                className="form-control mt-2"
                placeholder="alejandro@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
        </>
    )
}
