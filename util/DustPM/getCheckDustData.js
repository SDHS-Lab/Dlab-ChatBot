import { getPMData } from './api'

const getCheckDustData = async () => {

  let data = getPMData().then((result) => {
    let resultData = [];
    resultData.push(getPM10Data(parseInt(result['list'][0]["pm10Value"])))
    resultData.push(getPM25Data(parseInt(result['list'][0]["pm25Value"])))

    return resultData;
  })
  return await data

}

const getPM10Data = (pm10) =>{
  let pm10_result = {};
  if(pm10>0 && pm10 <31){
      pm10_result['title'] = "미세먼지 상태 : 좋음";
      pm10_result['description'] = "남산가기 좋은 상태에요!";

  }else if(pm10 > 31 && pm10<81){

    pm10_result['title'] = "미세먼지 상태 : 보통";
    pm10_result['description'] = "주의 할 필요가 있어보여요!";


  }else if (pm10 > 81 && pm10 <100) {

    pm10_result['title'] = "미세먼지 상태 : 나쁨";
    pm10_result['description'] = "마스크를 써야해요!";

  }else{

    pm10_result['title'] = "미세먼지 상태 : 매우 나쁨";
    pm10_result['description'] = "외부 활동을 삼가야해요!!";

  }
  return pm10_result;
}
const getPM25Data = (pm25) =>{
  let pm25_result = {};

  if(pm25>0 && pm25 <16){

    pm25_result['title'] = "초미세먼지 상태 : 좋음";
    pm25_result['description'] = "남산가기 좋은 상태에요!";

  }else if(pm25 > 16 && pm25<36){

    pm25_result['title'] = "초미세먼지 상태 : 보통";
    pm25_result['description'] = "주의 할 필요가 있어보여요!";


  }else if (pm25 > 36 && pm25 <75) {

    pm25_result['title'] = "초미세먼지 상태 : 나쁨";
    pm25_result['description'] = "마스크를 써야해요!";

  }else{

    pm25_result['title'] = "초미세먼지 상태 : 매우 나쁨";
    pm25_result['description'] = "외부 활동을 삼가야해요!!";

  }
  return pm25_result;
}



export {getCheckDustData}