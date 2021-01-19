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
    border-radius: 7px;
    background: #006c18;
  }

  input {
    border-radius: 7px;
    border: 0;
    height: 48px;
    margin-left: 12px;
  }

  input.local {
    width: 455px;
  }

  input.meta {
    width: 238px;
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
`;

export const ContainerCountry = styled.div`
  display: flex;
  flex-direction: row;
  padding: 53px 36px;

  div.modal {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Place = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 32px;
  width: 250px;
  height: 250px;
  border: 1px solid #868686;
  border-radius: 10px;
  margin-right: 30px;
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
