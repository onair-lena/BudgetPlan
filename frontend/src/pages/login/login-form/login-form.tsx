import { Button, Input, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN, REGISTRATION } from '../../../routes/route-const';

export const LoginForm = () => {
  const { pathname } = useLocation();
  const isNewUser = pathname === REGISTRATION;
  const navigate = useNavigate();

  return (
    <div className={styles.loginWrapper}>
      <form>
        <Typography.Title className={styles.formTitle} level={2}>
          {isNewUser ? 'Create your account' : 'Wellcome back'}
        </Typography.Title>
        <Typography.Title className={styles.formTitle} level={4}>
          {`Please, enter your details to sign-${isNewUser ? 'up' : 'in'}`}
        </Typography.Title>
        <Input
          className={styles.formInput}
          placeholder="Enter your email"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />

        <Input.Password
          className={styles.formInput}
          placeholder="Please, enter password"
        />
        <Button className={styles.formButton} type="primary">
          Submit
        </Button>
      </form>
      <div className={styles.formTextContainer}>
        <Typography.Text>
          {isNewUser ? 'Have an account?' : 'Don`t you have an account?'}
        </Typography.Text>
        <Typography.Text
          className={styles.formText}
          onClick={() => navigate(isNewUser ? LOGIN : REGISTRATION)}
        >
          {isNewUser ? 'Sign In' : 'Sign Up'}
        </Typography.Text>
      </div>
    </div>
  );
};
