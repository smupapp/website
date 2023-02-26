import { Container } from '../core';
import { ProgramCard } from '.';
import { COLORS } from '../../constants';

import PROGRAMS from '../../constants/programs.json';

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


function ProgramMenu(props) {

  return (
    <Container theme={STYLE.container}>
      {
        PROGRAMS.map(program => {
          return (
            <Container key={program.id} theme={STYLE.item}>
              <ProgramCard data={{...program}} />
            </Container>   
          )
        })
      }
    </Container>
  )
}


export default ProgramMenu;
