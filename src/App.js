import { Container, Description, GridMenu, Title } from './components';

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
  }
};

function App() {
  return (
    <div className="App">
      <Container theme={STYLES.container.main}>
        <Container theme={STYLES.container.header}>
          <Title>Bug Bounty Tools</Title>
          <Description>But bounty tools directory to help you better understand the tool & speed up your hunting</Description>
        </Container>
      <GridMenu /> 
      </Container>
    </div>
  );
}

export default App;
