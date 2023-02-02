import React from "react";
import CustmerBar from "./CustmerBar";
import CustmerSide from "./CustmerSide";
import CustmerImage from "./CustmerImage";

const styles = {
    wrapper:{
        margin: 10,
        padding: 0,
        border: "1px solid grey",
        borderRadius: 20,
    },
    wrapper2:{
        margin: 0,
        border: "1px solid grey",
        borderRadius: 20,
        display: "flex",
        flexDirection:"row",
        flexWrap: "wrap",

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
        padding: 40,
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
    return(
        <div style={styles.wrapper}>

        <div style={styles.wrapper3}>
        <button style={styles.Button}>담기</button>
        <button style={styles.Button}>토글</button>
        </div>

        <CustmerBar/>
    
         <div style={styles. wrapper2}>
            
        <CustmerSide/>
        <CustmerImage/>
         
         </div>
 
         </div>
     );
}


export default CustmerList;