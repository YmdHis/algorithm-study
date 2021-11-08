let arr=[3,44,38,5,47,15,36,5,26,27,2,46,4,19,50,48];

function selectionSort(arr){
  let len = arr.length;
  for(let i = 0;i<len;i++){
    let minIndex = i;
    for(let j = i+1;j<len - i;j++){
      if(arr[j]<arr[minIndex]){
        minIndex = j
      }
    }
    [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
  }
  return arr
}

console.log(selectionSort(arr))
