import filterData from '../Mock/filterData.json';

// initialState with Api data
export const initialSagas = (title: string) => {
  let data: string[] = [];
  filterData.forEach((typeOfFilter) => {
    if (typeOfFilter.title === title) {
      data = typeOfFilter.options;
    }
  });
  return data;
};
