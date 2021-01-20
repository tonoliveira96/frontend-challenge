import React from "react";

import { Container } from "./styles";

const Modal: React.FC = () => {
  return (
    <>
      <Container>
         <div > 
         <div className="header">
             Modal
        <button className="close">X</button>
        </div>
        
          <img src={`https://restcountries.eu/data/bra.svg`} alt="Brasil" />
        

        <h3>BRASIL</h3>
        <hr />
        <span>
          Local: <input type="text" />{" "}
        </span>
        <span>
          Meta: <input type="text" />{" "}
        </span>
        <div className="footer">
            <button className="salve"> Salvar</button>
        </div>
             </div> 
      </Container>
    </>
  );
};

export default Modal;
