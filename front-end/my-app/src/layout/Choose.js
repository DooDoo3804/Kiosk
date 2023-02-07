import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom"
import Modal from "./Modal";
import choose from "./choose.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Choose() {
  // 매장식사, 포장 여부 모달
  const [takeoutModal, setTakeoutModal] = useState(true);

  // 결제 완료 모달
  const [payModal, setPayModal] = useState(false);

  return (
  <div>
      {takeoutModal && (
        <Modal closeModal={() => setTakeoutModal(!takeoutModal)}>
          <div id="rectangle">
            <div className="box green" onClick={() => { 
              setTakeoutModal(!takeoutModal) 
              setPayModal(!payModal)}} > 먹고 가기 </div> 
            <div className="box green" onClick={() => { 
              setTakeoutModal(!takeoutModal)
              setPayModal(!payModal)}} > 가져 가기 </div>
          </div>
        </Modal>
      )}
        {payModal && (
        <Modal closeModal={() => setPayModal(!payModal)}>
          <div id="rectangle">
          <Link to="/"> 
            <button className="bigbox green" onClick={() => setPayModal(!payModal)}>결제가 완료되었습니다</button>
          </Link> 
          </div>
        </Modal>
        )}
  </div>
  );
}

export default Choose;
