import styled from 'styled-components';
import { COLORS } from '../../constants';

const StyledInput = styled.input`
  width: ${props => props.theme.width};
  margin-left: ${props => props.theme.marginLeft};
  margin-right: ${props => props.theme.marginRight};
  margin-top: ${props => props.theme.marginTop};
  margin-bottom: ${props => props.theme.marginBottom};
  margin: ${props => props.theme.margin};
  padding-left: ${props => props.theme.paddingLeft};
  padding-right: ${props => props.theme.paddingRight};
  padding-top: ${props => props.theme.paddingTop};
  padding-bottom: ${props => props.theme.paddingBottom};
  padding: ${props => props.theme.padding};
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
  text-align: ${props => props.theme.textAlign};
  font-size: ${props => props.theme.fontSize};
  font-weight: ${props => props.theme.fontWeight};
  border: ${props => props.theme.border};
  border-bottom: ${props => props.theme.borderBottom};
  &:focus {
    outline: none;
  }
`;

const theme = {
  'width': '100%',
  'marginLeft': 'auto',
  'marginRight': 'auto',
  'marginTop': '10px',
  'marginBottom': '10px',
  'padding': '8px 5px',
  'color': COLORS.PALETTE.TEXT_SECONDARY,
  'backgroundColor': COLORS.PALETTE.TRANSPARENT,
  'textAlign': 'center',
  'fontSize': '35px',
  'fontWeight': 'normal',
  'border': 'none',
  'borderBottom': `0.5px solid ${COLORS.PALETTE.TEXT_GRAY}`
};


function InputBottomBorder(props) {
  const inputTheme = { ...theme, ...props };
  return (
    <StyledInput
      theme={inputTheme}
      disabled={props.disabled}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}


export default InputBottomBorder;