import { LoginForm } from './login-form/login-form';
import styles from './styles.module.css';

export const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loginContainer}>
        <LoginForm />
      </div>
      <div className={styles.containerImage}>
        <img
          className={styles.loginImage}
          src="/login.jpg"
          alt="login page image"
        />
      </div>
    </div>
  );
};
