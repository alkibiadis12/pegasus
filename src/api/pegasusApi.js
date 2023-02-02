import axios from 'axios';

const pegasusApi = axios.create({
  baseURL: 'http://10.8.0.20:1883/pegasus',
});

export const getPorts = async () => {
  const response = await pegasusApi.get('/ports');
  return response.data;
};

export const getRoutes = async () => {
  const response = await pegasusApi.get('/routes');
  return response.data;
};

export const getAges = async () => {
  const response = await pegasusApi.get('/ages');
  return response.data;
};

//Body
// {
//   "cruise_id" : 4,
//   "date" : "2023-01-30"
// }
export const getRouteAnalysis = async obj => {
  const response = await pegasusApi.post('/dates', obj);
  return response.data;
};

//=============================
//Body
// {
//   "cruise_id" : 4,
//   "date" : "2023-01-30",
//   "time" : "08:00"
// }

export const getAvailability = async obj => {
  const response = await pegasusApi.post('/availability', obj);
  return response.data;
};

//=============================
//Body
// {
//   "cruise_id": 4,
//   "date": "2023-01-30",
//   "time": "08:00",
//   "passengers": [
//       {
//           "passengerClass": 1,
//           "passengerType": "AD"
//       },
//       {
//           "passengerClass": 1,
//           "passengerType": "AD"
//       }
//   ],
//   "vessel": "MANTALENA"
// }

export const getPricing = async obj => {
  const response = await pegasusApi.post('/pricing', obj);
  return response.data;
};

//=============================
//Body
// {
//   "cruise_id": 4,
//   "date": "2023-01-30",
//   "time": "08:00",
//   "vessel": "MANTALENA"
// }

export const getDiscounts = async obj => {
  const response = await pegasusApi.post('/discounts', obj);
  return response.data;
};
