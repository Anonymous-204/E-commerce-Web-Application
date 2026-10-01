import { BrowserRouter,Route, Routes } from 'react-router-dom'
import SignUpPage from './Pages/SignUpPage'
import SignInPage from './Pages/SignInPage'
import HomePage from './Pages/HomePage'
import './app.css'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='signup' element={<SignUpPage/>}></Route>
        <Route path='signin' element={<SignInPage/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
