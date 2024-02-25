import "./Main.scss";

function Main() {
  return (
    <div>
      <div className="container">
        <div className="main">
          <div className="main-name">
            <h1 className="main-name__text">
              Product was Built Specifically for You
            </h1>
          </div>
          <div className="main-cart">
            <div className="main-box">
              <img
                src="../src/assets/images/main1.svg"
                alt=""
                className="main-box__img"
              />
              <h3 className="main-box__name">First click tests</h3>
              <p className="main-box__title">
                While most people enjoy casino gambling,
              </p>
            </div>
            <div className="main-box">
              <img
                src="../src/assets/images/main2.svg"
                alt=""
                className="main-box__img"
              />
              <h3 className="main-box__name">Design surveys</h3>
              <p className="main-box__title">
                Sports betting, lottery and bingo playing for the fun
              </p>
            </div>
            <div className="main-box">
              <img
                src="../src/assets/images/main3.svg"
                alt=""
                className="main-box__img"
              />
              <h3 className="main-box__name">Preference tests</h3>
              <p className="main-box__title">
                The Myspace page defines the individual.
              </p>
            </div>
            <div className="main-box">
              <img
                src="../src/assets/images/main4.svg"
                alt=""
                className="main-box__img"
              />
              <h3 className="main-box__name">Five second tests</h3>
              <p className="main-box__title">
                Personal choices and the overall personality of the person.
              </p>
            </div>
          </div>
          <div className="main-btn">
            <button className="main-btn__upbtn">SIGN UP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
