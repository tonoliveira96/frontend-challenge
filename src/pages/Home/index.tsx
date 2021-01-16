import React from "react";
import { FiX, FiEdit2 } from "react-icons/fi"
import { Button, Input, Select } from "@material-ui/core";

import { Header, ConatinerSearch, ContainerCountry, Place } from "./styles";

import Logo from "../../assets/Lugares-1.png";

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <img src={Logo} alt="Logo" />
      </Header>

      <ConatinerSearch>
        <select name="select-country" id="" placeholder="Selecione...">
          <option>-</option>
          <option>Brasil</option>
          <option>Peru</option>
          <option>Canada</option>
        </select>
        <input type="text" className="local" placeholder="Digite o local que deseja conhecer"/>
        <input type="text" className="meta" placeholder="mês/ano"/>
        <Button>Adicionar</Button>
      </ConatinerSearch>

      <ContainerCountry>
        <Place>
          <span>
            <img src="https://restcountries.eu/data/bra.svg" alt="Brasil"/>
            <FiEdit2 size={20} color="#868686"/>
            <FiX size={20} color="#868686"/>
          </span>
         
          <h3>Brasil</h3>
          <hr/>
          <p>Local: Rio</p>
          <p>Meta: 04/2022</p>
        </Place>
      </ContainerCountry>
    </>
  );
};

export default Home;
