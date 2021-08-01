import './Profile.css';
function Profile() {
  return (
    <div className="profile">
      <form className="profile__form">
        <fieldset className="profile__form-fieldset">
          <h2 className="profile__form-title">Привет, Олег!</h2>
          <div className="profile__form-input-container">
            <label>Имя</label>
            <input
              required
              type="text"
              className="profile__form-input"
              placeholder="Имя"
            ></input>
          </div>
          <div className="profile__form-input-container">
            <label>E-mail</label>
            <input
              required
              type="email"
              className="profile__form-input"
              placeholder="Почта"
            ></input>
          </div>
        </fieldset>
        <button className="profile__form-button">Редактировать</button>

        <button className="profile__form-button profile__form-button_red">
          Выйти из аккаунта
        </button>
      </form>
    </div>
  );
}

export default Profile;
