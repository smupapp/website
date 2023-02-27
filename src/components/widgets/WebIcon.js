import { Link } from 'react-router-dom';

import { Image } from '../core';


const STYLES = {
  icon: {
    width: '20px',
    height: '20px',
    marginRight: '10px',
  },
  link: {
    fontSize: '0px'
  }
};


function WebIcon(props) {
  return (
    <Link style={STYLES.link} to={props.url} target="_blank">
      <Image src="/web.png" theme={STYLES.icon} />
    </Link>
  )
}


export default WebIcon;
