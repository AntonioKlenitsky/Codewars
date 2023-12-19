/*Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.*/

//solution

function include(arr, item){
    if (arr.includes(item)){
      return true;
    }
    return false;
  }
  //best practice 
  function include(arr, item){
    return arr.includes(item);
  }