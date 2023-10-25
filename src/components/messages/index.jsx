import { useLocalStorage } from "../../hook/useLocalStorage";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from './style.module.css'
function Messages() {
    const [user, setUser] = useLocalStorage("name", "");
    const [messageData, setMessageData] = useLocalStorage("comments", []);
    const [inputValue, setInputValue] = useState();
    const sendMessage = () => {
      setMessageData([...messageData, inputValue]);
      setInputValue("");
    };  
  return (
    <div>
      {user && (
        <div>
          <div className={style.container}>
            <div className={style.comments}>
              <div className={style.title}>
                <h2>Комментарии</h2>
              </div>
              {messageData && (
                <div>
                  {messageData?.map((el, i) => {
                    return (
                      <div key={user}>
                        {user}: {el}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className={style.sendWrapper}>
              <div>
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className={style.input}
                  placeholder="Введите комментарий"
                />
                <button onClick={sendMessage} className={style.sendBtn}>
                  Отправить
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {!user && (
        <div className={style.wrapperInp}>
          <Link to="/">Зарегистрироваться</Link>
        </div>
      )}
    </div>
  );
}
export default Messages;
