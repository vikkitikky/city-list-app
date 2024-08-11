import { FC, FormEvent, useState } from 'react';
import { useNotification } from '../hook/useNotification.ts';

interface AddCityFormProps {
  addCity: (cityName: string) => boolean;
}

const AddCityForm: FC<AddCityFormProps> = ({ addCity }) => {
  const [newCity, setNewCity] = useState('');
  const [notification, showNotification] = useNotification();

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const newCityName = newCity.trim();
    if (!newCityName) {
      return;
    }
    const cityWasAdded = addCity(newCityName);
    if (cityWasAdded) {
      showNotification(`Город ${newCityName} был добавлен`);
      setNewCity('');
    } else {
      showNotification(`Город ${newCityName} уже есть в списке`);
    }
  };

  return (
    <>
      {notification && <div>{notification}</div>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
          placeholder="Введите новое название города"
        />
        <button type="submit">Добавить город</button>
      </form>
    </>
  );
};

export default AddCityForm;
