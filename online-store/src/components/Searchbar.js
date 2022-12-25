import './Searchbar.css';

function Searchbar() {
    return (
      <div className="Searchbar">
        <form className="Searchbar__form">
            <input className="Searchbar__input" type="text" placeholder="Search product..."/>
            <button className="Searchbar__btn" type="submit">Search</button>

        </form>
      </div>
    );
  }
  
  export default Searchbar;