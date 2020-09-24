React-компонент модального окна.

Обязательные параметры: isModalOpen, setModalOpen

Параметры:
1.overlaySpeed - скорость прогирывания анимации оверлея в милисекундах
2.modalSpeed - скорость прогирывания анимации самого модального окна в милисекундах
3.maxWidth - максимальная ширина в абсолютных величинах
4.padding - внутренние отступы
5.timingFunction - функция анимации (формула Безье или зарезервированные слова в css)
6.animate - тип анимации (fromDown, fromTop)

Пример.

import React, {useState} from 'react';
import RModal from "./rModal/rModal";

const App = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
        <button onClick={() => setModalOpen(true)}>Open Modal</button>

        {isModalOpen
        ? <RModal
          isModalOpen={isModalOpen}
          setModalOpen = {setModalOpen}
          overlaySpeed = {300}
          modalSpeed = {200}
          timingFunction = "ease-in"
          animate = "fromDown"
          maxWidth="500px"
          padding="35px 20px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae architecto, corporis voluptas iste sunt ad ea ducimus suscipit amet vero? Delectus optio maxime veniam quisquam ipsa minus, quae tempore quis?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae architecto, corporis voluptas iste sunt ad ea ducimus suscipit amet vero? Delectus optio maxime veniam quisquam ipsa minus, quae tempore quis?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae architecto, corporis voluptas iste sunt ad ea ducimus suscipit amet vero? Delectus optio maxime veniam quisquam ipsa minus, quae tempore quis?
        </RModal>
        : null
        }

    </div>
  );
}

export default App;
