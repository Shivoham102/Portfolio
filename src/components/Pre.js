import React from "react";
import { helix } from 'ldrs'

helix.register()

function Pre(props) {
  return (
    <div id= {props.load ? "preloader" : "preloader-none"}>      
        <l-helix size="80" speed="2.2" color="#d38bfc"></l-helix>          
    </div>
  );
  
}

export default Pre;
