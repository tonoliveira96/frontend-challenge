 import React from 'react';
 
 import { Header, ConatinerSearch, ContainerCountry } from './styles';
 
 import Logo from "../../assets/Lugares-1.png";

 const Home: React.FC = () => {
   return (
       <>
       <Header>
        <img src={Logo} alt="Logo" />
       </Header>
       </>
   );
 }
 
 export default Home;