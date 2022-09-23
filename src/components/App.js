import React, { useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {  const [dateTime, setdateTime] = useState("");  
                   const updateTime = () => {    let tempTime = new Date().toLocaleString();    
                                             setdateTime(tempTime);  
                                            };  
                   useEffect(() => {    let tempTime = new Date().toLocaleString();    
                                    setdateTime(tempTime);    
                                    let intrval = setInterval(updateTime, 1000);    
                                    return () => {      clearInterval(intrval);
                                                 };  
                                   }, []);
                   
  return (    <div id="main">      
          <div className="date-time">{dateTime}</div>    
</div>  
);
};
export default App;
