import MockData from "../../Data/Data"

export const fakeServer = pageNo =>
  new Promise((resolve, reject) => {
    if(!MockData[pageNo]){
      resolve('No Data')
    }
    let newArr=[...MockData[pageNo]];
    setTimeout(() => {
      resolve(newArr);
    }, 1000);
  });