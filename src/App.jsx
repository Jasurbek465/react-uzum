import { useEffect, useState } from 'react';
import { Product } from './products/Products';
import { Header } from './layouts/Header';
import './App.css';

function App() {
  const API_URL = 'https://fakestoreapi.com/products';

  // Mahsulotlar
  const [objects, setObjects] = useState([]);
  // Inputga yozilayotgan text
  const [typedText, setTypedText] = useState('');
  // Button bosilganda Productga yuboriladigan text
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const getAllObjects = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setObjects(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllObjects();
  }, []);

  return (
    <>
      <Header
        typedText={typedText}
        setTypedText={setTypedText}
        setSearchText={setSearchText}
      />
      <Product objects={objects} searchText={searchText} />
    </>
  );
}

export default App;
