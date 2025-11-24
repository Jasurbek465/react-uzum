import { useState } from 'react';
import { Modal } from '../components/modal/Modal';

const categories = [
  { text: 'Elektronika', id: 1, link: '#!' },
  { text: 'Maishiy texnika', id: 2, link: '#!' },
  { text: 'Kiyim', id: 3, link: '#!' },
  { text: 'Poyabzallar', id: 4, link: '#!' },
  { text: 'Aksessuarlar', id: 5, link: '#!' },
  { text: 'Go‘zallik va parvarish', id: 6, link: '#!' },
  { text: 'Salomatlik', id: 7, link: '#!' },
  { text: 'Uy-ro‘zg‘or buyumlari', id: 8, link: '#!' },
  { text: 'Qurilish va ta’mirlash', id: 9, link: '#!' },
];
export const Header = ({ typedText, setTypedText, setSearchText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText(typedText);
  };

  return (
    <>
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
                <form className="search-box" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Mahsulotlar va turkumlar izlash"
                    value={typedText}
                    onChange={(e) => setTypedText(e.target.value)}
                  />
                  <button className="search-btn" type="submit">
                    <img src="./img/icon/search.svg" alt="Izlash" />
                  </button>
                </form>
              </div>
            </div>
            {/* img/icon/search.svg */}
            <div className="header-bottom__right">
              {token ? (
                <img src="img/icon/human.svg" alt="" />
              ) : (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="login sarlavha"
                >
                  <img src="img/icon/human.svg" alt="" />
                  Kirish
                </button>
              )}

              <a href="saralangan.html" className="favorites sarlavha">
                <img src="img/icon/hart.svg" alt="" />
                Saralangan
              </a>
              <a href="savat.html" className="cart sarlavha">
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
              {categories?.map((item) => (
                <a key={item.id} href={item.link}>
                  {item.text}
                </a>
              ))}
            </nav>
            <div className="yana">
              <a href="#!">Yana</a>
              <img src="img/icon/bottom-arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </header>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setToken={setToken}
      />
    </>
  );
};
