import React from "react";
import './modal.scss'

const modal = ({ active, setActive, modSelectImg, modSelectTitle, modSelectedText, children }) => {

    return (
      <div className={active ? "modalActive" : "modal"} onClick={() => setActive(active ? false : true)}>
        <div className="modalContent">
            <div className="innerBox">
              <img src = {modSelectImg}/>
              <div className="info">
                  <h1>{modSelectTitle}</h1>
                  <p>{modSelectedText}</p>
              </div>
            </div>
            
        </div>
        
      </div>
    );
  };

export default modal;