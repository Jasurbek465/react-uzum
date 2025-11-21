export const Header = ({ typedText, setTypedText, setSearchText }) => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top__left">
          <div className="header-top__location">
            <div className="location-info">
              <img src="img/icon/manzil.svg" alt="Manzil" />
              <span>Shahar: </span>
              <a href="#!">Toshkent</a>
            </div>
            <a href="#!" className="pickup-link">
              Topshirish punktlari
            </a>
          </div>

          <div className="header-top__delivery">
            <p>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
          </div>

          <div className="header-top__links">
            <div className="faq-box">
              <a href="#!" className="faq-link">
                Savol-javoblar
              </a>
              <a href="#!" className="orders-link">
                Buyurtmalarim
              </a>
            </div>

            <div className="header-top__right">
              <div className="lang-select" id="langSelect">
                <div className="lang-current">
                  <img src="img/icon/flag.svg" alt="Bayroq" />
                  <span className="lang-text">Oʻzbekcha</span>
                </div>

                <div className="lang-options">
                  <div data-lang="ru">Русский</div>
                  <div data-lang="en">English</div>
                  <div data-lang="oz">O'zbek</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="header-bottom__top">
          <div className="header-bottom__left">
            <div className="logo">
              <a href="index.html">
                <img
                  src="img/uzum_market-logo.png"
                  alt="Uzum Market logotipi"
                  width="247"
                  height="32"
                />
              </a>
            </div>

            <div className="search-section">
              <button className="catalog-btn">
                <img src="img/icon/catalog.svg" alt="" />
                Katalog
              </button>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Mahsulotlar va turkumlar izlash"
                  value={typedText}
                  onChange={(e) => setTypedText(e.target.value)}
                />
                <button
                  className="search-btn"
                  onClick={() => setSearchText(typedText)}
                >
                  <img src="./img/icon/search.svg" alt="Izlash" />
                </button>
              </div>
            </div>
          </div>
          {/* img/icon/search.svg */}
          <div className="header-bottom__right">
            <a href="#!" className="login" id="openModal">
              <img src="img/icon/human.svg" alt="" />
              Kirish
            </a>
            <a href="saralangan.html" className="favorites">
              <img src="img/icon/hart.svg" alt="" />
              Saralangan
            </a>
            <a href="savat.html" className="cart">
              <img src="img/icon/shop.svg" alt="" />
              Savat
            </a>
          </div>
        </div>

        <div className="header-bottom__nav">
          <div className="muddatli">
            <img src="img/icon/6-burchak.svg" alt="" />
            <a href="#!">Muddatli to‘lov</a>
          </div>
          <nav className="malumotlar">
            <a href="#!">Elektronika</a>
            <a href="#!">Maishiy texnika</a>
            <a href="#!">Kiyim</a>
            <a href="#!">Poyabzallar</a>
            <a href="#!">Aksessuarlar</a>
            <a href="#!">Go‘zallik va parvarish</a>
            <a href="#!">Salomatlik</a>
            <a href="#!">Uy-ro‘zg‘or buyumlari</a>
            <a href="#!">Qurilish va ta’mirlash</a>
          </nav>
          <div className="yana">
            <a href="#!">Yana</a>
            <img src="img/icon/bottom-arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
