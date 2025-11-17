import styles from './card.module.css'

export const Card = (props) => {
    return(



          <div className={styles.all}>
            <img src={props.imagem} alt="" className={styles.imgStyle}/>
            <h3>{props.cop}</h3>
            <p>{props.text}</p>
        </div>
    

    
    )
}