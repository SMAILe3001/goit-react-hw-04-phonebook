import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secondary};
`;
