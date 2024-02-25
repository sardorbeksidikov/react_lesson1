import "./Table.scss";

function Table() {
  return (
    <div>
      <div className="container">
        <div className="table">
          <div className="table-page">
            <h1 className="table-page__name">Price Table</h1>
            <p className="table-page__title">We offer competitive price</p>
          </div>
          <div className="table-list">
            <div className="table-box">
              <h2 className="table-box__name">Free</h2>
              <p className="table-box__title">Brief price description</p>
              <img
                src="../src/assets/images/table1.png"
                alt=""
                className="table-box__img"
              />
              <p className="table-box__title">Only 2 Operators</p>
              <p className="table-box__title">Notifications</p>
              <p className="table-box__title">Landing Pages</p>
              <button className="table-box__btn">Order Now</button>
            </div>
            <div className="table-box">
              <h2 className="table-box__name">Free</h2>
              <p className="table-box__title">Brief price description</p>
              <img
                src="../src/assets/images/table2.png"
                alt=""
                className="table-box__img"
              />
              <p className="table-box__title">Only 2 Operators</p>
              <p className="table-box__title">Notifications</p>
              <p className="table-box__title">Landing Pages</p>
              <button className="table-box__btn">Order Now</button>
            </div>
            <div className="table-box">
              <h2 className="table-box__name">Free</h2>
              <p className="table-box__title">Brief price description</p>
              <img
                src="../src/assets/images/table1.png"
                alt=""
                className="table-box__img"
              />
              <p className="table-box__title">Only 2 Operators</p>
              <p className="table-box__title">Notifications</p>
              <p className="table-box__title">Landing Pages</p>
              <button className="table-box__btn">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
