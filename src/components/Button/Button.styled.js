import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  margin: 4px;
  background-color: ${props => props.theme.colors.accent};
  font-size: 20px;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: ${props => props.theme.colors.success};
  }
`;
