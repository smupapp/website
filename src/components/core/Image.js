import styled from 'styled-components';


const StyledImage = styled.img`
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  margin: ${props => props.theme.margin};
  margin-left: ${props => props.theme.marginLeft};
  margin-right: ${props => props.theme.marginRight};
  margin-top: ${props => props.theme.marginTop};
  margin-bottom: ${props => props.theme.marginBottom};  
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
`;

const theme = {
  width: '50px',
  height: '50px'
};


function Image(props) {
  const inputTheme = {...theme, ...props.theme};
  return (
    <StyledImage theme={inputTheme} src={props.src} data-src={props.dataSrc} href={props.href} onClick={props.onClick} />
  )
}


export default Image;
