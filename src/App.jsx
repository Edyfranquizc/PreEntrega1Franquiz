
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { NavBar } from './Components/Navbar/Navbar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {


  return (
    
    <BrowserRouter>
    <div className='App'>
    <NavBar/>
    <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:cid' element={<ItemListContainer/>} />
        <Route path='/detail/:pid' element={<ItemDetailContainer/>} /> 


        <Route path='#' element={<Navigate to='/'/>} />
    </Routes>
    </div>
    </BrowserRouter>

    // <>
    //   <NavBar/>
    //   <ItemListContainer greeting ={"Bienvenidos a GameOver"}/>
    // </>
    
  

  )
}

export default App
