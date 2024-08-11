import { useEffect, useState } from 'react';

export const useNotification = (initialNotification: string = '', duration: number = 1500): [string, (newMessage: string) => void] => {
  const [notification, setNotification] = useState(initialNotification);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification('');
      }, duration);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification, duration]);

  const showNotification = (newMessage: string): void => {
    setNotification(newMessage);
  };

  return [notification, showNotification];
};
