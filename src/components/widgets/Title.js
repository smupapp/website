import { Container, Text } from '../core';

import { COLORS } from '../../constants';

const STYLE = {
  container: {
    margin: '5px'
  },
  text: {
    color: COLORS.PALETTE.TEXT_BLACK,
    fontSize: '25px',
    fontWeight: '700'
  }
};


function Title(props) {
  return (
    <Container theme={STYLE.container}>
      <Text theme={STYLE.text}>{props.children}</Text>
    </Container>
  )
}


export default Title;