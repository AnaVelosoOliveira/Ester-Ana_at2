
import styles from './App.module.css'
import cop30 from '/cop30.jpg'
import { useState, useEffect } from 'react'
import { Card } from './components/card';

function App() {

  const [dados, setDados] = useState();

    useEffect(() => {
      fetch('/dados.json').then(response => response.json())
      .then(data => {
        setDados(data)
      })
  }, [])


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


      </nav>
      <main>

        <section className={styles.s1} id='s1'>
          <img className={styles.cop30} src={cop30} alt="COP30" />
          <div className={styles.right}>
            <h2 className={styles.tittle}>COP30</h2>
          </div>
        </section>


        <section className={styles.s2} id='s2'>
          <h2 className={styles.tecTitle}>COP30</h2>
          <div className={styles.wrapCards}>
            {dados && dados.map((item) => {
              return (
                <div key={item.id}>
                  <Card cop={item.cop} imagem={item.imagem} text={item.texto} />
                </div>
              )
            })}
          </div>

        </section>
      </main>


    </>

  )
}
export default App
