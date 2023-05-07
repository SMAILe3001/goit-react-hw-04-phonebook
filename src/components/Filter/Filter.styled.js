import styled from '@emotion/styled';

export const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  margin: 8px;
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
