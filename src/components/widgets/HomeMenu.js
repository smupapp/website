import { Container } from '../core';
import { HomeCard } from '.';
import { COLORS } from '../../constants';

import MENU_ITEMS from '../../constants/home.json';

const STYLE = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '30px',
    marginBottom: '30px',
    justifyContent: 'center',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    backgroundColor: `${COLORS.PALETTE.WHITE}`
  },
  item: {
    marginLeft: '5px',
    marginRight: '5px'
  }
};


function HomeMenu(props) {

  return (
    <Container theme={STYLE.container}>
      {
        MENU_ITEMS.map(menu => {
          return (
            <Container key={menu.id} theme={STYLE.item}>
              <HomeCard data={{...menu}} />
            </Container>   
          )
        })
      }
    </Container>
  )
}


export default HomeMenu;
