import React from "react";


const styles = {
    wrapper:{
        display: "flex",
        flexDirection:"row", 
        padding: 40,
        border: "1px solid grey",
        borderRadius: 20,
        justifyContent : "space-around",
        alignItem: "center",
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
        <span style={styles.nameText}>패티</span>
        <span style={styles.nameText}>채소</span>
        <span style={styles.nameText}>음료</span>
        <span style={styles.nameText}>빵</span>
       </div>
    );
}


export default CustmerBar;