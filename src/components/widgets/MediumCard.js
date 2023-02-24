import { Card, Container } from '../core';

import { COLORS } from '../../constants';


const STYLES = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${COLORS.PALETTE.WHITE}`
  },
  card: {
    fontSize: '25px',
    textAlign: 'center',
    width: '300px',
    height: '150px',
    margin: '5px',
    padding: '1rem',
    backgroundColor: 'transparent',
    border: `0.1px solid ${COLORS.PALETTE.BORDER_GRAY}`,
    borderRadius: '0px',
    cursor: 'pointer',
    userSelect: 'none',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: COLORS.PALETTE.LIGHT_GRAY,
    }
  },
};



function MediumCard(props) {

  return (
    <Container theme={STYLES.container}>
      <Card theme={STYLES.card}>
        {props.text}
      </Card>
    </Container>
  );
}


export default MediumCard;

