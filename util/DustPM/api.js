import fetch from 'node-fetch';


const getPMData = () =>{

   return fetch('http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureSidoLIst' +
  '?serviceKey=umfGiqjtzOMarryKchlVrnqw7%2BGPqeV1bDPWigHtwAFpAB8d5lfQ8TXoBvRDCRecXTrmkbz24APGWQR0kPY3Ow%3D%3D' +
  '&numOfRows=1'+
  '&pageNo=21' +
  '&sidoName=%EC%84%9C%EC%9A%B8&' +
  'searchCondition=DAILY' +
  '&_returnType=json')
.then(data=>data.json())
}

export {getPMData}