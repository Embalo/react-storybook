import styled from 'styled-components';
import Input from '../input/input';

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const InputButton = styled(Input)``;

export const Button = styled.button`
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  background-size: 50%;
  border-radius: 0;
  border: 1px solid #b5b5b5;
  margin-left: -1px;
  cursor: pointer;
  outline: none;
  flex: 0 0 48px;
  margin-bottom: 12px;

  &:focus,
  &:hover {
    border-color: #707070;
    z-index: 2;
  }
  :disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
