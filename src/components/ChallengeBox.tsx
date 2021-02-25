import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallegenBox() {
  const { activeChalllenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChalllenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChalllenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChalllenge.type}.svg`} />
            <strong>Novo dessafio</strong>
            <p>{activeChalllenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              onClick={resetChallenge}
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceedButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>Inicie um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando os desafios.
          </p>
        </div>
      )}
    </div>
  );
}
