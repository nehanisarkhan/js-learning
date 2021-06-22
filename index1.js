function quickCheck(arr, elem) {
    for(let i=0; i<arr.length;i++){
  if(arr.indexOf(elem) != -1){
    return true;
  }else{
    return false;
  }
    
  }
  }
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));