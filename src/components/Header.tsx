import '../css/header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container-child">
        <img src="/img/logo.png" alt="logo" />
      </div>
      <div className="search">
        <input type="text" placeholder="Heisinki, Finland" />
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
};

export default Header;
