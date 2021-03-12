import Head from "next/head";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
  const {
    level,
    currentExperience,
    challengesCompleted,
    closeLevelUpModal,
  } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button className={styles.button} onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
        <div className={styles.twitter}>
          <a
            target="_blank"
            href={` https://twitter.com/intent/tweet?url=https%3A%2F%2Fmoveit.tarcisiodelmondes.com.br%2F%3Flevel%3D${level}%26currentExperience%3D${currentExperience}%26challengesCompleted%3D${challengesCompleted}%26text%3D&text=Avancei%20de%20Level%21`}
          >
            Compartilhar no Twitter
            <img src="/icons/twitter.svg" alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}
