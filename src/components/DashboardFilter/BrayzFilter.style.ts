import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  filterDrawerContainer: { background: 'gray', opacity: 0.5 },
  formControl: {
    marginRight: '36px',
    marginBottom: '6px',
    width: 'max-content',
    maxWidth: '225px',
  },
  indeterminateColor: {
    color: '#f50057',
  },
  selectAllText: {
    fontWeight: 500,
  },
  selectedAll: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
  },
  filterHeader: {
    display: 'flex',
    justifyContent: ' flex-end',
  },
  optionsLabel: {
    width: '225px',
    border: '1px solid red',
  },

  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 450,
  },
  optionLiContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start!important' as 'flex-start',
    flexDirection: 'column',
  },
  optionsGridContainer: {
    display: 'flex',
    maxHeight: '200px',
    flexWrap: 'wrap',
    flexDirection: 'column',
    maxWidth: '40%',
  },
  dropdownOptionLiContainer: {
    width: '50%',
  },
});
