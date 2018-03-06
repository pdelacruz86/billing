export const dashboardSummarizedData = state => {
  debugger;
  var accessions = state.accessions || [];

  if (accessions.length === 0) return {
    AccessionTotal: 0,
    CategorizedTotal: 0,
    CompletedTotal: 0,
    IncompleteTotal: 0,
    InsuranceTotal: 0,
    DirectSplit: 0,
    PendingTotal: 0
  };

  let accessionTotal = 0;

  accessions.forEach(element => {
    accessionTotal = accessionTotal + element.Cases.length;
  });

  //pending
  let accessionPending = 0;
  let accessionComplete = 0;
  let accessionIncomplete = 0;

  accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.Status === "Pending") accessionPending++;
      if (item.Status === "Complete") accessionComplete++;
      if (item.Status === "Incomplete") accessionIncomplete++;
    });
  });

  //insurance
  let InsuranceCount = 0;

  accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (
        item.BillingType === "Insurance" &&
        (item.InsuranceType !== "Not Provided" &&
          item.HospitalStatus !== "Not Provided")
      ) {
        InsuranceCount++;
      }
    });
  });

  //direct split
  let DirectSplitCount = 0;

  accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.BillingType === "Direct" || item.BillingType === "Split")
        DirectSplitCount++;
    });
  });

  //categorized total
  let accessionCategorized = accessionTotal - accessionPending;


  var data = {
    AccessionTotal: accessionTotal,
    CategorizedTotal: accessionCategorized,
    CompletedTotal: accessionComplete,
    IncompleteTotal: accessionIncomplete,
    InsuranceTotal: InsuranceCount,
    DirectSplit: DirectSplitCount,
    PendingTotal: accessionPending
  };

  return data;
}

export const pendingCasesCount = state => {
  //pending
  debugger;
  let accessionPending = 0;
  for (const element of state.accesssions || []) {
    element.Cases.filter(function (item) {
      if (item.Status === "Pending") accessionPending++;
    });
  }

  return accessionPending;
}

export const pendingCasesPercent = state => {
  let accessions = state.accessions || [];
  //pending
  let accessionPending = 0;

  //accession total
  let accessionTotal = 0;

  accessions.forEach(element => {
    accessionTotal = accessionTotal + element.Cases.length;
  });

  accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.Status === "Pending") accessionPending++;
    });
  });

  let accessionCategorized = accessionTotal - accessionPending;

  var percentage = (accessionCategorized / accessionTotal) * 100;

  var rounded = Math.round(percentage * 10) / 10;

  return rounded || 0;
}

export const insuranceCasesPercent = state => {
  let accessions = state.accessions || []
  //pending
  let accessionPending = 0;

  //accession total
  let accessionTotal = 0;

  accessions.forEach(element => {
    accessionTotal = accessionTotal + element.Cases.length;
  });

  accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.Status === "Pending") accessionPending++;
    });
  });

  let accessionCategorized = accessionTotal - accessionPending;

  //insurance
  let InsuranceCount = 0;

  accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.BillingType === "Insurance" && item.InsuranceType !== "Not Provided" && item.HospitalStatus !== "Not Provided") {
        InsuranceCount++;
      }
    });
  });

  var percentage = (InsuranceCount / accessionCategorized) * 100;

  var rounded = Math.round(percentage * 10) / 10;

  return rounded || 0;
}

export const directSplitCasesPercent = state => {
  let accessions = state.accessions || []
  //pending
  let accessionPending = 0;

  //accession total
  let accessionTotal = 0;

  accessions.forEach(element => {
    accessionTotal = accessionTotal + element.Cases.length;
  });

  accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.Status === "Pending") accessionPending++;
    });
  });

  let accessionCategorized = accessionTotal - accessionPending;

  //direct / split
  let directSplitCount = 0;

  accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.BillingType === "Direct") directSplitCount++;
      if (item.BillingType === "Split") directSplitCount++;
    });
  });

  var percentage = (directSplitCount / accessionCategorized) * 100;

  var rounded = Math.round(percentage * 10) / 10;

  return rounded || 0;
}

export const completedCasesPercent = state => {
  let accessions = state.accessions || []
  //pending
  let accessionPending = 0;

  //accession total
  let accessionTotal = 0;

  accessions.forEach(element => {
    accessionTotal = accessionTotal + element.Cases.length;
  });

  accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.Status === "Pending") accessionPending++;
    });
  });

  let accessionCategorized = accessionTotal - accessionPending;

  //complete cases details
  let completedCases = 0;

  accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.Status === "Complete") {
        completedCases++
      }
    });
  });

  var percentage = (completedCases / accessionCategorized) * 100;

  var rounded = Math.round(percentage * 10) / 10;

  return rounded || 0;
}

export const incompletedCasesPercent = state => {
  let accessions = state.accessions || []
  //pending
  let accessionPending = 0;

  //accession total
  let accessionTotal = 0;

  accessions.forEach(element => {
    accessionTotal = accessionTotal + element.Cases.length;
  });

  accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.Status === "Pending") accessionPending++;
    });
  });

  let accessionCategorized = accessionTotal - accessionPending;

  //complete cases details
  let incompletedCases = 0;

  accessions.forEach(element => {
    element.Cases.filter(function (item) {
      if (item.Status === "Incomplete") {
        incompletedCases++
      }
    });
  });

  var percentage = (incompletedCases / accessionCategorized) * 100;

  var rounded = Math.round(percentage * 10) / 10;

  return rounded || 0;
}
