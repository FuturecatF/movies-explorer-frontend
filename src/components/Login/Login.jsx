import './Login.css';
import React from 'react';
import logo from '../../images/logo.svg';
import { Link, withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login({ onLogin, isLoginError }) {
  const [isValidation, setValidation] = React.useState(false);

  const form = useForm({ mode: 'onChange' });
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = form;
  const { isValid } = form.formState;
  React.useEffect(() => {
    if (isValid) {
      setValidation(true);
    }
  }, [isValid]);

  const onSubmit = (data) => {
    setValidation(false);

    onLogin(data.email, data.password);
    reset();
  };

  return (
    <div className="login">
      <div className="login__container">
        <Link className="login__img-link" to="/">
          <img className="login__logo" alt="логотип" src={logo}></img>
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form
          className="login__form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <label className="login__input-label" htmlFor="login-input-email">
            Email
          </label>
          <input
            className="login__input"
            type="email"
            id="login-input-email"
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
            required
          />
          <p className="login__input-error">
            {errors.email?.type === 'required' && 'Это обязательное поле'}
            {errors.email?.type === 'pattern' &&
              'Почта должна соответствовать почте'}
          </p>
          <label className="login__input-label" htmlFor="login-input-password">
            Пароль
          </label>
          <input
            className="login__input login__input_color-red"
            type="password"
            id="login-input-password"
            {...register('password', { required: true, minLength: 3 })}
          />
          <p className="login__input-error">
            {errors.password?.type === 'required' && 'Это обязательное поле'}
            {errors.password?.type === 'minLength' &&
              'Минимальная длина пароля 3 символа'}
          </p>
          <p className="login__button-error">{isLoginError}</p>
          <button
            className={`login__button ${
              !isValidation ? 'login__button_disabled' : ''
            }`}
            disabled={!isValidation}
          >
            Войти
          </button>
          <p className="login__subtitle">
            Ещё не зарегистрированы?
            <Link className="login__link" to="/signup">
              Регистрация
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);
