import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, Container, Image } from '../core';
import { GridCardTitle, GridCardDescription } from '.';
import { Utils } from '../../lib';

import { COLORS, ICONS } from '../../constants';


const STYLES = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${COLORS.PALETTE.WHITE}`,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '300px',
    height: '80px',
    margin: '30px',
    padding: '10px',
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



function HomeCard(props) {

  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate(props.data.path);
  }, [navigate, props]);

  return (
    <Container theme={STYLES.container} onClick={handleClick}>
      <Card theme={STYLES.card}>
        <Image theme={STYLES.icon} src={Utils.getIcon(props.data, ICONS)} />
        <GridCardTitle>{props.data.title}</GridCardTitle>
        <GridCardDescription>{props.data.description}</GridCardDescription>
      </Card>
    </Container>
  );
}


export default HomeCard;

