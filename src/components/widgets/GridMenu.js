import { Container } from '../core';
import { GridCard } from '.';
import { COLORS } from '../../constants';

import TOOLS from '../../constants/tools.json';

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


function GridMenu(props) {

  return (
    <Container theme={STYLE.container}>
      {
        TOOLS.map(tool => {
          return (
            <Container key={tool.id} theme={STYLE.item}>
              <GridCard data={{...tool}} />
            </Container>   
          )
        })
      }
    </Container>
  )
}


export default GridMenu;
