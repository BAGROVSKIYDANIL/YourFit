import Logo from'./assets/icons/logo-default.svg'
import FaceBook from './assets/icons/facebook.svg'
import Instagram from './assets/icons/instagram.svg'
import Linkedin from './assets/icons/linkedin.svg'
import GitHub from './assets/icons/github.svg'
import Face from './assets/images/face.png'
import Ropes from './assets/images/ropes.jfif'
import Gym from './assets/images/gym.jfif'
import Backstage from  './assets/images/backstage.jfif'
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="header">
          <img className="header__logo-image" src={Logo} alt="" />
          <ul className="header__menu">
            <li><a href="/#">Home</a></li>
            <li><a href="/#">About</a></li>
            <li><a href="/#">Trainers</a></li>
            <li><a href="/#">Review</a></li>
            <li><a href="/#">Plans</a></li>
          </ul>
          <button className="header__join">Join Now</button>
        </nav>
      </header>
      <div className="container">
          <section className="home">
            <div className="home__wrapper">
              <div className="home__container">
                <div className="home__info">
                  <h1 className="home__title">Elevate  your workout</h1>
                  <p className="home__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="home__active-buttons">
                  <button className="home__get-started">Get Started</button>
                  <button className="home__play-video">Play video</button>
                </div>
                <ul className="home__socials-links">
                  <li><a href="/#">
                    <img src={FaceBook} alt="" /></a></li>
                  <li>
                    <a href="https://www.instagram.com/yur_fit_god?igsh=bjFqdWVlN2w1djFy">
                      <img src={Instagram} alt="" />
                    </a></li>
                  <li><a href="/#">
                    <img src={Linkedin} alt="" /></a></li>
                  <li><a href="/#">
                    <img src={GitHub} alt="" /></a></li>
                </ul>
              </div>
              <div className="home__face-image">
                <img src={Face} alt="" className="home__image-item" />
              </div>
            </div>
            {/* <div className="home__statistics">
              <div className="home__statistics-wrapper">
                <div className="home__statistics-item">
                  <div className="home__statistics-title">
                    500+
                  </div>
                  <span className="home__statistics-subtitle">
                    Happy Members
                  </span>
                  <span className="home__statistics-text">
                    Our community is growing fast
                  </span>
                </div>
                <div className="home__statistics-item">
                  <div className="home__statistics-title">
                    5+
                  </div>
                  <span className="home__statistics-subtitle">
                    Year Experience 
                  </span>
                  <span className="home__statistics-text">
                    Experience in various workouts  
                  </span>
                </div>
                <div className="home__statistics-item">
                  <div className="home__statistics-title">
                    13+
                  </div>
                  <span className="home__statistics-subtitle">
                    Certified Trainers
                  </span>
                  <span className="home__statistics-text">
                    Guidance at every step.
                  </span>
                </div>
                <div className="home__statistics-item">
                  <div className="home__statistics-title">
                        90%
                  </div>
                  <span className="home__statistics-subtitle">
                    Customer Satisfaction
                  </span>
                  <span className="home__statistics-text">
                    We ensure your progress satisfaction
                  </span>
                </div>
              </div>
            </div> */}
        </section>
            <div className="home__statistics">
              <div className="home__statistics-wrapper">
                <div className="home__statistics-item">
                  <div className="home__statistics-title">
                    500+
                  </div>
                  <span className="home__statistics-subtitle">
                    Happy Members
                  </span>
                  <span className="home__statistics-text">
                    Our community is growing fast
                  </span>
                </div>
                <div className="home__statistics-item">
                  <div className="home__statistics-title">
                    5+
                  </div>
                  <span className="home__statistics-subtitle">
                    Year Experience 
                  </span>
                  <span className="home__statistics-text">
                    Experience in various workouts  
                  </span>
                </div>
                <div className="home__statistics-item">
                  <div className="home__statistics-title">
                    13+
                  </div>
                  <span className="home__statistics-subtitle">
                    Certified Trainers
                  </span>
                  <span className="home__statistics-text">
                    Guidance at every step.
                  </span>
                </div>
                <div className="home__statistics-item">
                  <div className="home__statistics-title">
                        90%
                  </div>
                  <span className="home__statistics-subtitle">
                    Customer Satisfaction
                  </span>
                  <span className="home__statistics-text">
                    We ensure your progress satisfaction
                  </span>
                </div>
              </div>
            </div>
        <section className="choose">
          <div className="choose__info">
            <h2 className="choose__title">Why Choose Us</h2>
            <p className="choose__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>
          <div className="choose__container-info">
            <div className="choose__feature-list">
              <div className="choose__feature-item">
                <span className="choose_feature-item-title">Trainer Qualifications</span>
                <p className="choose__feature-item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <div className="choose__feature-item">
                <span className="choose_feature-item-title">Facility Amenities</span>
                <p className="choose__feature-item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <div className="choose__feature-item">
                <span className="choose_feature-item-title">Membership Cost</span>
                <p className="choose__feature-item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <div className="choose__feature-item">
                <span className="choose_feature-item-title">Operating Hours</span>
                <p className="choose__feature-item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
            <div className="choose__wrapper-image">
              <div className="choose__ropes">
                <img src={Ropes} alt="ropes" />
              </div>
              <div className="choose__gym">
                <img src={Gym} alt="gym" />
              </div>
              <div className="choose__backstage">
                <img src={Backstage} alt="backstage" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
