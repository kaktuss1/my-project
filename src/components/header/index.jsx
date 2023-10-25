import { Link } from "react-router-dom";
import styles from "../header/style.module.css";

function Header() {
  return (
    <div>
      <div className={styles.container}>
        <Link to="/">Стартовая страница</Link>
        <Link to="/nba">NBA</Link>
        <Link to="/profile">Мой профиль</Link>
        <Link to='/messages'>Обсуждение</Link>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
export default Header;
