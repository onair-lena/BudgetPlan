import { Button, Input, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

export const LoginForm = () => {
  return (
    <div className={styles.loginWrapper}>
      <form>
        <Typography.Title className={styles.formTitle} level={2}>
          Wellcome back
        </Typography.Title>
        <Typography.Title className={styles.formTitle} level={4}>
          Please, enter your details to sign-in
        </Typography.Title>
        <Input
          className={styles.formInput}
          placeholder="Enter your email"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />

        <Input.Password
          className={styles.formInput}
          placeholder="input password"
        />
        <Button className={styles.formButton} type="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};
