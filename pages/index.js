import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>

        <div className={styles.logo}>
          <img src="./images/logo.png"/>
        </div>

        <div className={styles.header}>

          <div className={styles.description}>

            <div className={styles.text}>
              <p>Great Experience In Construction</p>
              <h1>The Best Construction Company</h1>
              <h2>At Construction we strive to excel in every service we provide, adding value for our customers wherever possible, and thereby attaining national leadership in the construction industry.</h2>

              <div className={styles.buttons}>
                <button className={styles.btnwhite}>GET STARTED</button>
                <button className={styles.btnorange}>READ MORE</button>
              </div>

            </div>

            <div className={styles.images}>
              <img src="./images/headerImg.jpeg"/>
            </div>

          </div>

          <div className={styles.services}>

            <div className={styles.text1}>

              <div className={styles.icons}>
              <i className="fad fa-users"></i>
              </div>

              <div>
              <h1>Construction Consulting</h1>
              <h2>With decades of experience in construction, we provide personalized expertise. construction, we provide personalized expertise.</h2>
              </div>

            </div>

            <div className={styles.text2}>

            <div className={styles.icons}>
            <i className="fad fa-pencil-ruler"></i>
            </div>

              <div>
                <h1>Pre-Planning</h1>
                <h2>The planning period of construction is known as pre construction, and sounds construction is known as pre construction, and sounds planning.</h2>
              </div>

            </div>

            <div className={styles.text3}>
            
            <div className={styles.icons}>
            <i className="fad fa-hand-holding-usd"></i>
            </div>

              <div>
                <h1>Design And Build</h1>
                <h2>In Design-Build, one team designs and constructs your facility. In this guide, we cover the Design-Build. and constructs your facility. In this guide, we cover the Design-Build.</h2>
              </div>
            </div>

          </div>

      </div>

      <div className={styles.servicesContainer}>

        <div className={styles.title}>
          <h1> // What We Do //</h1>
          <h2>Our Services</h2>
        </div>

        <div className={styles.services}>

          <div className={styles.container}>

            <div className={styles.icons}>
            <i className="fas fa-construction"></i>
            </div>

            <div className={styles.text}>
              <h1>Construction Consulting</h1>
              <h2>Our various areas of expert are available on a consulting.</h2>
            </div>

          </div>

          <div className={styles.container}>

            <div className={styles.icons}>
            <i className="fad fa-hard-hat"></i>
            </div>

            <div className={styles.text}>
              <h1>General Contracting</h1>
              <h2>When overseeing the bidding process and executing the project it is our role.</h2>
            </div>

          </div>

          <div className={styles.container}>

            <div className={styles.icons}>
            <i className="fad fa-tasks-alt"></i>
            </div>

            <div className={styles.text}>
              <h1>Program Management</h1>
              <h2>From project accounting to overseeing the team, from</h2>
            </div>

          </div>

          <div className={styles.container}>

            <div className={styles.icons}>
            <i className="fad fa-pencil-paintbrush"></i>
            </div>

            <div className={styles.text}>
              <h1>Design And Build</h1>
              <h2>Design and build are all about working efficiencies created within the design phase.</h2>
            </div>

          </div>

          <div className={styles.container}>

            <div className={styles.icons}>
            <i className="fad fa-tractor"></i>
            </div>

            <div className={styles.text}>
              <h1>Pre-Planning</h1>
              <h2>We seek to get involved early in the design phase so that we can manage the project.</h2>
            </div>

          </div>

          <div className={styles.container}>

            <div className={styles.icons}>
            <i className="fad fa-tools"></i>
            </div>

            <div className={styles.text}>
              <h1>Post-Construction</h1>
              <h2>A project isn't complet just after the construction phase is done We offer additional.</h2>
            </div>

          </div>

        </div>

      </div>

      <div className={styles.emailsection}>

        <div className={styles.text}>

          <div className={styles.icons}>
          <i className="fad fa-envelope-open-text"></i>
          </div>

          <div>
          <h1>Subscribe Our Email For NewsLetter</h1>
          </div>
        </div>

        <div className={styles.input}>
          <input placeholder="Enter your email"></input>
          <button className={styles.button}>SUBSCRIBE</button>
        </div>

      </div>

      <footer>

        <div className={styles.contact}>

          <div className={styles.contactCard} style={{borderRight: '2px solid gray'}}>
            <div className={styles.icons}>
              <i className="fad fa-map-marker-alt"></i>
            </div>
            <div className={styles.text}>
              <h1>2416 Mapleview Drive Tampa, FL 33634</h1>
            </div>
          </div>

          <div className={styles.contactCard} style={{borderRight: '2px solid gray'}}>
            <div className={styles.icons}>
              <i className="fad fa-envelope"></i>
            </div>

            <div className={styles.text}>
              <h1>Email : contact@website.com</h1>
              <h2>Inquieries : info@mail.com</h2>
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.icons}>
              <i className="fad fa-phone"></i>
            </div>

            <div className={styles.text}>
              <h1>Telephone : 0029129102920</h1>
              <h2>Mobile : 0029129102920</h2>
            </div>
          </div>

        </div>

        <div className={styles.footerHR}>
        <hr/>
        </div>
        
        <div className={styles.copyright}>
          <h1>© Buildy Project - 2022</h1>
        </div>

      </footer>



    </div>
  )
}
