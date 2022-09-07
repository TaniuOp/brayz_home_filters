import { Button, CardContent } from '@mui/material';
import useEventsDrawerVisibilityHandler from '../hooks/useFiltersDrawerVisibilityHandler';
import useStyles from './BrayzDashboard.style';
import TuneIcon from '@mui/icons-material/Tune';

const BrayzDashboard = () => {
  const { onHandlerDrawerVisibility } = useEventsDrawerVisibilityHandler();
  const styles = useStyles().dashboardCards;

  const dashboardCards = [
    'EXAMINATIONS',
    'COMPRESSION',
    'DIAGNOSTICS',
    'PERFORMANCE',
    'SELECTED',
    'QUALITY',
    'DENSITY',
    'PGMI',
  ];

  return (
    <div className={useStyles().cardsContainer}>
      <div className={useStyles().filterButtonContainer}>
        <Button
          className={useStyles().dashboardButton}
          variant='text'
          startIcon={<TuneIcon />}
          onClick={() => {
            onHandlerDrawerVisibility(true);
          }}
        >
          Filter
        </Button>
      </div>
      <div className={useStyles().cardContainer}>
        {dashboardCards.map((title, index) => (
          <CardContent className={styles} key={dashboardCards[index]}>
            {title}
          </CardContent>
        ))}
      </div>
    </div>
  );
};

export default BrayzDashboard;
