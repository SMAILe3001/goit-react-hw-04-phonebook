import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
`;

export const LabelContain = styled.div`
  border-radius: 7px;
  border: 2px solid rgb(132 156 231);
  padding: 4px;
  display: block;
`;

export const Label = styled.label`
  margin-left: 10px;
`;

export const Button = styled.button`
  background-color: rgb(132 156 231);
  margin-left: 10px;
  font-size: 20px;
  border: none;
  border-radius: 15px;
  &:hover {
    background-color: rgb(116 221 118);
  }
`;

export const LabelTitle = styled.span`
  margin-right: 10px;
`;

export const Input = styled.input`
  height: 30px;
  border-radius: 7px;
  border: 2px solid rgb(132 156 231);
  display: block;
  font-size: 24px;
  padding-left: 8px;
  outline: none;
`;
