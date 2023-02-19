import styled from 'styled-components';


const StyledImage = styled.img`
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  margin: ${props => props.theme.margin};
  margin-left: ${props => props.theme.marginLeft};
  margin-right: ${props => props.theme.marginRight};
  cursor: pointer;
`;

const theme = {
  width: '50px',
  hegiht: '50px'
};


function Image(props) {
  const inputTheme = {...theme, ...props.theme};
  return (
    <StyledImage theme={inputTheme} src={props.src} href={props.href} onClick={props.onClick} />
  )
}


export default Image;