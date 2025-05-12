import styles from "./search-bar-a.module.css";

const SearchBarA = () => {
  return (
    <div className={`search-box ${styles.searchBarA}`}>
      <div className="search-icon">

      </div>
      <div className="search-input">
        <input type="text" placeholder="Search Artists, Songs & Album" className="w-[20rem] h-8 px-4" />
      </div>
    </div>
  );
};

export default SearchBarA;
