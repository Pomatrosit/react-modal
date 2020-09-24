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
