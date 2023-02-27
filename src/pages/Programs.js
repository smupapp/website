import { Container, Description, ProgramMenu, Image, Title } from '../components';

import { COLORS } from '../constants';


const STYLES = {
  container: {
    main: {
      maxWidth: '100%',
      display: 'flex',
      overflow: 'hidden',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingLeft: '20px',
      paddingRight: '20px',
      backgroundColor: `${COLORS.PALETTE.WHITE}`
    },
    header: {
      width: '100%',
      margin: '10px',
      textAlign: 'center'
    },
    middle: {
      width: '60%'
    }
  },
  image: {
    width: '60px',
    height: '60px',
    margin: '10px 0px'
  }
};

function Programs(props) {

  return (
    <Container theme={STYLES.container.main}>
      <Container theme={STYLES.container.header}>
        <Image theme={STYLES.image} src="/logo192.png" />
        <Title>Bug Bounty <u>Programs</u></Title>
        <Description>Bug bounty programs directory for you, which saves you time in digging for these programs using dorking</Description>
      </Container>
      <ProgramMenu /> 
    </Container>
  );
}

export default Programs;
