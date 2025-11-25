
import styles from './App.module.css'
import cop30 from '/cop30.jpg'
import { useState, useEffect } from 'react'
import { Card } from './components/card'
import qr from '/qr.png'

function App() {

  const [dados, setDados] = useState()

  useEffect(() => {
    fetch('/dados.json').then(response => response.json())
      .then(data => {
        setDados(data)
      })
  }, [])


  const irPara = () => {
    window.open('https://www.youtube.com/shorts/6mlbsCAOaEQ', '_blank');
  }


  return (

    <>
      <nav className={styles.menu}>
        <a href="#s1">COP30</a>
        <a href="#s2">o que é</a>
        <a href="#s3">Temas</a>
        <a href="#s4">Onde foi</a>
        <a href="#s5">Motivo</a>
        <a href="#s6">Melhorias</a>
        <a href="#s7">Países</a>
        <a href="#s8">Fogo</a>


      </nav>
      <main>

        <section className={styles.s1} id='s1'>
          <img className={styles.cop30} src={cop30} alt="COP30" />
          <div className={styles.right}>
            <h2 className={styles.tittle}>COP30</h2>
          </div>
        </section>

        <section className={styles.s5} id='s5'>
          <h2 className={styles.tecTitle}>COP30</h2>
          <div className={styles.wrapCards}>
            {dados && dados.map((item) => {
              return (
                <div key={item.id}>
                  <Card cop={item.cop} text={item.texto} imagem={item.imagem} />
                </div>
              )
            })}
          </div>

        </section>


        <section className={styles.s8} id='s8'>
          {/* <img src={fogo} alt="Fogo" /> */}
          <p onClick={irPara} className={styles.fire}>🔥</p>
          <p className={styles.escritaclique} onClick={irPara}>Clique aqui</p>
        </section>

        <section className={styles.s6} id='s6'>
              <h6>Escaneia</h6>
              <img className={styles.ursinho} src={qr} alt="QRCODE" />
        </section>



      </main>


    </>

  )
}
export default App
