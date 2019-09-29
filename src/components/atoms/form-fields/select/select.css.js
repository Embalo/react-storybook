import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  outline: none;
  cursor: pointer;

  &:focus > ul {
    display: block;
  }
`;

export const Select = styled.div`
  pointer-events: none;
  height: 48px;
`;

export const DropDown = styled.ul`
  display: none;
  box-sizing: border-box;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.gray};
  border-top: none;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Option = styled.li`
  background: white;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.gray};
  padding: 6px 20px;
  cursor: pointer;

  &:hover,
  &.selected {
    background: black;
    color: white;
  }
  &:last-child {
    border: none;
  }
`;
