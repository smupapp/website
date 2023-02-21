import { useParams } from 'react-router-dom';

import { Container, Description, Image, Title } from '../components';
import { Utils } from '../lib';

import { COLORS, ICONS } from '../constants';
import TOOLS from '../constants/tools.json';


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



function Tools(props) {

  const { id } = useParams();
  const data = TOOLS.find(tool => tool.id === id)

  return (
    <Container theme={STYLES.container.main}>
      <Container theme={STYLES.container.header}>
        <Image theme={STYLES.image} src={Utils.getIcon(data, ICONS, '..')} />
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
      </Container>
    </Container>
  );
}

export default Tools;
