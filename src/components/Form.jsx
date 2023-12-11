import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logoMillion from '../assets/12345.png';

export default function Start({ setUsername }) {
  const nameRef = useRef();
  const ageRef = useRef();

  const handleClick = () => {
    const name = nameRef.current.value.trim();
    const age = ageRef.current.value.trim();

    if (!name) {
      toast.error("Будь ласка, введіть ім'я.");
      return;
    }

    if (!age) {
      toast.error('Будь ласка, введіть вік.');
      return;
    }

    if (isNaN(age) || age < 1 || age > 150) {
      toast.error('Будь ласка, введіть коректний вік.');
      return;
    }

    setUsername({ name, age });
  };

  return (
    <div className="full">
      <div className="start">
        <img src={logoMillion} alt="" className="logoStart" />
        <input
          className="startInput"
          placeholder="Введіть ваше ім'я"
          ref={nameRef}
        />
        <input
          className="startInput"
          placeholder="Введіть ваш вік"
          ref={ageRef}
        />
        <button className="startButton" onClick={handleClick}>
          Почати!
        </button>

        <ToastContainer />

        <div className="footer">
          <p>
            Створив Гончарук Антон, студент ВНУ 3-го курсу для курсової роботи
          </p>
        </div>
      </div>
    </div>
  );
}
