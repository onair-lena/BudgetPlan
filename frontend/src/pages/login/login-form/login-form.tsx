import { Button, Input, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import { useState } from 'react';

export const LoginForm = () => {
  const [isNew, setIsNew] = useState(true);

  return (
    <div className={styles.loginWrapper}>
      <form>
        <Typography.Title className={styles.formTitle} level={2}>
          {isNew ? 'Create your account' : 'Wellcome back'}
        </Typography.Title>
        <Typography.Title className={styles.formTitle} level={4}>
          {`Please, enter your details to sign-${isNew ? 'up' : 'in'}`}
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
      <div className={styles.formTextContainer}>
        <Typography.Text>
          {isNew ? 'Have an account?' : 'Don`t you have an account?'}
        </Typography.Text>
        <Typography.Text
          className={styles.formText}
          onClick={() => setIsNew(!isNew)}
        >
          {isNew ? 'Sign In' : 'Sign Up'}
        </Typography.Text>
      </div>
    </div>
  );
};
