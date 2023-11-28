import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Start({ setUsername }) {
  const nameRef = useRef();
  const ageRef = useRef();

  const handleClick = () => {
    const name = nameRef.current.value.trim();
    const age = ageRef.current.value.trim();

    if (!name || !age) {
      toast.error("Будь ласка, введіть ім'я та вік.");
    } else {
      setUsername({ name, age });
    }
  };

  return (
    <div className="full">
      {/* <img src="./12345.jpg" alt="logo" /> */}
      <div className="start">
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
