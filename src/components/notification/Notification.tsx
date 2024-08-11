import { FC } from 'react';
import styles from './notification.module.css';
import { Notification } from '../../hook/useNotification';

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
