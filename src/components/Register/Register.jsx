import './Register.css';
import logo from '../../images/logo.svg';
import { Link, withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Register({ onRegister, isRegisterError }) {
  const form = useForm({ mode: 'onChange' });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;
  const { isValid } = form.formState;

  const onSubmit = (data) => {
    onRegister(data);
  };

  return (
    <div className="register">
      <div className="register__container">
        <Link className="register__img-link" to="/">
          <img className="register__logo" alt="логотип" src={logo}></img>
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form
          className="register__form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <label
            className="register__input-label"
            htmlFor="register-input-name"
          >
            Имя
          </label>
          <input
            className="register__input"
            type="text"
            id="register-input-name"
            {...register('name', {
              required: true,
              minLength: 2,
              pattern: /^[A-Za-zА-Яа-яё -]+$/,
            })}
          />
          <p className="register__input-error">
            {errors.name?.type === 'required' && 'Это обязательное поле'}
            {errors.name?.type === 'minLength' && 'Минимальная длина 2 символа'}
            {errors.name?.type === 'pattern' && 'Неподходящее имя'}
          </p>
          <label
            className="register__input-label"
            htmlFor="register-input-email"
          >
            Email
          </label>
          <input
            className="register__input"
            type="email"
            id="register-input-email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          <p className="register__input-error">
            {errors.email?.type === 'required' && 'Это обязательное поле'}
            {errors.email?.type === 'pattern' &&
              'Почта должна соответствовать почте'}
          </p>
          <label
            className="register__input-label"
            htmlFor="register-input-password"
          >
            Пароль
          </label>
          <input
            className="register__input register__input_color-red"
            type="password"
            id="register-input-password"
            {...register('password', { required: true })}
          />
          <p className="register__input-error">
            {errors.password?.type === 'required' && 'Это обязательное поле'}
          </p>
          <p className="register__button-error">{isRegisterError}</p>
          <button
            className={`register__button ${
              !isValid ? 'register__button_disabled' : ''
            }`}
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
          <p className="register__subtitle">
            Уже зарегистрированы?
            <Link className="register__link" to="/signin">
              Войти
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Register);
