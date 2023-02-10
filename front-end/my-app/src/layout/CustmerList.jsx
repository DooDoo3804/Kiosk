import CustmerBar from "./CustmerBar";
import CustmerSide from "./CustmerSide";
import CustmerImage from "./CustmerImage";
import React, {userState, useState, useEffect} from "react";
import toggle from './toggle.css'
import { Link} from "react-router-dom";

const styles = {
    wrapper:{
        margin: 10,
        padding: 0,
        border: "1px solid grey",
        borderRadius: 20,
        display: "flex",
        flexDirection:"column",
        height: 1000,
    },
    wrapper2:{
        margin: 0,
        border: "1px solid grey",
        borderRadius: 20,
        display: "flex",
        flexDirection:"row",
        height: "100%",
    },
    wrapper3:{
        margin: 0,
        border: "1px solid grey",
        borderRadius: 20,
        display: "flex",
        flexDirection:"row-reverse",
        flexWrap: "wrap",
        justifyContent:"space-between",
    },
    menuBox:{
        margin: 0,
        padding: 0,
        border: "1px solid grey",
        borderRadius: 20,
        width: "20%",
    },
    Button: {
        width: 150,
        height: 100,
        textAlign: "center",
        lineHeight : 6,
        border: "1px solid grey",
        borderRadius: 10,
    }

};
function CustmerList(props){

    const [selectbutton, setbutton] = useState('패티');
    const [custmenu, setcustmenu] = useState('')
    const [state, setstate] = useState(0);
    const [selectmenu, setmenu] = useState('없음');
    const [seleccheck, setcheck] = useState(0);
    const [togglech, settoggle] = useState(true);

    useEffect(() => {
        if(props.imagemenu !== ''){
        console.log("누름");
        props.checkfun(state);
        }
    },[state]);

    return(
        <div style={styles.wrapper}>
        <div style={styles.wrapper3}>
        <button onClick={()=> {setstate(state + 1); props.setcustmer(!props.custmercheck);}} style={styles.Button}>담기</button>
        <input type="checkbox" id="toggle" hidden /> 
        <label for="toggle" class="toggleSwitch" onClick={() =>  settoggle(!togglech)}>
        {togglech && <span class="toggleButton">세트</span>}
        {!togglech && <span class="toggleButton">단품</span>}
        </label>
        </div>

        <CustmerBar setbutton={setbutton}/>
         <div style={styles.wrapper2}>
        <CustmerSide selectbutton={selectbutton} selectmenu={selectmenu} setmenu={setmenu} />
        <CustmerImage menuname={props.imagemenu} selectmenu={selectmenu} setmenu={setmenu} togglech={togglech}/>
         </div>
        </div>
     );
}


export default CustmerList;