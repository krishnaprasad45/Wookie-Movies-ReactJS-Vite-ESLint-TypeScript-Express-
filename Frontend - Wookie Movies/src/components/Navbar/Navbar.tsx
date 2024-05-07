
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./navBar.css";


interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar">
      <div className="brand">
        <h3>Wookie Movies</h3>
      </div>
      <div className="navigation">
        <ul className="menu"></ul>
        <div className="search">
          <div className="search-content">
            <div>
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <input
              type="text"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search here..."
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
