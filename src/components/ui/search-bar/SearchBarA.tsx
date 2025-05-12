import styles from "./search-bar-a.module.css";

const SearchBarA = () => {
  return (
    <div className={`search-box w-full h-14 md:h-auto md:w-[20rem] px-6 md:px-16 mt-[-1rem] flex absolute top-20 left-[50%] md:left-auto translate-x-[-50%] md:translate-x-0 md:static ${styles.searchBarA}`}>

      <div className="search-input w-full h-full flex items-center self-center">
        <input type="text" placeholder="Search Artists, Songs & Album" className="w-full h-8 px-4" />
      </div>
    </div>
  );
};

export default SearchBarA;
