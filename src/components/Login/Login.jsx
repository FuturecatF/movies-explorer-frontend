import './Login.css';
import logo from '../../images/logo.svg';
import { Link, withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login({ onLogin, isLoginError }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onChange' });
  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(data);
    onLogin(email, password);
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
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            required
          />
          <p className="login__input-error">
            {errors.email?.type === 'required' && 'Это обязательное поле'}
            {errors.email?.type === 'pattern' && 'Почта должна соответствовать почте'}
          </p>
          <label className="login__input-label" htmlFor="login-input-password">
            Пароль
          </label>
          <input
            className="login__input login__input_color-red"
            type="password"
            id="login-input-password"
            {...register('password', { required: true })}
          />
          <p className="login__input-error">
            {errors.password?.type === 'required' && 'Это обязательное поле'}

          </p>
          <p className="register__button-error">{isLoginError}</p>
          <button className="login__button">Войти</button>
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
