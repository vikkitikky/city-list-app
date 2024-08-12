import { FC, FormEvent, useState } from 'react'
import { useNotification } from '../../hook/useNotification'
import NotificationAlert from '../notification/Notification'
import styles from './addCityForm.module.css'

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
      showNotification({
        message: `Город ${newCityName} был добавлен`,
        isSuccess: true,
      });
      setNewCity('');
    } else {
      showNotification({
        message: `Город ${newCityName} уже есть в списке`,
        isSuccess: false,
      });
    }
  };

  return (
    <>
      <NotificationAlert notification={notification}/>
      <form onSubmit={onSubmit} className={styles.addCityForm}>
        <input
          type="text"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
          placeholder="Введите новое название"
        />
        <button type="submit">Добавить город</button>
      </form>
    </>
  );
};

export default AddCityForm;
