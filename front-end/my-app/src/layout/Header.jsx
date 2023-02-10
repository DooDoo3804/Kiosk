import React from "react";


const styles = {
    wrapper:{
        marginBottom: 15,
        padding: 0,
        textAlign: "center",
    },
    text:{
      fontWeight: "bolder",
      fontSize: 60,
      color: "#003049"
    }
};

function headerText(props)
{
    return (
      <div style={styles.wrapper}>
        <span style={styles.text}>INBurger</span>
      </div>  
    );
}

export default headerText;
