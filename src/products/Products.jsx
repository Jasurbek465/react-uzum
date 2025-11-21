export const Product = ({ objects, searchText }) => {
  const filtirlash = objects.filter((item) =>
    item.title.toLowerCase().includes(searchText)
  );
  return (
    <div className="product-section">
      <header className="product-name">
        <div className="info">
          <h1 className="title-h1">Arzon narxlar</h1>
          <img className="info-arrow" src="img/icon/right-arrow.svg" alt="" />
        </div>
      </header>

      <div id="product-card" className="grid grid-cols-4 gap-10 mt-5">
        {filtirlash.map((item) => (
          <div className="product" key={item.id}>
            <div className="product-header">
              <div className="product-image">
                <img src={item.image} alt={item.title} />
              </div>
              <button className="btn">
                <img
                  className="product-fav"
                  src="img/icon/SVG.svg"
                  alt="heart"
                />
              </button>
              <span className="product-badge">Eksklyuziv</span>
            </div>

            <div className="product-body">
              <div className="product-info">
                <p className="product-title">{item.title}</p>

                <div className="product-rating">
                  <img src="img/icon/Vector.svg" alt="star" />
                </div>

                <b className="product-monthly">
                  {(item.price * 1000).toLocaleString()} so'm/oyiga
                </b>
              </div>

              <div className="product-footer">
                <div className="product-price">
                  
                  <b className="new-price">{item.price}$</b>
                </div>

                <img
                  className="add-to-cart"
                  src="img/icon/SVG (1).svg"
                  alt="shop"
                />
              </div>
            </div>
          </div>
        ))}

        {filtirlash?.length === 0 && (
          <p className="text-xl">Hech narsa topilmadi</p>
        )}
      </div>
    </div>
  );
};
