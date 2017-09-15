/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head  = null;
  var tail = null;

  function getHead(){
    return head;
  }

  function getTail(){
    return tail;
  }

  function add(value){
    newNode = {
      value: value,
      next: null
    }

    if(!head){
      head = newNode;
      tail = newNode;
    }else{
      tail.next = newNode;
      tail = newNode;
    }

    return newNode;
  }

  function get(number){
    var current = head;
    if(number === 0){
      return head;
    }else if(number < 0){
      return false;
    }else{
      for(var i = 0; i < number; i++){
        if(current.next){
          current = current.next;
        }else{
          return false;
        }
      }
    }
    return current;
  }


  function remove(number){
    var previous = get(number-1);
    var target = get(number);
    var newNext = get(number+1);
    if(!target){
      return false;
    }else if(!previous){
      head = newNext;
    }else if(!newNext){
      tail = previous;
      tail.next = null;
    }else{
      previous.next = newNext;
    }
  }

  function insert(value, number){
    var newNode = {
      value: value,
      next: null
    };
    var target = get(number);
    var previous = get(number-1);
    if(!target){
      return false;
    }else if(number === 0){
      newNode.next = head;
      head = newNode;
    }else{
      previous.next = newNode;
      newNode.next = target;
    }
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