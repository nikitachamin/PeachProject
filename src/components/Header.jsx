function Header() {
  return (
    <header className="header">
      <div className="header__container">
        
      <div className="logo">
        <a href="home.html">
          <img src={`${process.env.PUBLIC_URL}/img/logo.png`} />
        </a>
      </div>

      <nav className="menu">
        <ul className="menu-links">
          <li>
            <a className="menu-links__link" href="#">
              Облачные решения
            </a>
          </li>
          <li>
            <a className="menu-links__link" href="#">
              Кибербезопасность
            </a>
          </li>
          <li>
            <a className="menu-links__link" href="#">
              Импортозамещение
            </a>
          </li>
          <li>
            <a className="menu-links__link" href="#">
              Цифровая трансформация
            </a>
          </li>
        </ul>
      </nav>
      </div>

    </header>
  );
}

export default Header;
