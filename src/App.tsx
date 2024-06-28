import { useState } from 'react'
import './App.css'
import Modal from './Modal';

function App() {

  const [showModal, setShowModal] = useState(false);

  const handleModalClick = () => {
    setShowModal((current) => !current);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }

  return (
    <div>
      <div>
        <button onClick={handleModalClick}>Pop Up</button>
      </div>

      <div>
        {showModal && <Modal id={''} header={'This is header'} content={'This is body'} footer={'This is footer'} onClose={handleModalClose}/>}
      </div>
    </div>
  )
}

export default App
