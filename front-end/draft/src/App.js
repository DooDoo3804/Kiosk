import './App.css';
import Header from './layout/Header'
import React, { useState } from 'react';
// import { useNavigate, Route, Routes } from "react-router-dom"
import Modal from "./components/Modal";
// import ModalItem from "./components/ModalItem";
import EasyImage from "./components/EasyImage";
// import Payment from "./pages/Payment"


function App() {
  // 매장식사, 포장 여부 모달
  const [takeoutModal, setTakeoutModal] = useState(false);

  // 커스텀 모달
  const [customModal, setCustomModal] = useState(false);

  // 결제 완료 모달
  const [payModal, setPayModal] = useState(false);

  return (
  <div>
    <Header/>
    <EasyImage/>
    
          {/* 매장식사, 포장 여부 모달 */}
      <input type="button" value="결제" onClick={() => setTakeoutModal(!takeoutModal)}/>
      {takeoutModal && (
        <Modal closeModal={() => setTakeoutModal(!takeoutModal)}>
          <div id="rectangle">
            <div className="box green" onClick={() => { 
              setTakeoutModal(!takeoutModal) 
              setCustomModal(!customModal)}} > 먹고 가기 </div> 
            <div className="box green" onClick={() => { 
              setTakeoutModal(!takeoutModal)
              setCustomModal(!customModal)}} > 가져 가기 </div>
          </div>
        </Modal>
      )}
      
      {/* <Routes>
        <Route path="/payment" element={<Payment />} />
      </Routes> */}
 
        {/* 커스텀 모달  */}
        {/* <input type="button" value="커스텀" onClick={() => setModalOpen(!modalOpen)}/> */}
        {customModal && (
        <Modal closeModal={() => setCustomModal(!customModal)}>
          {/* <div class="toggle-button-cover"> */}
          {/* 단품/세트 선택 토글 */}
            <div class="button-cover">
              <div class="button r" id="button-1">
                <input type="checkbox" class="checkbox" />
                <div class="knobs"></div>
                <div class="layer"></div>
              </div>
            </div>
            <button onClick={() => {
              setCustomModal(!customModal) 
              setPayModal(!payModal)}}>커스텀 완료</button>
          {/* </div> */}
        </Modal>
        )}

        {/* 결제 완료 모달 */}
        {payModal && (
        <Modal closeModal={() => setPayModal(!payModal)}>
          <div id="rectangle">
            <div className="box green" onClick={() => setPayModal(!payModal)}>현금</div>
            <div className="box green" onClick={() => setPayModal(!payModal)}>카카오페이</div>
          </div>
        </Modal>
        )}
  </div>
  );
}


export default App;
