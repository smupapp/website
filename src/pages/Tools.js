import { useParams } from 'react-router-dom';
//import { TwitterTweetEmbed } from 'react-twitter-embed';

import { Container, Description, GithubIcon, Image, Title } from '../components';
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
  },
  tweetsBar: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '60px'
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
        {
          data.links.github && 
            <GithubIcon url={data.links.github} />
        }   
      </Container>
      <Container theme={STYLES.tweetsBar}>
    {/* <TwitterTweetEmbed
           tweetId={'1514259125647118342'}
         />
         <TwitterTweetEmbed
           tweetId={'1228364474282733568'}
         />
         */}
         <iframe src='https://www.youtube.com/embed/H1wdBgY1rtg'
           frameBorder='0'
           allow='autoplay; encrypted-media'
           allowFullScreen={false}
           title='video'
         />
       </Container>
    </Container>
  );
}

export default Tools;
