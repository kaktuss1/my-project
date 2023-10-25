import { useLocalStorage } from "../../hook/useLocalStorage";
import styles from "../profile/style.module.css";
import { Link } from "react-router-dom";
function Profile() {
  const [user, setUser] = useLocalStorage("name", "");
  const [age, setAge] = useLocalStorage("age", "");
  return (
    <div>
      {user && (
        <div className={styles.wrapper}>
          <div className={styles.userInfo}>
            <div>
              <h2>
                {user}, {age}
              </h2>
            </div>
            <div className={styles.profileImg}>
              <img
                src="../../../public/profilepic.jpg"
                alt="Фото профиля"
              ></img>
            </div>
          </div>
          <div className={styles.posts}>
            <h1>Мои записи</h1>
            <p>У вас пока еще нет записей</p>
          </div>
        </div>
      )}
      {!user && (
        <div className={styles.wrapperInp}>
          <Link to="/">Зарегистрироваться</Link>
        </div>
      )}
    </div>
  );
}
export default Profile;
