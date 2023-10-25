import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
function News() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const url = "https://free-nba.p.rapidapi.com/players";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "86ec26aa0bmsh3a390d47359fcafp1441d6jsn2ff78ff87b76",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setTeamData(response.data));
  }, []);

  console.log(teamData);
  return (
    <div className={styles.container}>
      <div className={styles.teamContainer}>
        {teamData.map((el, i) => {
          return (
            <div className={styles.teamContainer}>
              <div key={el.id}>
                {i + 1}. {el.first_name} {el.last_name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default News;
