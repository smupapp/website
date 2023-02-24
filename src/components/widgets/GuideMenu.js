import { Container } from '../core';
import { GuideCard } from '.';
import { COLORS } from '../../constants';


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


function GuideMenu(props) {

  return (
    <Container theme={STYLE.container}>
      {
        props.guides && props.guides.map(guide => {
          return (
            <Container key={guide.id} theme={STYLE.item}>
              <GuideCard data={{...guide}} />
            </Container>   
          )
        })
      }
    </Container>
  )
}


export default GuideMenu;
