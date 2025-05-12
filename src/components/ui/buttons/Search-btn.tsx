
import styles from './search-btn.module.css';

const Search = ({ search } : {search: string}) => {
    return(
        <button className={` ${styles.search}`}>
            {search}
        </button>
    )
}

export default Search;