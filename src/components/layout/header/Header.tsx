
import ButtonA from '../../ui/buttons/ButtonA';
import SearchBarA from '../../ui/search-bar/SearchBarA';
import styles from './header.module.css';

const Header = () => {
    return(
        <div className={`flex justify-between items-center px-6 md:px-12 h-16 ${styles.header}`}>
            <div className="logo text-[var(--background)]">
                <code className='font-bold'>PSonic</code>
            </div>

            <SearchBarA />
            <ButtonA description = "Download" />
        </div>
    )
}

export default Header