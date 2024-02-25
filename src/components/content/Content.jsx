import './Content.scss';

function Content() {
  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="content-page">
            <h1 className="content-page__name">Contents Strategies</h1>
            <p className="content-page__title">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
          </div>
          <div className="content-list">
            <div className="content-cart">
              <img
                src="../src/assets/images/content1.png"
                alt=""
                className="content-cart__img"
              />
              <div className="content-cart__box">
                <p className="content-cart__page">
                  By Wahid Ari | 03 March 2019
                </p>
                <h2 className="content-cart__name">
                  Increasing Prosperity With Positive Thinking
                </h2>
              </div>
            </div>
            <div className="content-cart">
              <img
                src="../src/assets/images/content2.png"
                alt=""
                className="content-cart__img"
              />
              <div className="content-cart__box">
                <p className="content-cart__page">
                  By Wahid Ari | 03 March 2019
                </p>
                <h2 className="content-cart__name">
                  Motivation Is The First Step To Success
                </h2>
              </div>
            </div>
            <div className="content-cart">
              <img
                src="../src/assets/images/content3.png"
                alt=""
                className="content-cart__img"
              />
              <div className="content-cart__box">
                <p className="content-cart__page">
                  By Wahid Ari | 03 March 2019
                </p>
                <h2 className="content-cart__name">
                  Success Steps For Your Personal Or Business
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
