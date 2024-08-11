import { FC, FormEvent, useState } from 'react';

interface AddCityFormProps {
  addCity: (cityName: string) => boolean;
}

const AddCityForm: FC<AddCityFormProps> = ({ addCity }) => {
  const [newCity, setNewCity] = useState('');

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const newCityName = newCity.trim();
    if (newCityName) {
      addCity(newCityName);
      setNewCity('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={newCity}
        onChange={(e) => setNewCity(e.target.value)}
        placeholder="Введите новое название города"
      />
      <button type="submit">Добавить город</button>
    </form>
  );
};

export default AddCityForm;
