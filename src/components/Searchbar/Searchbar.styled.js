import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: 1px solid #3f51b5;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  margin: 12px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
    color: #3f51b5;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 100px;
  height: 32px;
  border: 1px solid #3f51b5;
  color: #3f51b5;
  background-position: center;
  border-radius: 5 px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
