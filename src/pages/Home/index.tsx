 import React from 'react';
 import { Button , Input} from '@material-ui/core';

 import { Header, ConatinerSearch, ContainerCountry } from './styles';
 
 import Logo from "../../assets/Lugares-1.png";

 const Home: React.FC = () => {
   return (
       <>
       <Header>
        <img src={Logo} alt="Logo" />
       </Header>

       <ConatinerSearch >
                <Input type="text"/>
               <Button >Adicionar</Button>
           
       </ConatinerSearch>
       </>
   );
 }
 
 export default Home;