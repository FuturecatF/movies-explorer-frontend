import './Profile.css';
import React from 'react';
import { useForm } from 'react-hook-form';
function Profile(props) {
  const { currentUser, onChangeProfile, onLogOut, isUpdateProfileError } =
    props;
  const { name, email } = currentUser;
  const [isValidation, setValidation] = React.useState(false);

  const form = useForm({ mode: 'onChange' });

  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
  } = form;
  const { isValid } = form.formState;
  const defaultValueName = watch('name');
  const defaultValueEmail = watch('email');

  React.useEffect(() => {
    if (
      (defaultValueName !== name && isValid) ||
      (defaultValueEmail !== email && isValid)
    ) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [defaultValueName, defaultValueEmail, name, email, isValid, isValidation]);

  const onSubmit = (data) => {
    setValidation(false);

    onChangeProfile(data);
  };

  function handleLogOut() {
    onLogOut();
  }

  return (
    <div className="profile">
      <form
        className="profile__form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <fieldset className="profile__form-fieldset">
          <h2 className="profile__form-title">Привет, {name}!</h2>
          <div className="profile__form-input-container">
            <label htmlFor="profile-name">Имя</label>
            <input
              type="text"
              id="profile-name"
              className="profile__form-input"
              placeholder="Имя"
              defaultValue={name}
              {...register('name', {
                required: true,
                minLength: 2,
                pattern: /^[A-Za-zА-Яа-яё -]+$/,
              })}
            />
          </div>
          <div className="profile__form-input-container">
            <label htmlFor="profile-email">Email</label>
            <input
              type="email"
              id="profile-email"
              className="profile__form-input"
              placeholder="Почта"
              defaultValue={email}
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
            />
          </div>
        </fieldset>
        <p className="profile__form-errors">
          {errors.name?.type === 'required' && 'Имя обязательное поле'}
          {errors.name?.type === 'minLength' && 'Минимальная длина 2 символа'}
          {errors.name?.type === 'pattern' && 'Неподходящее имя'}
        </p>
        <p className="profile__form-errors">
          {errors.email?.type === 'required' && 'Почта обязательное поле'}
          {errors.email?.type === 'pattern' &&
            'Почта должна соответствовать почте'}
        </p>

        <p className="profile__update-errors">{isUpdateProfileError}</p>

        <button
          disabled={!isValidation}
          type="submit"
          className={`profile__form-button ${
            !isValidation ? 'profile__form-button_disabled' : ''
          }`}
        >
          Редактировать
        </button>
        <button
          type="button"
          className="profile__form-button profile__form-button_red"
          onClick={handleLogOut}
        >
          Выйти из аккаунта
        </button>
      </form>
    </div>
  );
}

export default Profile;
