import './Footer.scss';

function footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer-right">
          <h2 className="footer-right__name">
            Join 100 Compannies who boost their business with Product
          </h2>
          <button className="footer-right__btn">Get This</button>
        </div>
        <div className="footer-left">
            <img src="../src/assets/images/footer (2).png" alt="" className="footer-left__img" />
        </div>
      </div>
    </div>
  );
}

export default footer