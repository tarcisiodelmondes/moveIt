import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Countdown.module.css";

export default function Countdown() {
  let countdownTimeout: NodeJS.Timeout;

  const { startNewChallenge } = useContext(ChallengesContext);

  const [hashFinished, setHasFinished] = useState(false);

  const [time, setTime] = useState(0.1 * 60);

  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  function startCountdown() {
    setIsActive(true);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);

      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      {hashFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
          <span></span>
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
              type="button"
            >
              Abondonar ciclo
              <div>
                <img src="icons/close.svg" alt="" />
              </div>
            </button>
          ) : (
            <button
              className={styles.countdownButton}
              onClick={startCountdown}
              type="button"
            >
              Iniciar um ciclo
              <span></span>
            </button>
          )}
        </>
      )}
    </div>
  );
}
