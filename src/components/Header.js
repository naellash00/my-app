import React from 'react';

function Header(){
    const client = "Designer";
    const title = {
        designer : "Design ",
        programmer: "programming "
    }
    const info = {
        name : "naella",
        nick : "alshibani"
    } 
    return(
     <div className="navbar bg-dark rounded text-white">
        Hello {info.name + " " + info.nick}
        <h2>
            {client == "Designer" ? title.designer : title.programmer}
             is my life.
        </h2> 
     </div>  
    );
}

export default Header;