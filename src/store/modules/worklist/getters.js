const moment = require("moment");

export const worklist_data = state => state.worklist_data

export const worklist_filter = state => state.worklist_filter

export const worklist_data_filtered = state => state.worklist_data.filter((accession) => {
  if (state.worklist_filter !== undefined) {
    let hasDataFromFilter = false;

    for (var propertyName in state.worklist_filter) {
      if (state.worklist_filter[propertyName] !== '' && state.worklist_filter[propertyName] !== "Select One") {
        hasDataFromFilter = true;
        break;
      }
    }

    let accessionFilter = state.worklist_filter;
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
