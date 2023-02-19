import styled, { ThemeProvider } from 'styled-components';
import COLORS from '../../constants/colors';


const StyledText = styled.div`
  height: ${props => props.theme.height};
  color: ${props => props.theme.color};
  font-size: ${props => props.theme.fontSize};
  font-weight: ${props => props.theme.fontWeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  line-height: ${props => props.theme.lineHeight};
  overflow: ${props => props.theme.overflow};
  text-decoration: ${props => props.theme.textDecoration};
`;

const theme = {
  color: COLORS.PALETTE.TEXT_BLACK,
  fontSize: '25px',
  fontWeight: 'normal',
  letterSpacing: '0px'
};

  
function Text(props) {
  return (
    <ThemeProvider theme={theme}>
      <StyledText theme={{...props.theme}}>{props.children}</StyledText>
    </ThemeProvider>
  )
}


export default Text;