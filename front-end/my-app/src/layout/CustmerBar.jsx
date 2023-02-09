import React, {userState, useState, useEffect} from "react";


const styles = {
    wrapper:{
        display: "flex",
        flexDirection:"row", 
        padding: 20,
        border: "1px solid grey",
        borderRadius: 20,
        justifyContent : "space-around",
        alignItem: "center",
        margin : 10,
    },
    nameText: {
        border: "1px solid grey",
        borderRadius: 20,
        width: "20%",
        height: 100,
        textAlign: "center",
        lineHeight : 6,
    }
};


function CustmerBar(props){

    return(
        <div style={styles.wrapper}>
        <button onClick={() => props.setbutton("패티")}style={styles.nameText}>패티</button>
        <button onClick={() => props.setbutton("채소")} style={styles.nameText}>채소</button>
        <button onClick={() => props.setbutton("기타")} style={styles.nameText}>기타</button>
        <button onClick={() => props.setbutton("빵")} style={styles.nameText}>빵</button>
       </div>
    );
}


export default CustmerBar;