import { useState } from "react";
import { useLocalStorage } from "../../hook/useLocalStorage";
import styles from "../home/style.module.css";
function Home() {
  const [inputNameValue, setInputNameValue] = useState();
  const [inputAgeValue, setInputAgeValue] = useState();
  const [name, setName] = useLocalStorage("name", "");
  const [age, setAge] = useLocalStorage("age", "");
  const reg = () => {
    setName(inputNameValue);
    setAge(inputAgeValue);
  };
  const unreg = () => {
    setName("");
    setAge("");
  };
  return (
    <div className={styles.container}>
      {name && (
        <div className={styles.wrapper}>
          <h2>Приветствуем тебя, {name}!</h2>
          <button onClick={unreg} className={styles.btnExit}>
            Выйти
          </button>
        </div>
      )}
      {!name && (
        <div className={styles.wrapperInp}>
          <label>Введите ваше имя</label>
          <input
            value={inputNameValue}
            onChange={(e) => setInputNameValue(e.target.value)}
            className={styles.input}
            maxLength="15"
          />
          <label>Введите ваш возраст</label>
          <input
            value={inputAgeValue}
            onChange={(e) => setInputAgeValue(e.target.value)}
            className={styles.input}
            maxLength="2"
          />
          <button onClick={reg} className={styles.btnLogin}>
            Сохранить
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
