import Layout from './components/Layout'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'

function App() {


  return (
    <>
      <Layout>
      <Routes>
       
        <Route path='/' element={<Home/>}></Route>
        
                
      </Routes>
    </Layout>
    
    </>
  )
}

export default App