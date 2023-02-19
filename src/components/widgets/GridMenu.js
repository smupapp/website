import { Container } from '../core';
import { GridCard } from '.';
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


const data = [
  {
    id: '1',
    data: {
      title: 'Sublist3r',
      description: 'Fast subdomains enumeration tool for penetration testers',
      source: 'github'
    }
  },
  {
    id: '2',
    data: {
      title: 'Findomain',
      description: 'The fastest and cross-platform subdomain enumerator, do not waste your time.',
      source: 'github'
    }
  },
  {
    id: '3',
    data: {
      title: 'ParamSpider',
      description: 'Mining parameters from dark corners of Web Archives',
      source: 'github'
    }
  },
  {
    id: '4',
    data: {
      title: 'ffuf',
      description: 'Fast web fuzzer written in Go',
      source: 'github'
    }
  }
];


function GridMenu(props) {

  return (
    <Container theme={STYLE.container}>
      <Container key={data[0].id} theme={STYLE.item}>
        <GridCard data={data[0].data} />
      </Container>
      <Container key={data[1].id} theme={STYLE.item}>
        <GridCard data={data[1].data} />
      </Container>
      <Container key={data[2].id} theme={STYLE.item}>
        <GridCard data={data[2].data} />
      </Container>
      <Container key={data[3].id} theme={STYLE.item}>
        <GridCard data={data[3].data} />
      </Container>
    </Container>
  )
}


export default GridMenu;
