// 顺序结构
//插入一个元素到位置i

let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

function listInsert(arr,index,ele) {
  if(index > arr.length) return false;
  for(let i = arr.length - 1;i>= index;i--){
    arr[i+1] = arr[i]
  }
  arr[index] = ele;
  return arr
}


// 删除某个位置的元素

function listDelete(arr,index){
  if(index > arr.length) return false;
  for(let i = index;i<arr.length -1;i++){
    arr[i] = arr[i+1]
  }
  arr.splice(arr.length -1,1)
  return arr
}