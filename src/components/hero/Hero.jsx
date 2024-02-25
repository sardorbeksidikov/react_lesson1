import "./Hero.scss";

function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-right">
          <h1 className="hero-right__name">Work at the speed of thought</h1>
          <p className="hero-right__title">
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <botton className="hero-right__btn">Get started</botton>
          <botton className="hero-right__link">Watch the Video</botton>
        </div>
        <div className="hero-left">
          <img
            src="../src/assets/images/amico.png"
            alt=""
            className="hero-left__img"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
