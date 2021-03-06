import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex: 1;
  background: #000;
  height: 85px;

  img {
    padding-left: 48px;
  }
`;

export const ConatinerSearch = styled.div`
  padding: 30px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 247px;
  background: #4f9419;

  button {
    height: 49px;
    width: 203px;
    border: 0;
    color: #fff;
    border-radius: 7px;
    background: #006c18;
  }

  input {
    border-radius: 7px;
    background: #fff;
    border: 0;
    height: 48px;
    margin: 12px;
    padding: 2px 10px;
  }

  input.local {
    
  }

  input.meta {
    
  }

  select {
    width: 303px;
    height: 48px;
    border-radius: 7px;
    background: #fff;

    option {
      font-size: 16px;
      line-height: 16px;
    }
  }

  @media(max-width: 720px){
    display: flex;
    flex-direction: column;
    padding: 30px;

    input{
      width: 100%;
    }
  }
`;

export const ContainerCountry = styled.div`
  display: flex;
  flex-wrap: wrap; 
  flex-direction: row; 
  padding: 36px 18px;

  div.modal {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Place = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 30px;
  width: 250px;
  height: 250px;
  border: 1px solid #868686;
  border-radius: 10px;
  margin: 16px;

  div {
    button {
      margin-left: 8px;
      background: none;
      border: 0;
      right: 0;
    }

    img {
      width: 56px;
      height: 34px;
      margin-right: 48px;
    }
  }

  h3 {
    padding: 16px 2px;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #4f9419;
  }

  p {
    padding-top: 11px;
    font-weight: normal;
    font-size: 16px;
    color: #000;
  }
`;
