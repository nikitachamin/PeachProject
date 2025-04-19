import "../styles/Mission.scss";

function Mission() {
  return (
    <div className="mission-wrapper ">
      <div
        className="mission__container"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/mission/bg.svg)` }}
      >
        <div
          className="mission__pattern mission__pattern--left"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/mission/LeftPattern.svg)` }}
        ></div>
        <div
          className="mission__pattern mission__pattern--left-2"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/mission/LeftPattern2.svg)` }}
        ></div>
        <div
          className="mission__pattern mission__pattern--right"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/mission/LeftPattern.svg)` }}
        ></div>
        <div
          className="mission__pattern mission__pattern--right-2"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/mission/LeftPattern2.svg)` }}
        ></div>
        <div className="mission__content">
         <div className="mission__about">
          <h2 className="mission__title">Миссия Softline</h2>
          <p className="mission__text">
            {" "}
            Мы помогаем организациям трансформироваться, работать эффективно и
            безопасно в условиях цифровой экономики.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
