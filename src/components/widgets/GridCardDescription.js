import { Container, Text } from '../core';
import { COLORS } from '../../constants';


const STYLE = {
  container: {
    marginTop: '15px'
  },
  text: {
    height: '70px',
    fontSize: '15px',
    color: COLORS.PALETTE.TEXT_GRAY
  }
};



function GridCardDescription(props) {
  return (
    <Container theme={STYLE.container}>
      <Text theme={STYLE.text}>{props.children}</Text>
    </Container>
  )
}


export default GridCardDescription;
