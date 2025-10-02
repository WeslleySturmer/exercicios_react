import { useState } from 'react'
import styles from './Button.module.css';

function Button({ event, name, hop, valor }) {
    const disabled = (hop == 0 || (name == 'Zerar' && valor == 0))
    
    return (
        <>
            <button disabled={disabled} className={styles.button} onClick={event}>{name}</button>

        </>
    )

}

export default Button