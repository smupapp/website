import { Card, Container, Image } from '../core';
import { GridCardTitle } from '.';
import { Utils } from '../../lib';

import { COLORS, ICONS } from '../../constants';


const STYLES = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${COLORS.PALETTE.WHITE}`
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '300px',
    height: '150px',
    margin: '15px',
    padding: '15px',
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
  icon: {
    width: '40px',
    height: '40px',
  },
};



function GuideCard(props) {

  return (
    <Container theme={STYLES.container} onClick={()=>window.open(props.data.link,'_blank')}>
      <Card theme={STYLES.card}>
        <Image theme={STYLES.icon} src={Utils.getIcon(props.data, ICONS)} />
        <GridCardTitle>{props.data.title}</GridCardTitle>
      </Card>
    </Container>
  );
}


export default GuideCard;

