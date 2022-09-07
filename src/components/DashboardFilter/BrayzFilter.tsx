import {
  Drawer,
  ListItem,
  ListItemText,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  ListItemIcon,
} from '@mui/material';
import filterData from '../Mock/filterData.json';
import {
  useDashboardSelectors,
  useOperatorFilterSelector,
} from '../redux/selectors';
import useFiltersDrawerVisibilityHandler from '../hooks/useFiltersDrawerVisibilityHandler';
import useOperatorFilterAppliedHandler from '../hooks/useOperatorFilterAppliedHandler';
import { useStyles } from './BrayzFilter.style';
import { useCallback, useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { globalAppInitialState } from '../redux/initialState';
import { useDispatch } from 'react-redux';
import { resetSelectedFilters } from '../redux/actions';
import { SELECT_ALL, SELECT_NONE, RESET } from './BrayzFilter.constants';

const BrayzFilter = () => {
  const dispatch = useDispatch();
  const { onHandlerDrawerVisibility } = useFiltersDrawerVisibilityHandler();
  const { onHandlerOperatorFilterApplied } = useOperatorFilterAppliedHandler();

  const drawerVisibility = useDashboardSelectors();
  const selectedOperators = useOperatorFilterSelector();

  const [isAllOperatorsSelected, setIsAllOperatorsSelected] = useState(true);
  const [selected, setSelected] = useState([]);

  const classes = useStyles();

  const initialOperatorsState = globalAppInitialState.selectedOperators;

  const isAllSelected =
    filterData[0].options.length > 0 &&
    selected.length === filterData[0].options.length;

  // TODO: Adjust handleChange
  const handleChange = (event: any) => {
    console.log(event);
    console.log(filterData[0].options);
    const value = event.target.value;
    if (value[value.length - 1] === 'all') {
      console.log(selected.length, filterData[0].options.length);
      console.log(event.options);

      setSelected(
        selected.length === filterData[0].options.length ? [] : event.options
      );
      return;
    }
    setSelected(value);
  };

  const resetAllFilters = useCallback(() => {
    dispatch(resetSelectedFilters(initialOperatorsState));
  }, []);

  const handleSelectAll = (event: any) => {
    if (initialOperatorsState.length === event.options.length) {
      setIsAllOperatorsSelected(true);
    }
    if (isAllOperatorsSelected) {
      dispatch(resetSelectedFilters(['']));
      setIsAllOperatorsSelected(!isAllOperatorsSelected);
    }
    if (!isAllOperatorsSelected) {
      dispatch(resetSelectedFilters(initialOperatorsState));
      setIsAllOperatorsSelected(!isAllOperatorsSelected);
    }
  };

  return (
    <div className={classes.filterDrawerContainer}>
      <Drawer
        open={drawerVisibility}
        anchor={'left'}
        onClose={() => onHandlerDrawerVisibility(false)}
        transitionDuration={900}
      >
        <div className={classes.filterHeader}>
          <Button variant='outlined' onClick={() => resetAllFilters()}>
            {RESET}
          </Button>
          <Button onClick={() => onHandlerDrawerVisibility(false)}>
            <CloseIcon />
          </Button>
        </div>
        <div className={classes.optionsContainer}>
          {filterData?.map((item: any) =>
            item.type === 'options' ? (
              <ListItem key={item.id} className={classes.optionLiContainer}>
                <ListItemText primary={item.title} />
                <div className={classes.optionsGridContainer}>
                  <FormControlLabel
                    className={classes.formControl}
                    label={
                      initialOperatorsState.length === item.options.length
                        ? SELECT_NONE
                        : SELECT_ALL
                    }
                    control={
                      <Checkbox
                        sx={{
                          color: '#c54c5a',
                          '&.Mui-checked': {
                            color: '#ff5751',
                          },
                        }}
                        checked={
                          initialOperatorsState.length === item.options.length
                        }
                        name='selectAll'
                        value='selectAll'
                        onChange={() => {
                          handleSelectAll(item);
                        }}
                      />
                    }
                  />
                  {item.options.map((option: any) => (
                    <Grid item key={item.id}>
                      <FormControlLabel
                        className={classes.formControl}
                        key={item.id}
                        label={option}
                        control={
                          <Checkbox
                            sx={{
                              color: '#c54c5a',
                              '&.Mui-checked': {
                                color: '#ff5751',
                              },
                            }}
                            checked={selectedOperators?.includes(option)}
                            name={option.toString()}
                            onChange={() => {
                              onHandlerOperatorFilterApplied(option);
                            }}
                          />
                        }
                      />
                    </Grid>
                  ))}
                </div>
              </ListItem>
            ) : (
              <>
                {/* Not finished yet*/}
                <InputLabel id='mutipleSelect'>{item.title}</InputLabel>
                <FormControl>
                  <Select
                    labelId='mutipleSelect'
                    multiple
                    value={selected}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(', ')}
                    className={classes.dropdownOptionLiContainer}
                  >
                    <MenuItem value='all'>
                      <ListItemIcon>
                        <Checkbox
                          sx={{
                            color: '#c54c5a',
                            '&.Mui-checked': {
                              color: '#ff5751',
                            },
                          }}
                          checked={isAllSelected}
                          indeterminate={
                            selected.length > 0 &&
                            selected.length < item.options.length
                          }
                        />
                      </ListItemIcon>
                      <ListItemText primary={SELECT_ALL} />
                      {/* TODO: change json format for dropdown options */}
                    </MenuItem>
                    {item.options.map((option: string, i: number) => (
                      <MenuItem key={option} value={option[i]}>
                        <ListItemIcon>
                          <Checkbox
                            checked={selected.length > -1}
                            sx={{
                              color: '#c54c5a',
                              '&.Mui-checked': {
                                color: '#ff5751',
                              },
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={option} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </>
            )
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default BrayzFilter;
