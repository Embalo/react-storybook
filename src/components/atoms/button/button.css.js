import styled from 'styled-components';

export const Component = styled.button`
  box-sizing: border-box;
  border: 1px solid transparent;
  display: inline-block;
  text-align: center;
  font-family: inherit;
  font-weight: bold;
  letter-spacing: 0.8pt;
  font-size: 16px;
  min-width: 190px;
  min-height: 48px;
  padding: 15px;
  line-height: 1;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  ${props => colorStyle(props.color)}
  ${props => props.size === 'small' && small}
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

const small = `
  padding: 10px;
  min-height: 37px;
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
