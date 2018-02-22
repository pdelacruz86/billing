const moment = require("moment");

export const accessions = state => state.accessions
export const selectedAccession = state => state.selectedAccession
export const searchText = state => state.searchText
export const filterDates = state => state.filterDates

export const dashboardData = state => state.accessions.filter((item) => {
  if (state.filterDates !== undefined) {
    const beginDate = moment(state.filterDates.start);
    const endDate = moment(state.filterDates.end);

    if (moment.unix(item.CreatedDate).isBetween(beginDate, endDate)) return item
  } else {
    return item
  }
});
