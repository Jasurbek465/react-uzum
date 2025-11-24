import { useState } from 'react';
import './modal.css';
export const Modal = ({ isOpen, onClose, setToken }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState();
  // username: "mor_2314", password: "83r5^_"

  const getFormData = async () => {
    try {
      const trueData = { username: 'mor_2314', password: '83r5^_' };
      const userData = { username, password };
      if (
        trueData.username === userData.username &&
        trueData.password === userData.password
      ) {
        setErrorMsg('');
        const res = await fetch('https://fakestoreapi.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        });
        const data = await res.json();
        onClose();
        localStorage.setItem('token', data.token);
        const token = localStorage.getItem('token');
        setToken(token);
      } else {
        setErrorMsg("Username yoki parol noto'g'ri");
      }
    } catch (error) {
      setErrorMsg(error);
    }
  };

  return (
    <div className="modal" onClick={handleBackgroundClick}>
      <div className="modal__content">
        <span className="modal__close" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>

        <div className="modal__header">
          <h2>Uzum Market’ga kirish</h2>
        </div>

        <input
          type="text"
          placeholder="Username"
          className="modal__input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="modal__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMsg && <div className="error-msg">{errorMsg}</div>}
        <button className="modal__btn" onClick={getFormData}>
          Kirish
        </button>

        <p className="modal__text">
          Davom etgan holda men
          <a href="#"> shaxsiy ma'lumotlarni qayta ishlash siyosatiga </a>
          rozilik bildiraman va
          <a href="#"> Uzum ID ommaviy oferta </a>
          bilan rozi bo‘laman.
        </p>

        <a href="#" className="modal__link">
          Uzum ID nima?
        </a>
      </div>
    </div>
  );
};
