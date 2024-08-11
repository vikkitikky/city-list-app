import { FC } from 'react'
import { City } from '../../App.tsx';
import styles from './cityList.module.css'

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
    <ul className={styles.cityList}>
      {groupedCities.map(({ letter, cities }) => (
        <li key={letter.charCodeAt(0)}>
          <h2 className={styles.cityLetter}>{letter}</h2>
          <ul className={styles.cityList}>
            {cities.map((city) => (
              <li className={styles.cityItem} key={city.id}>{city.name}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default CityList;
