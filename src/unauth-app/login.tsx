import { FormEvent } from "react"
import { useAuth } from '../context/auth-context'

export const LoginScreen = () => {

  const { login } = useAuth()

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
