import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const {level} = useContext(ChallengesContext)

  return(
    <div className ={styles.profileContainer}>
          <img src="https://avatars.githubusercontent.com/u/66156733?s=460&u=df6bfdf2e1f16765c22a6e6317706b155be58553&v=4" alt="Lucas Eduardo"/>
          <div>
              <strong>Lucas Eduardo</strong>
              <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}
              </p>
          </div>
    </div>  
  );
}