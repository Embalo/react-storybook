import styled from 'styled-components';

export const Component = styled.button`
  border: 1px solid transparent;
  display: inline-block;
  text-align: center;
  font-size: 16px;
  min-width: 190px;
  padding: 14px;
  outline: none;
  cursor: pointer;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  ${props => colorStyle(props.color)}
  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const black = `
  background: black;
  color: white;
`;

const gray = `
  background: #B5B5B5;
  color: white;
`;

const white = `
  background: white;
  color: #CCCCCC;

  &:hover {
    border: 1px solid black;
    color: black;
  }
`;

const orange = `
  background: #F79B1C;
  color: white;
`;

const colorStyle = color => {
  switch (color) {
    case 'gray':
      return gray;
    case 'orange':
      return orange;
    case 'white':
      return white;
    default:
      return black;
  }
};
