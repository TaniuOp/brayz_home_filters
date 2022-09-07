import BrayzDashboard from './DashboardCards/BrayzDashboard';

import { makeStyles } from '@mui/styles';
import BrayzFilter from './DashboardFilter/BrayzFilter';

export const useStyles = makeStyles({
  mainContainer: {
    display: 'flex',
  },
  dashboardContainer: {
    display: 'flex',
    'align-content': 'center',
    'flex-wrap': 'wrap',
    maxWidth: '100vw',
  },
});

const MainDashboard = () => {
  return (
    <div className={useStyles().mainContainer}>
      <div className={useStyles().dashboardContainer}>
        <BrayzDashboard />
      </div>
      <BrayzFilter />
    </div>
  );
};

export default MainDashboard;
