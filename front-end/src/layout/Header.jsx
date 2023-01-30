import React from "react";


const styles = {
    wrapper:{
        margin: 0,
        padding: 40,
        border: "1px solid grey",
        borderRadius: 0,
        textalign: "center",
    },
};

function headerText(props)
{
    return (
      <div style={styles.wrapper}>
        <span>INBurger</span>
      </div>  
    );
}

export default headerText;
