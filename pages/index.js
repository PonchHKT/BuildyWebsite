import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import data from '../data/data.json'
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default function Home() {
  return (
    <div className={styles.container}>

        <div className={styles.logo}>
          <img src="./images/logo.png"/>
        </div>

        <div className={styles.header}>

          <div className={styles.description}>

            <div className={styles.text}>
              <p>{data.home.slogan}</p>
              <h1>{data.home.title}</h1>
              <h2>{data.home.desc}</h2>

              <div className={styles.buttons}>
                <button className={styles.btnwhite}>{data.home.btn1}</button>
                <button className={styles.btnorange}>{data.home.btn2}</button>
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
              <h1>{data.home.homeCard[0].title}</h1>
              <h2>{data.home.homeCard[0].desc}</h2>
              </div>

            </div>

            <div className={styles.text2}>

            <div className={styles.icons}>
            <i className="fad fa-pencil-ruler"></i>
            </div>

              <div>
                <h1>{data.home.homeCard[1].title}</h1>
                <h2>{data.home.homeCard[1].desc}</h2>
              </div>

            </div>

            <div className={styles.text3}>
            
            <div className={styles.icons}>
            <i className="fad fa-hand-holding-usd"></i>
            </div>

              <div>
                <h1>{data.home.homeCard[2].title}</h1>
                <h2>{data.home.homeCard[2].desc}</h2>
              </div>
            </div>

          </div>

      </div>

      <div className={styles.servicesContainer}>

        <div className={styles.title}>
          <h1>{data.services.slogan}</h1>
          <h2>{data.services.title}</h2>
        </div>

        <div className={styles.services}>

          <div className={styles.container}>

            <div className={styles.icons}>
            <i className="fas fa-construction"></i>
            </div>

            <div className={styles.text}>
              <h1>{data.services.servicesCard[0].title}</h1>
              <h2>{data.services.servicesCard[0].desc}</h2>
            </div>

          </div>

          <div className={styles.container}>

            <div className={styles.icons}>
            <i className="fad fa-hard-hat"></i>
            </div>

            <div className={styles.text}>
            <h1>{data.services.servicesCard[1].title}</h1>
              <h2>{data.services.servicesCard[1].desc}</h2>
            </div>

          </div>

          <div className={styles.container}>

            <div className={styles.icons}>
            <i className="fad fa-tasks-alt"></i>
            </div>

            <div className={styles.text}>
            <h1>{data.services.servicesCard[2].title}</h1>
              <h2>{data.services.servicesCard[2].desc}</h2>
            </div>

          </div>

          <div className={styles.container}>

            <div className={styles.icons}>
            <i className="fad fa-pencil-paintbrush"></i>
            </div>

            <div className={styles.text}>
            <h1>{data.services.servicesCard[3].title}</h1>
              <h2>{data.services.servicesCard[3].desc}</h2>
            </div>

          </div>

          <div className={styles.container}>

            <div className={styles.icons}>
            <i className="fad fa-tractor"></i>
            </div>

            <div className={styles.text}>
            <h1>{data.services.servicesCard[4].title}</h1>
              <h2>{data.services.servicesCard[4].desc}</h2>
            </div>

          </div>

          <div className={styles.container}>

            <div className={styles.icons}>
            <i className="fad fa-tools"></i>
            </div>

            <div className={styles.text}>
            <h1>{data.services.servicesCard[5].title}</h1>
              <h2>{data.services.servicesCard[5].desc}</h2>
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
          <h1>{data.contact.text}</h1>
          </div>
        </div>

        <div className={styles.input}>
          <input placeholder={data.contact.placeholder}></input>
          <button className={styles.button}>{data.contact.btnText}</button>
        </div>

      </div>

      <footer>

        <div className={styles.contact}>

          <div className={styles.contactCard} style={{borderRight: '2px solid gray'}}>
            <div className={styles.icons}>
              <i className="fad fa-map-marker-alt"></i>
            </div>
            <div className={styles.text}>
              {
                data.footer.footerCard[0].texts.map((x) => {
                  return (
                    <h1 key={x.id}>{x.text}</h1>
                  )
                })
              }
              <h1>{data.footer.footerCard[0].text}</h1>
            </div>
          </div>

          <div className={styles.contactCard} style={{borderRight: '2px solid gray'}}>
            <div className={styles.icons}>
              <i className="fad fa-envelope"></i>
            </div>

            <div className={styles.text}>
            {
                data.footer.footerCard[1].texts.map((x) => {
                  return (
                    <h1 key={x.id}>{x.text}</h1>
                  )
                })
              }
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.icons}>
              <i className="fad fa-phone"></i>
            </div>

            <div className={styles.text}>
            {
                data.footer.footerCard[2].texts.map((x) => {
                  return (
                    <h1 key={x.id}>{x.text}</h1>
                  )
                })
              }
            </div>
          </div>

        </div>

        <div className={styles.footerHR}>
        <hr/>
        </div>
        
        <div className={styles.copyright}>
          <h1>{data.footer.footerText}</h1>
        </div>

      </footer>

    </div>
  )
}
