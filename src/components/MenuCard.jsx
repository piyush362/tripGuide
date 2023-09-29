const MenuCard = ({ menuData }) => {
  return (
    <div className="menuCard">
      <div className="menuCardHeader">
        <div>
          <p>Hotel</p>
        </div>
        <div>
          <p>Flight</p>
        </div>
        <div>
          <p>Car Rental</p>
        </div>
      </div>
      <div className="divider2"></div>
      <div className="menu-cardItem">
        <div className="menu-input-title">
          <h5>Leaving From</h5>
          <p>Where are you from ?</p>
        </div>
        <div className="menu-input-title">
          <h5>Going to</h5>
          <p>Going to</p>
        </div>
        <div className="menu-input-title">
          <h5>Check In</h5>
          <p>Add date</p>
        </div>
        <div className="menu-input-title">
          <h5>Check Out</h5>
          <p>Add date</p>
        </div>
        <div className="cardButton">
          <p>Search</p>
        </div>
      </div>
    </div>
  );
};
export default MenuCard;
