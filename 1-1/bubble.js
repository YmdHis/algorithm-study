
let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
function selectionSort(arr) {
  let len = arr.length;
  if(arr.length < 2) return arr;
  for(let i = 0;i<len;i++){
    for(let j = 0;j<len-1-i;j++){
      if(arr[j] > arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr;
}

function bubbleSortNext(arr) {
  let len  = arr.length;
  let i = len - 1;
  while(i > 0){
    let pos = 0;
    let over = true;
    for(let j = 0; j < i; j++){
      if(arr[j] > arr[j+1]){
        over = false;
        pos = j;
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
    if(over){
      console.log('over');
      return arr;
    }
    i = pos
  }
  return arr;
}




let startDate = +new Date()

console.log(bubbleSortNext(arr))

let endDate = +new Date()

console.log("1、耗时间(ms):",endDate - startDate)