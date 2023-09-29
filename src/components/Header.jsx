import "./style.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerlogo">
        <img className="logo" src="/images/airline-logo.jpg" alt="LOGO" />
        <p className="logoText">TripGuide</p>
      </div>
      <div className="header-contenet">
        <p>USD</p>
        <img className="flag-logo" src="/images/usa.jpeg" alt="flg" />
        <img className="bell-logo" src="/images/bell-icon.png" alt="bell" />
        <div className="divider"></div>
        <div className="user">
          <img className="left-logo-user" src="/images/prof.jpg" alt="dp" />
          <p>Delowar</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
