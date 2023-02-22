import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, Container, Image } from '../core';
import { GithubIcon, GridCardTitle, GridCardDescription } from '.';
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
    height: '40px',
    marginRight: '10px'
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
  }
};



function GridCard(props) {

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/tools/${props.data.id}`);
  }, [navigate, props]);

  return (
    <Container theme={STYLES.container}>
      <Card theme={STYLES.card}>
        <Container onClick={handleClick}>
          <Container theme={STYLES.cardHead}>
            <Image theme={STYLES.icon} src={Utils.getIcon(props.data, ICONS)} />
            <GridCardTitle>{props.data.title}</GridCardTitle>
          </Container>
          <Container theme={STYLES.cardBottom}>
            <GridCardDescription>{props.data.description}</GridCardDescription>
          </Container>
        </Container>
        <Container theme={STYLES.footer.container}>
          {
            props.data.links.github && 
              <GithubIcon url={props.data.links.github} />
          }
        </Container>
      </Card>
    </Container>
  );
}


export default GridCard;

