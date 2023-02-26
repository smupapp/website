import { Link } from 'react-router-dom';

import { Image } from '../core';


const STYLES = {
  icon: {
    width: '30px',
    height: '30px',
    marginRight: '10px',
  },
  link: {
    fontSize: '0px'
  }
};


function ProgramIcon(props) {
  return (
    <Link style={STYLES.link} to={props.url} target="_blank">
      <Image src="/program.png" theme={STYLES.icon} />
    </Link>
  )
}


export default ProgramIcon;
