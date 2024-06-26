
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { store } from './store'
import Exercises from './components/Exercises'
import Navigation from './components/Navigation'
import { Provider } from 'react-redux'
import AddExercise from './components/AddExercise'
import EditExercise from './components/EditExercise'

function App() {
  

  return (
    <div>
      <Provider store={store}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Exercises />} />
        <Route path='/add/exercises' element={<AddExercise />} />
        <Route path='/edit/:id' element={<EditExercise />} />
      </Routes>
      </Provider>
    </div>
    
  )
}

export default App
