import { useAuth } from 'context/auth-context'
import { ProjectListScreen } from 'screens/project-list'

export const AuthApp = () => {
  const { logout } = useAuth()
  return (
    <div>
      <button onClick={logout}>Logout</button>
      <ProjectListScreen />
    </div>
  )
}
