import { useAuth } from 'context/auth-context'
import { UnauthApp } from 'unauth-app'
import { AuthApp } from './auth-app'
import './App.css'

function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      { user ? <AuthApp /> : <UnauthApp /> }
    </div>
  );
}

export default App;
