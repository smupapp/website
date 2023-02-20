import { Container, Description, GridMenu, Image, Title } from './components';

import { COLORS } from './constants';

import './App.css';


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

function App() {
  return (
    <div className="App">
      <Container theme={STYLES.container.main}>
        <Container theme={STYLES.container.header}>
          <Image theme={STYLES.image} src="/logo192.png" />
          <Title>Bug Bounty Tools</Title>
          <Description>Bug bounty tools directory for you to find the right tool, understand the tool & help you speed up your hunting</Description>
        </Container>
      <GridMenu /> 
      </Container>
    </div>
  );
}

export default App;
