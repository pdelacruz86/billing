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

export const pendingCasesCount = state => {
  //pending
  let accessionPending = 0;

  state.accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.Status === "Pending") accessionPending++;
    });
  });

  return accessionPending;
}
export const pendingCasesPercent = state => {
  //pending
  let accessionPending = 0;

  //accession total
  let accessionTotal = 0;

  state.accessions.forEach(element => {
    accessionTotal = accessionTotal + element.Cases.length;
  });

  state.accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.Status === "Pending") accessionPending++;
    });
  });

  let accessionCategorized = accessionTotal - accessionPending;

  var percentage = (accessionCategorized / accessionTotal) * 100;

  console.log(percentage)

  return parseInt(percentage);
}
export const insuranceCasesPercent = state => {
  //pending
  let accessionPending = 0;

  //accession total
  let accessionTotal = 0;

  state.accessions.forEach(element => {
    accessionTotal = accessionTotal + element.Cases.length;
  });

  state.accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.Status === "Pending") accessionPending++;
    });
  });

  let accessionCategorized = accessionTotal - accessionPending;

  //insurance
  let InsuranceCount = 0;

  state.accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.BillingType === "Insurance" && item.InsuranceType !== "Not Provided" && item.HospitalStatus !== "Not Provided") {
        InsuranceCount++;
      }
    });
  });

  var percentage = (InsuranceCount / accessionCategorized) * 100;

  return parseInt(percentage);
}
export const directSplitCasesPercent = state => {
  //pending
  let accessionPending = 0;

  //accession total
  let accessionTotal = 0;

  state.accessions.forEach(element => {
    accessionTotal = accessionTotal + element.Cases.length;
  });

  state.accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.Status === "Pending") accessionPending++;
    });
  });

  let accessionCategorized = accessionTotal - accessionPending;

  //direct / split
  let directSplitCount = 0;

  state.accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.BillingType === "Direct") directSplitCount++;
      if (item.BillingType === "Split") directSplitCount++;
    });
  });

  var percentage = (directSplitCount / accessionCategorized) * 100;

  return parseInt(percentage);
}
export const completedCasesPercent = state => {
  //pending
  let accessionPending = 0;

  //accession total
  let accessionTotal = 0;

  state.accessions.forEach(element => {
    accessionTotal = accessionTotal + element.Cases.length;
  });

  state.accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.Status === "Pending") accessionPending++;
    });
  });

  let accessionCategorized = accessionTotal - accessionPending;

  //complete cases details
  let completedCases = 0;

  state.accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.Status === "Complete") {
        completedCases++
      }
    });
  });

  var percentage = (completedCases / accessionCategorized) * 100;

  return parseInt(percentage);
}
export const incompletedCasesPercent = state => {
  //pending
  let accessionPending = 0;

  //accession total
  let accessionTotal = 0;

  state.accessions.forEach(element => {
    accessionTotal = accessionTotal + element.Cases.length;
  });

  state.accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.Status === "Pending") accessionPending++;
    });
  });

  let accessionCategorized = accessionTotal - accessionPending;

  //complete cases details
  let incompletedCases = 0;

  state.accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.Status === "Incomplete") {
        incompletedCases++
      }
    });
  });

  var percentage = (incompletedCases / accessionCategorized) * 100;

  return parseInt(percentage);
}
