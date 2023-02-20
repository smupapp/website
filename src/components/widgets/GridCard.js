import React from 'react';

import { Card, Container, Image } from '../core';
import { GridCardTitle, GridCardDescription } from '.';

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
    textAlign: 'left',
    width: '300px',
    height: '150px',
    margin: '15px',
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
  icon: {
    width: '40px',
    height: '40px'
  },
  cardHead: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'center'
  },
  cardBottom: {},
  footer: {
    container: {
      display: 'flex',
      justifyContent: 'end'
    },
    icon: {
      width: '20px',
      height: '20px',
      margin: '0px 5px'
    }
  }
};

function GridCard(props) {

  return (
    <Container theme={STYLES.container}>
      <Card theme={STYLES.card}>
        <Container theme={STYLES.cardHead}>
          <Image margin='0px' theme={STYLES.icon} src={props.data.icon_url || '/logo192.png'} />
          <GridCardTitle>{props.data.title}</GridCardTitle>
        </Container>
        <Container theme={STYLES.cardBottom}>
          <GridCardDescription>{props.data.description}</GridCardDescription>
        </Container>
        <Container theme={STYLES.footer.container}>
          {
            props.data.links.github &&
              <Image src="/github.png" theme={STYLES.footer.icon} />
          }
        </Container>
      </Card>
    </Container>
  );
}


export default GridCard;

