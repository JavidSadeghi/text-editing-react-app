import React from 'react';


// Styles
import styles from './BiographyModal.module.css';

// Images
import closeIcon from '../../assets/Cross-Icon.svg';
import phoneIcon from '../../assets/iconmonstr-phone-2.svg';
import emailIcon from '../../assets/iconmonstr-mail-thin.svg';


type NewProps = {
  closeBioModal: () => void;
  theme: string;
}



const BiographyModal: React.FC<NewProps> = (props) => {

  const closeHandler = () => {
    props.closeBioModal();
  }

  return (
    <div className={`${styles.modal} ${styles[props.theme]}`}>
      <div className={styles.container}>
        <div className={styles.closeBtn} onClick={() => closeHandler()}>
          <img src={closeIcon} alt='Close' />
        </div>
        <h3>Contact Info</h3>
        <div className={styles.horLine}></div>
        <div className={styles.phoneBox}>
          <img src={phoneIcon} alt="Phone" />
          <h5>+989146660097</h5>
        </div>
        <div className={styles.emailBox}>
          <img src={emailIcon} alt="Email" />
          <h5>javid.sadeghi@gmail.com</h5>
        </div>
      </div>
    </div>
  )
}

export default BiographyModal

