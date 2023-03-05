import { Card, Container, Image } from '../core';
import { BountyIcon, GridCardTitle, GridCardDescription, HOFIcon, SwagIcon, WebIcon } from '.';
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
      justifyContent: 'space-between'
    },
    left: {
      display: 'flex',
    }
  }
};



function ProgramCard(props) {

  return (
    <Container theme={STYLES.container}>
      <Card theme={STYLES.card}>
        <Container onClick={() => props.data.links.program && window.open(props.data.links.program, '_blank')}>
          <Container theme={STYLES.cardHead}>
            <Image theme={STYLES.icon} src={Utils.getIcon(props.data, ICONS)} dataSrc={Utils.getIcon(props.data, ICONS)} />
            <GridCardTitle>{props.data.title}</GridCardTitle>
          </Container>
          <Container theme={STYLES.cardBottom}>
            <GridCardDescription>{props.data.description}</GridCardDescription>
          </Container>
        </Container>
        <Container theme={STYLES.footer.container}>
          <Container theme={STYLES.footer.left}>
            {
              props.data.options.bounty &&
                <BountyIcon />
            }
            {            
              props.data.options.swag && 
                <SwagIcon />
            } 
            {
              props.data.options.hof &&
                <HOFIcon />
            }
          </Container>
          {
            props.data.links.web && 
              <WebIcon url={props.data.links.web} />
          }
        </Container>
      </Card>
    </Container>
  );
}


export default ProgramCard;

