import { useParams } from 'react-router-dom';

import {
  Container,
  Description,
  GithubIcon,
  Image,
  MediumCard,
  Title,
  YoutubeCard
} from '../components';
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
      paddingLeft: '100px',
      paddingRight: '100px',
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
  card: {
    textAlign: 'left',
    width: '300px',
    height: '150px',
    margin: '15px',
    padding: '0.1px',
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
  image: {
    width: '60px',
    height: '60px',
    margin: '10px 0px'
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    overflowX: 'auto'
  },
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
        {
          data.links.github && 
            <GithubIcon url={data.links.github} />
        }   
      </Container>
      <Container theme={STYLES.section}>
        <YoutubeCard url='https://www.youtube.com/embed/H1wdBgY1rtg' />
        <YoutubeCard url='https://www.youtube.com/embed/H1wdBgY1rtg' />
        <YoutubeCard url='https://www.youtube.com/embed/H1wdBgY1rtg' />
        <YoutubeCard url='https://www.youtube.com/embed/H1wdBgY1rtg' />
        <YoutubeCard url='https://www.youtube.com/embed/H1wdBgY1rtg' />
      </Container>
      <Container theme={STYLES.section}>
        <MediumCard text='Hakluke’s Guide to Amass — How to Use Amass More Effectively for Bug Bounties' />
      </Container>
    </Container>
  );
}

export default Tools;
