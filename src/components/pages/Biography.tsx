import React from 'react';


// Styles
import styles from './Biography.module.css';


// Components
import BiographyModal from '../modals/BiographyModal';

// Images
import myImage from '../../assets/Javid.jpg';
import linkedinIcon from '../../assets/iconmonstr-linkedin-3.svg';
import githubIcon from '../../assets/iconmonstr-github-3.svg';



type Props  = {
  showBioModal: () => void;
  theme: string;
}


class Biography extends React.Component<Props>{
    state = {
      showBioModal: false
    }

    componentDidMount(): void {
      this.props.showBioModal();
    }


  public showBioModalFunc = () => {
    this.setState({...this.state, showBioModal: true});
  }

  public closeBioModalFunc = () => {
    this.setState({...this.state, showBioModal: false});
  }



  
  render() {
  return (
    <div className={`${styles.main} ${styles[this.props.theme]}`}>
      {this.state.showBioModal ? <BiographyModal closeBioModal={this.closeBioModalFunc} theme={this.props.theme} /> : null}
      <div className={styles.container}>
        <div className={styles.personalImage}>
          <img src={myImage} alt="Personal_Image" />
        </div>
        <div className={styles.detailsBox}>
          <h2>Javid Sadeghi Ashrafi</h2>
          <h3>Senior Front-End Developer</h3>
          <h4 onClick={this.showBioModalFunc}>Contact info</h4>
          <div className={styles.socialMedia}>
            <a href="https://www.linkedin.com/in/javid-sadeghi-ashrafi-04989553/" 
              target='_blank'
              rel='noreferrer'>
              <img src={linkedinIcon} alt="Linkedin" />
            </a>
            <a href="https://github.com/JavidSadeghi"
              target='_blank'
              rel='noreferrer'>
              <img src={githubIcon} alt="Github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
   
  }
}

export default Biography