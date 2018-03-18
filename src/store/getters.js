const moment = require("moment");
export const currentUserName1 = state => state.login.username

export const accessions = state => state.app.accessions_by_date.filter((accession) => {
  let accessionFilter = state.app.accessions_filter

  if (accessionFilter !== undefined) {
    let hasDataFromFilter = false;

    for (var propertyName in accessionFilter) {
      if (propertyName !== "startDate" && propertyName !== "endDate" && propertyName !== "completedDate") {
        if (accessionFilter[propertyName] !== '' && accessionFilter[propertyName] !== "Select One") {
          hasDataFromFilter = true;
          break;
        }
      }
    }

    //search by accessionid
    if (accessionFilter.accessionID !== '' && accessionFilter.accessionID !== undefined) {
      let re = new RegExp(accessionFilter.accessionID, 'g');
      let matches = accession.AccessionID.toString().match(re);

      if (matches !== null) {
        return accession;
      }
    }

    //casenumber
    if (accessionFilter.caseNumber !== '' && accessionFilter.caseNumber !== undefined) {
      let isInCase = false;
      accession.Cases.forEach(item => {
        let re = new RegExp(accessionFilter.caseNumber.toLowerCase(), 'g');
        let matches = item.CaseNumber.toLowerCase().match(re);

        if (matches !== null) {
          isInCase = true;
        }
      })
      if (isInCase) {
        return accession
      }
    }

    //first name
    if (accessionFilter.patientFullName !== '' && accessionFilter.patientFullName !== undefined) {
      let re = new RegExp(accessionFilter.patientFullName.toLowerCase(), 'g');
      let matches = accession.PatientInformation.PatientName.toLowerCase().match(re);

      if (matches !== null) {
        return accession;
      }
    }

    //PatientID
    if (accessionFilter.patientID !== '' &&
      accessionFilter.patientID !== undefined) {
      let re = new RegExp(accessionFilter.patientID.toString(), 'g');
      let matches = accession.PatientInformation.PatientID.toString().match(re);

      if (matches !== null) {
        return accession;
      }
    }

    //Client Name
    if (accessionFilter.clientName !== '' &&
      accessionFilter.clientName !== undefined) {
      let re = new RegExp(accessionFilter.clientName.toLowerCase(), 'g');
      let matches = accession.PatientInformation.ClientName.toLowerCase().match(re);

      if (matches !== null) {
        return accession;
      }
    }

    //Client Number
    if (accessionFilter.clientNumber !== '' &&
      accessionFilter.clientNumber !== undefined) {
      let re = new RegExp(accessionFilter.clientNumber.toLowerCase(), 'g');
      let matches = accession.PatientInformation.Client.toLowerCase().match(re);

      if (matches !== null) {
        return accession;
      }
    }

    //Triage Status
    if (accessionFilter.triageStatus !== '' && accessionFilter.triageStatus !== "Select One") {
      if (accessionFilter.triageStatus === accession.TrigueStatus) {
        return accession;
      }
    }

    //billing type
    if (accessionFilter.billingType !== "" && accessionFilter.billingType !== "Select One") {
      let isInCase = false;
      accession.Cases.forEach(item => {
        if (accessionFilter.billingType === item.BillingType) {
          isInCase = true;
        }
      })
      if (isInCase) {
        return accession
      }
    }

    //Insurance Type
    if (accessionFilter.insuranceType !== "" && accessionFilter.insuranceType !== "Select One") {
      let isInCase = false;
      accession.Cases.forEach(item => {
        if (accessionFilter.insuranceType === item.InsuranceType) {
          isInCase = true;
        }
      })
      if (isInCase) {
        return accession
      }
    }

    //hospital status
    if (accessionFilter.hospitalStatus !== "" && accessionFilter.hospitalStatus !== "Select One") {
      let isInCase = false;
      accession.Cases.forEach(item => {
        if (accessionFilter.hospitalStatus === item.HospitalStatus) {
          isInCase = true;
        }
      })
      if (isInCase) {
        return accession
      }
    }

    if (!hasDataFromFilter) {
      return accession;
    }
  } else {
    return accession
  }
})

export const selectedAccession = state => state.app.selectedAccession
export const accessions_filter = state => state.app.accessions_filter
export const accessions_sorting = state => state.app.accessions_sorting
export const searchText = state => state.app.searchText
export const filterDates = state => state.app.filterDates


export const showBlockUI = state => {
  return state.app.showBlockUI
}
export const loadingImage = state => {
  return state.app.loadingImage
}

export const loadingMessage = state => {
  return state.app.loadingMessage
}
