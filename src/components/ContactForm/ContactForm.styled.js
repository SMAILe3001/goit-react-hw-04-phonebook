import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
`;

export const LabelContain = styled.div`
  border-radius: 7px;
  border: ${props => `2px solid ${props.theme.colors.accent}`};
  padding: 4px;
  display: block;
`;

export const Label = styled.label`
  margin-left: 10px;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.colors.accent};
  margin-left: 10px;
  font-size: 20px;
  border: none;
  border-radius: 15px;
  &:hover {
    background-color: ${props => props.theme.colors.success};
  }
`;

export const LabelTitle = styled.span`
  margin-right: 10px;
`;

export const Input = styled.input`
  height: 30px;
  border-radius: 7px;
  border: ${props => `2px solid ${props.theme.colors.accent}`};
  display: block;
  font-size: 24px;
  padding-left: 8px;
  outline: none;
`;
