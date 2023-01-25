import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
                <Book name="사용 만난 파이썬" numOfPage={300}/>
                <Book name="처음 만난 AWS" numOfPage={400}/>
                <Book name="처음 만난 fldorxm" numOfPage={400}/>

        </div>
    );
}

export default Library;

