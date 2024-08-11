import AddCityForm from './components/AddSityForm/AddCityForm.tsx';
import CityList from './components/CityList/CityList.tsx';
import { useEffect, useState } from 'react';
import './App.css';

export type City = { id: number, name: string };

const defaultCities: City[] = [
  {
    id: 1,
    name: "Абакан",
  },
  {
    id: 28,
    name: "Омск",
  },
  {
    id: 60,
    name: "Великий Новгород",
  },
  {
    id: 52,
    name: "Санкт-Петербург",
  },
  {
    id: 25,
    name: "Новосибирск",
  },
  {
    id: 45,
    name: "Краснодар",
  },
  {
    id: 44,
    name: "Кемерово",
  },
  {
    id: 75,
    name: "Вологда",
  },
  {
    id: 68,
    name: "Липецк",
  },
  {
    id: 9,
    name: "Екатеринбург",
  },
  {
    id: 11,
    name: "Иваново",
  },
  {
    id: 77,
    name: "Йошкар-Ола",
  },
  {
    id: 40,
    name: "Томск",
  },
  {
    id: 13,
    name: "Казань",
  },
  {
    id: 66,
    name: "Волгоград",
  },
  {
    id: 54,
    name: "Калининград",
  },
  {
    id: 69,
    name: "Тверь",
  },
  {
    id: 14,
    name: "Калуга",
  },
  {
    id: 17,
    name: "Красноярск",
  },
  {
    id: 62,
    name: "Ханты-Мансийск",
  },
  {
    id: 20,
    name: "Москва",
  },
  {
    id: 280,
    name: "Абакан",
  },
  {
    id: 22,
    name: "Надым",
  },
  {
    id: 70,
    name: "Новый Уренгой",
  },
  {
    id: 27,
    name: "Ноябрьск",
  },
  {
    id: 46,
    name: "Орёл",
  },
  {
    id: 224,
    name: "надым",
  },
  {
    id: 31,
    name: "Пермь",
  },
  {
    id: 12,
    name: "Ижевск",
  },
  {
    id: 49,
    name: "Иркутск",
  },
  {
    id: 79,
    name: "Петрозаводск",
  },
  {
    id: 61,
    name: "Петропавловск-Камчатский",
  },
  {
    id: 33,
    name: "Ростов-на-Дону",
  },
  {
    id: 50,
    name: "Владивосток",
  },
  {
    id: 3,
    name: "Белгород",
  },
  {
    id: 35,
    name: "Рязань",
  },
  {
    id: 37,
    name: "Саранск",
  },
  {
    id: 38,
    name: "Саратов",
  },
  {
    id: 23,
    name: "Нижний Новгород",
  },
  {
    id: 74,
    name: "Смоленск",
  },
  {
    id: 1,
    name: "Абакан",
  },
  {
    id: 24,
    name: "Новокузнецк",
  },
  {
    id: 15,
    name: "Киров",
  },
  {
    id: 55,
    name: "Сыктывкар",
  },
  {
    id: 53,
    name: "Архангельск",
  },
  {
    id: 67,
    name: "Тамбов",
  },
  {
    id: 64,
    name: "Тула",
  },
  {
    id: 47,
    name: "Тюмень",
  },
  {
    id: 48,
    name: "Улан-Удэ",
  },
  {
    id: 30,
    name: "Пенза",
  },
  {
    id: 51,
    name: "Хабаровск",
  },
  {
    id: 71,
    name: "Миасс",
  },
  {
    id: 6,
    name: "Воронеж",
  },
  {
    id: 41,
    name: "Челябинск",
  },
  {
    id: 5,
    name: "Владимир",
  },
  {
    id: 43,
    name: "Ярославль",
  },
];

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
      const city = acc.find((city) => city.name.toLowerCase() === current.name.toLowerCase());
      if (!city) {
        acc.push(current);
      }
      return acc;
    }, []);
    listWithUniqueValues.sort(compareCitiesName);
    return listWithUniqueValues;
  }

  const addCity = (cityName: string) => {
    const cityAlreadyExists = cities.some((city) => city.name.toLowerCase() === cityName.toLowerCase());
    if (cityAlreadyExists) {
      return false;
    }
    const newList = ([...cities, {
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
      <AddCityForm addCity={addCity} />
      <CityList cities={cities} />
    </div>
  )
}

export default App
