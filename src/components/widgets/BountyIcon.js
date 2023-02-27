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


function BountyIcon(props) {
  return (
    <Image src="/bounty.png" theme={STYLES.icon} />
  )
}


export default BountyIcon;
