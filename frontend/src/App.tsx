import { BrowserRouter,Route, Routes } from 'react-router-dom'
import SignUpPage from './Pages/SignUpPage'
import SignInPage from './Pages/SignInPage'
import HomePage from './Pages/HomePage'
import './app.css'
import ProfilePage from './Pages/ProfilePage'
import MyProductsPage from './Pages/MyProductsPage'
import CreateBNC from './Pages/CreateBNC'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='signup' element={<SignUpPage/>}></Route>
        <Route path='signin' element={<SignInPage/>}></Route>
        <Route path='profile' element={<ProfilePage/>}></Route>
        <Route path='my-products' element={<MyProductsPage/>}></Route>
        <Route path='bnc' element={<CreateBNC/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
