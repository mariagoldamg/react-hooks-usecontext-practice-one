 import { useContext } from "react";
 import { Context } from "./Context";
 
 function ComponentOne(){

    const [context, setContext] = useContext(Context);// React hook (Context) is added from Context.js

    return(
        <div>
<p>Component One</p>
<button onClick={()=>setContext("New State!!!")} > Click to change the line </button>
        </div>
    )
 }

 export default ComponentOne;