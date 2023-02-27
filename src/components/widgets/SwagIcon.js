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


function SwagIcon(props) {
  return (
    <Image src="/swag.png" theme={STYLES.icon} />
  )
}


export default SwagIcon;
