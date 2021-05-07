import { FormEvent } from "react"

const apiUrl = process.env.REACT_APP_API_URL

export const LoginScreen = () => {

  const login = (param: { username: string, password: string }) => {
    fetch(
      `${apiUrl}/register`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(param)
      }
    ).then(async res => {
      if (res.ok) {
        // setUsers(await res.json())
      }
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = (e.currentTarget.elements[0] as HTMLFormElement).value
    const password = (e.currentTarget.elements[1] as HTMLFormElement).value
    login({ username, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" id="password"/>
      </div>
      <button type="submit">Signup</button>
    </form>
  )
}
