import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  button.salve {
    margin-left: 8px;
    background: #006c18;
    border: 0;
    color: #fff;
    font-weight: bold;
    padding: 8px;
    border-radius: 5px;
  }

  button.close {
    margin-left: 8px;
    background: #ff0000;
    border: 0;
    color: #fff;
    font-weight: bold;
    padding: 4px 12px;
    border-radius: 5px;
  }
  div {
    z-index: 100;
    background: white;
    position: relative;
    margin: 20px auto;
    max-width: 300px;
    padding: 8px;
    border-radius: 10px;

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

  input {
    border-radius: 7px;
    background: #fff;
    border: 1px solid #ccc;
    height: 48px;
    margin: 8px;
    padding: 2px 10px;
    font-weight: normal;
    font-size: 16px;
    color: #000;
  }
`;
