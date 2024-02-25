import "./Header.scss";
function Header() {
  return (
    <header>
      <div className="container">
        <div className="nav">
          <a href="#" className="nav-logo">
            <div>
              <img
                src="../src/assets/images/logo (2).svg"
                alt=""
                className="nav-logo__img"
              />
            </div>
            <div>
              <h1 className="nav-logo__name">Product</h1>
            </div>
          </a>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Customers
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Resources
              </a>
            </li>
              <button className="nav-btn">Sign In</button>
              <button className="nav-btn__one">Sign Up</button>
           
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
