import { useEffect, useState } from 'react'

export interface Notification {
  isSuccess: boolean;
  message: string;
}

type UseNotification = (
  duration?: number
) => [Notification | null, (message: Notification) => void];

export const useNotification: UseNotification = (duration = 1500) => {
  const [notification, setNotification] = useState<Notification | null>(null);

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
