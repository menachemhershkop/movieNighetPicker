import Layout from './components/Layout'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Seats from './pages/Seats'

function App() {


  return (
    <>
      <Layout>
      <Routes>
       
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movie/:id' element={<MovieDetails/>}></Route>
        <Route path='/seats/:id' element={<Seats/>}></Route>       
      </Routes>
    </Layout>
    
    </>
  )
}

export default App