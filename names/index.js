const list = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");
const getPeopleInCity = function (list) {
  return getFirstNames(list);
};
module.exports = getPeopleInCity;
