import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  dashboardCards: {
    display: 'flex',
    width: '130px',
    height: '130px',
    backgroundColor: '#7B7B7B',
    margin: '30px',
    color: 'white',
  },
  cardsContainer: {
    display: 'grid',
    flexWrap: 'wrap',
    backgroundColor: '#424242',
    gridTemplateColumns: '10% 90%',
    gridTemplateRows: 'auto',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#424242',
  },
  filterButtonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#7b7b7b',
    minWidth: '100%',
    height: '100vh',
  },
  dashboardButton: {
    height: '50px',
    marginTop: '482px !important',
    color: '#F66A5D !important',
    fontStyle: 'bold',
  },
});

export default useStyles;
