import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Landing } from './pages/Landing'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { Body } from './components/Body'
import { ToastContainer } from 'react-toastify'
import About from './components/About'
import Feature from './components/Feature'





function App() {

  return (
    <>
    
        <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
      
      <div>
        <Routes>
          <Route path='/' element={<Body/>}>
            <Route index element={<Landing/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/history' element={<History/>}/>
            <Route path='/features' element={<Feature/>}/>
            <Route path='/about' element={<About/>}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
