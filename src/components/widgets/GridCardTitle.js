import { Container, Text } from '../core';

import { COLORS } from '../../constants';


const STYLE = {
  container: {
    margin: '5px'
  },
  text: {
    color: COLORS.PALETTE.TEXT_PRIMARY,
    fontSize: '16px',
    fontWeight: '600'
  }
};


function GridTitle(props) {
  return (
    <Container theme={STYLE.container}>
      <Text theme={STYLE.text}>{props.children}</Text>
    </Container>
  )
}


export default GridTitle;
