import { Container, Text } from '../core';

import { COLORS } from '../../constants';

const STYLE = {
  container: {
    margin: '5px'
  },
  text: {
    color: COLORS.PALETTE.BLACK,
    fontSize: '20px',
    fontWeight: '700'
  }
};


function SectionTitle(props) {
  return (
    <Container theme={STYLE.container}>
      <Text theme={STYLE.text}>{props.children}</Text>
    </Container>
  )
}


export default SectionTitle;
