import React from "react";
import CustmerBar from "./CustmerBar";
import Custmer from "./Custmer";

const styles = {
    wrapper:{
        margin: 10,
        padding: 40,
        border: "1px solid grey",
        borderRadius: 20,
    },
    wrapper2:{
        margin: 10,
        border: "1px solid grey",
        borderRadius: 20,
        display: "flex",
        flexDirection:"row",
        flexWrap: "wrap",

    },
    wrapper3:{
        margin: 10,
        border: "1px solid grey",
        borderRadius: 20,
        display: "flex",
        flexDirection:"row-reverse",
        flexWrap: "wrap",
        justifyContent:"space-between",
    },
    imageBox:{   
        margin: 10,
        padding: 40,
        border: "1px solid grey",
        borderRadius: 20,
        width: "69%",
    },
    menuBox:{
        margin: 10,
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
        <div style={styles.Button}>토글</div>
        <div style={styles.Button}>담기</div>
        </div>

      
        <CustmerBar/>
    
         <div style={styles. wrapper2}>
            
        <Custmer/>

         <div style={styles.imageBox}> 
         {/* {Jsonfle.map((comment) => {
             return (<Comment key={comment.id} name={comment.name}/>);
           })} */}
           </div>
         
         </div>
 
         </div>
     );
}


export default CustmerList;