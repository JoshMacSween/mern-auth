import logo from './logo.svg'
import './App.css'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/pages/Home'
import Header from './components/layout/Header'
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
