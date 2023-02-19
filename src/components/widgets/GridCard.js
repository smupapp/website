import React from 'react';

import { Card, Container, Image } from '../core';
import { GridCardTitle, GridCardDescription } from '.';

import { COLORS } from '../../constants';


// TODO Move to constants
const IMAGE_URLS = {
  'github': 'https://cdn.iconscout.com/icon/free/png-256/github-3215409-2673827.png'
};


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
    border: `0.1px solid ${COLORS.PALETTE.LIGHT_GRAY}`,
    borderRadius: '8px',
    cursor: 'pointer',
    userSelect: 'none',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: COLORS.PALETTE.LIGHT_GRAY,
    }
  },
  cardHead: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'center'
  },
  cardBottom: {
    padding: '5px'
  }
};

function GridCard(props) {

  return (
    <Container theme={STYLES.container}>
      <Card theme={STYLES.card}>
        <Container theme={STYLES.cardHead}>
          <Image margin='0px' src={IMAGE_URLS[props.data.source]} />
          <GridCardTitle>{props.data.title}</GridCardTitle>
        </Container>
        <Container theme={STYLES.cardBottom}>
          <GridCardDescription>{props.data.description}</GridCardDescription>
        </Container>
      </Card>
    </Container>
  );
}


export default GridCard;

