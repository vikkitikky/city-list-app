import { FC } from 'react'
import { City } from '../App.tsx';

interface CityListProps {
  cities: City[]
}

const CityList: FC<CityListProps> = ({ cities }) => {
  const groupedCities = cities.reduce((acc: {letter: string; cities: City[]}[], city): {letter: string; cities: City[]}[] => {
    const firstLetter = city.name[0].toUpperCase();
    let letterGroup = acc.find(group => group.letter === firstLetter);

    if (!letterGroup) {
      letterGroup = { letter: firstLetter, cities: [] };
      acc.push(letterGroup);
    }

    letterGroup.cities.push({ id: city.id, name: city.name });

    return acc;
  }, []);

  return (
    <ul>
      {groupedCities.map(({ letter, cities }) => (
        <li key={letter.charCodeAt(0)}>
          <h2>{letter}</h2>
          <ul>
            {cities.map((city) => (
              <li key={city.id}>{city.name}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default CityList;
