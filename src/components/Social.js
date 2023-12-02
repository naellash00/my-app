import React from 'react';

function Social(){
    return(
        <ul className="list-group">

           <li className="list-group-item"> 
               <input type="checkbox" id=" facebook" />
               <label for=" facebook"> facebook </label>
            </li>

           <li className="list-group-item">
               <input type="checkbox" id=" youtube" />
               <label for=" youtube"> youtube </label>
            </li>

           <li className="list-group-item"> 
               <input type="checkbox" id=" instagram" />
               <label for=" instagram"> instagram </label>
            </li>

        </ul>
    );
}

export default Social;