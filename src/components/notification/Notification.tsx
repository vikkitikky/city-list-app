import { FC } from 'react'
import { Notification } from '../../hook/useNotification'
import styles from './notification.module.css'

interface NotificationProps {
  notification: Notification | null;
}

const NotificationAlert: FC<NotificationProps> = ({ notification }) => {

  if (notification) {
    const { message, isSuccess } = notification;
    return (
      <span className={`${styles.notification} ${isSuccess ? styles.success : styles.error}`}>
      {message}
    </span>
    );
  }

  return null;
};

export default NotificationAlert;
