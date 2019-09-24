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
  ${props => colorStyle(props)}
  ${props => props.size === 'small' && small}
  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const black = props => `
  background: ${props.theme.colors.black};
  color: white;
`;

const gray = props => `
  background: ${props.theme.colors.gray};
  color: white;
`;

const white = props => `
  background: ${props.theme.colors.white};
  color: #CCCCCC;

  &:hover {
    border: 1px solid black;
    color: black;
  }
`;

const orange = props => `
  background: ${props.theme.colors.orange};
  color: white;
`;

const small = `
  padding: 10px;
  min-height: 37px;
`;

const colorStyle = props => {
  switch (props.color) {
    case 'gray':
      return gray(props);
    case 'orange':
      return orange(props);
    case 'white':
      return white(props);
    default:
      return black(props);
  }
};
