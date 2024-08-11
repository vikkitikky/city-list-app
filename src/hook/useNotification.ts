import { useEffect, useState } from 'react';

export interface Notification {
  isSuccess: boolean ;
  message: string;
}

type UseNotification = (
  initialNotification?: Notification | null,
  duration?: number
) => [Notification, (message: Notification) => void];

export const useNotification: UseNotification = (initialNotification = null, duration = 1500) => {
  const [notification, setNotification] = useState(initialNotification);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, duration);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification, duration]);

  const showNotification = (newMessage: Notification): void => {
    setNotification(newMessage);
  };

  return [notification, showNotification];
};
