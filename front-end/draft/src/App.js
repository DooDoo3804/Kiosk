import './App.css';
import Header from './layout/Header'
import React, { useState } from 'react';
import Modal from "./components/Modal";
import EasyImage from "./components/EasyImage";


function App() {
  // 매장식사, 포장 여부 모달
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // 커스텀 모달
  const [modalOpen, setModalOpen] = useState(false);

  return (
  <div>
    <Header/>
    <EasyImage/>
    <div>
          {/* 매장식사, 포장 여부 모달 */}
      <input type="button" value="결제" onClick={() => setModalIsOpen(!modalIsOpen)}/>
      {modalIsOpen && (
        <Modal closeModal={() => setModalIsOpen(!modalIsOpen)}>
          <div id="rectangle">
            <div className="box green"> 먹고 가기 </div> 
            <div className="box green"> 가져 가기 </div>
          </div>
        </Modal>
      )}

        {/* 커스텀 모달 */}
        <input type="button" value="커스텀" onClick={() => setModalOpen(!modalOpen)}/>
        {modalOpen && (
        <Modal closeModal={() => setModalOpen(!modalOpen)}>
          {/* <div class="toggle-button-cover"> */}
          {/* 단품/세트 선택 토글 */}
            <div class="button-cover">
              <div class="button r" id="button-1">
                <input type="checkbox" class="checkbox" />
                <div class="knobs"></div>
                <div class="layer"></div>
              </div>
            </div>
          {/* </div> */}
          <button>담기</button>
        </Modal>
        )}    
    </div>
  </div>
  );
}

export default App;
