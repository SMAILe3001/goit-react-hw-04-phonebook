import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 0px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  border-radius: 7px;
  border: ${props => `2px solid ${props.theme.colors.accent}`};
  margin-bottom: 4px;
  padding-left: 8px;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.colors.accent};
  font-size: 20px;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: ${props => props.theme.colors.danger};
  }
`;
