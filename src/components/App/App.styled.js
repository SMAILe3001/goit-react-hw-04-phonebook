import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
  padding: 12px;
  background-color: ${props => props.theme.colors.secondary};
`;
