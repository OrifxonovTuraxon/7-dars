import React from 'react';
import { useForm } from 'react-hook-form';
import './Modal.css';

const LoginForm = ({ onClose, onSuccess }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const validateLogin = (value) => {
    return value.length >= 4 || 'Login kamida 4 belgidan iborat bo\'lishi kerak';
  };

  const validatePassword = (value) => {
    if (value.length < 6) {
      return 'Parol kamida 6 belgidan iborat bo\'lishi kerak';
    }
    if (!/[A-Z]/.test(value)) {
      return 'Parolda kamida bitta bosh harf bo\'lishi kerak';
    }
    if (!/[0-9]/.test(value)) {
      return 'Parolda kamida bitta raqam bo\'lishi kerak';
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return 'Parolda kamida bitta belgi bo\'lishi kerak';
    }
    return true;
  };

  const onSubmit = (data) => {
    onSuccess();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="login">Login:</label>
            <input
              type="text"
              id="login"
              name="login"
              {...register("login", { validate: validateLogin })}
              className={`input ${errors.login ? 'input-error' : ''}`}
            />
            {errors.login && <p className="error-message">{errors.login.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password", { validate: validatePassword })}
              className={`input ${errors.password ? 'input-error' : ''}`}
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>

          <button type="submit" className="submit-button">Kirish</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
