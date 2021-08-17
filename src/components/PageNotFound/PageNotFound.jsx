import './PageNotFound.css';
import { useHistory } from 'react-router-dom';
function PageNotFound() {
  const history = useHistory();
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__subtitle">Страница не найдена</p>
        <button className="not-found__button" onClick={() => history.goBack()}>
          Назад
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
