
import styles from './button-a.module.css';

const ButtonA = ({ description } : { description: string}) => {
    return(
        <button className={`button-a bg-[var(--important)] text-[var(--foreground)] h-8 grid place-content-center ${styles.buttonA}`}>
            { description }
        </button>
    )
}

export default ButtonA;