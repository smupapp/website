import { Container, Text } from '../core';
import { COLORS } from '../../constants';


const STYLE = {
  container: {
    margin: '5px'
  },
  text: {
    height: '100px',
    fontSize: '15px',
    overflow: 'hidden',
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
