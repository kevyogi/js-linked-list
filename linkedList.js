/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head  = null;
  var temp = null;
  var tail = null;

  function getHead(){
    return head;
  }

  function getTail(){
    return tail;
  }

  function add(value){
    test = {
      value: value,
      next: null
    }

    if(head === null){
      head = test;
      tail = test;
    }else{
      tail.next = test;
      tail = test;
    }

    return test;
  }

  function get(number){
    var test1 = head;
    for(var i = 0; i < number; i++){
      if(test1.next){
        test1 = test1.next;
      }else{
        return false;
      }
    }
    return test1;
  }


  function remove(number){

  }

  function insert(value, number){

  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  }
}