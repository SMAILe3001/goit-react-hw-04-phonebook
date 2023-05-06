import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 0px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  border-radius: 7px;
  border: 2px solid rgb(132 156 231);
  margin-bottom: 4px;
  padding-left: 8px;
`;

export const Button = styled.button`
  background-color: rgb(132 156 231);
  font-size: 20px;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: rgb(255 74 74);
  }
`;
