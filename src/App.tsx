import { useEffect, useState } from 'react'
import AddCityForm from './components/AddSityForm/AddCityForm'
import CityList from './components/CityList/CityList'
import { City, defaultCities } from './contst/consts'
import './App.css'

function App() {
  const [cities, setCities] = useState<City[]>(() => {
    const savedCities = localStorage.getItem('cities');
    return savedCities ? JSON.parse(savedCities).sort(compareCitiesName) : getUniqueCities(defaultCities);
  });

  function compareCitiesName(a: City, b: City): number {
    return a.name.localeCompare(b.name);
  }

  function getUniqueCities(list: City[]) {
    const listWithUniqueValues = list.reduce((acc: City[], current): City[] => {
      const city = acc.find((city) => {
        return city.name.toLowerCase() === current.name.toLowerCase();
      });
      if (!city) {
        acc.push(current);
      }
      return acc;
    }, []);
    listWithUniqueValues.sort(compareCitiesName);
    return listWithUniqueValues;
  }

  const addCity = (cityName: string) => {
    const cityAlreadyExists = cities.some((city) => {
      return city.name.toLowerCase() === cityName.toLowerCase();
    });
    if (cityAlreadyExists) {
      return false;
    }
    const newList = ([
      ...cities,
      {
        id: Date.now(),
        name: cityName,
      }]);
    newList.sort(compareCitiesName)
    setCities(newList);
    return true;
  };

  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cities));
  }, [cities]);

  return (
    <div className="app-container">
      <h1>City List</h1>
      <AddCityForm addCity={addCity}/>
      <CityList cities={cities}/>
    </div>
  )
}

export default App
