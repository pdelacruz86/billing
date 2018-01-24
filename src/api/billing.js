import myAPI from './resources'
import config from '../config'

export default {
  getAll: function () {
    return myAPI.get(config.api_root + config.api_root_path + '/cases')
      .then(function (response) {
        return response
      })
  },
  getById: function(id){
  	return myAPI.get(config.api_root + config.api_root_path + '/campaings/' + id)
      .then(function (response) {
        return response
      })
  },
  update: function(campaing){
    
    return myAPI.put(config.api_root + config.api_root_path + '/campaings/:campaing', campaing).
                  then(function(response){
                    return response
                  })
  },
  create : function(campaing, img1, img2, img3, img4){
    campaing._300x250Image = (img1 === undefined) ? {} : img1;
    campaing._320x50Image = (img2 === undefined) ? {} : img2;
    campaing._300x250Tag = img3;
    campaing._320x50Tag = img4;

    return myAPI.post(config.api_root + config.api_root_path + '/campaings', campaing).
                  then(function(response){
                    return response
                  })
  },
  createFromCeltra: function(campaing){
    return myAPI.post(config.api_root + config.api_root_path + '/campaings/celtra', campaing).
                  then(function(response){
                    return response
                  })
  },
  getAllFromCeltra: function() {
    debugger;
     return myAPI.get(config.api_root + config.api_root_path + '/scrapeCampaings')
      .then(function (response) {
        return response
      })
  },
  getDetailsByIdFromCeltra: function(id) {
    debugger;
     return myAPI.get(config.api_root + config.api_root_path + '/scrapeCampaings/' + id)
      .then(function (response) {
        return response
      })
  }
}