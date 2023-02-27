import { Container, Text } from '../core';

import { COLORS } from '../../constants';


const STYLE = {
  container: {
    margin: '20px auto'
  },
  text: {
    color: COLORS.PALETTE.TEXT_BLACK,
    fontSize: '15px',
    fontWeight: '300'
  }
};


function Description(props) {
  return (
    <Container theme={STYLE.container}>
      <Text theme={STYLE.text}>{props.children}</Text>
    </Container>
  )
}


export default Description;
