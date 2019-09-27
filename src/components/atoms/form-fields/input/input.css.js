import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-bottom: 12px;
  width: 100%;
`;

export const Input = styled.input`
  padding: ${props => (props.hasLabel ? '18px 20px 5px' : '12px 20px 11px')};
  background: white;
  border-radius: 0;
  box-sizing: border-box;
  border: 1px solid #b5b5b5;
  font-family: inherit;
  font-size: 16px;
  outline: none;
  letter-spacing: 0.8pt;
  width: 100%;

  &:focus,
  &:hover {
    border: 1px solid #707070;
  }
  &::placeholder {
    color: #b5b5b5;
  }
  :disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 5px;
  color: #b5b5b5;
  left: 20px;
  font-size: 12px;
`;
