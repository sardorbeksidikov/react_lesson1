import "./clients.scss";

function clients() {
  return (
    <div>
      <div className="container">
        <div className="client">
          <div className="client-page">
            <h1 className="client-page__name">What Clients Say</h1>
            <p className="client-page__title">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="client-list">
            <div className="client-cart">
              <img
                src="../src/assets/images/client1.svg"
                alt=""
                className="client-cart__yulduz"
              />
              <p className="client-cart__title">
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </p>
              <img src="../src/assets/images/person2.svg" alt="" className="client-cart__person" />
            </div>
            <div className="client-cart">
              <img
                src="../src/assets/images/client1.svg"
                alt=""
                className="client-cart__yulduz"
              />
              <p className="client-cart__title">
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </p>
              <img src="../src/assets/images/person1.svg" alt="" className="client-cart__person" />
            </div>
            <div className="client-cart">
              <img
                src="../src/assets/images/client1.svg"
                alt=""
                className="client-cart__yulduz"
              />
              <p className="client-cart__title">
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </p>
              <img src="../src/assets/images/person3.svg" alt="" className="client-cart__person" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default clients;
