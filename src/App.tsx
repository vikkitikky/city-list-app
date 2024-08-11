import './App.css'
import AddCityForm from './components/AddCityForm.tsx';
import CityList from './components/CityList.tsx';

function App() {

  return (
    <div>
      <h1>City List</h1>
      <AddCityForm />
      <CityList />
    </div>
  )
}

export default App
