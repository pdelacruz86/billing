const moment = require("moment");

export const worklist_data = state => state.worklist_data
export const worklist_filter = state => state.worklist_filter

export const worklist_data_filtered = state => state.worklist_data.filter((item) => {
  if (state.filterDates !== undefined) {
    const beginDate = moment(state.filterDates.start);
    const endDate = moment(state.filterDates.end);

    if (moment.unix(item.CreatedDate).isBetween(beginDate, endDate)) return item
  } else {
    return item
  }
})