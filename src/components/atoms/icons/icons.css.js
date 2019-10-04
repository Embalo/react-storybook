import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Icon = styled.div`
  border: 1px solid ${props => props.theme.colors.gray};
  background: white;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex: 1 1 150px;

  img {
    margin-right: 10px;
  }
`;
