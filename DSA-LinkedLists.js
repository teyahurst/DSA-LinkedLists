class _Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    insertFirst(item) {
      this.head = new _Node(item, this.head);
    }
    insertBefore(valBefore, item) {
      //if empty
      if (!this.head) {
        return null;
      }
      if (this.head === null) {
        this.insertFirst(item);
      }
      //if at head
      if (this.head.value === valBefore) {
        let temp = this.head;
        //   console.log(this.head)
        this.head = new _Node(item, temp);
        return;
      }
      // else
      let currNode = this.head;
      let next;
      let previousNode;
      while (currNode.value !== valBefore) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      previousNode.next = new _Node(item, currNode);
    }
    insertAfter(valAfter, item) {
      //if empty
      if (!this.head) {
        return null;
      }
      if (this.head === null) {
        this.insertFirst(item);
        return;
      }
      //if at head
      if (this.head.value === valAfter) {
        let temp = this.head.next;
        this.head.next = new _Node(item, temp);
        return;
      }
      // else
      let currNode = this.head;
      let next = "";
      while (currNode.value !== valAfter) {
        currNode = currNode.next;
      }
      if (currNode === null) {
        this.insertLast(item);
        return;
      }
      next = currNode.next;
      currNode.next = new _Node(item, next);
    }
    insertLast(item) {
      if (this.head === null) {
        this.insertFirst(item);
      } else {
        let currNode = this.head;
        while (currNode.next !== null) {
          currNode = currNode.next;
        }
        currNode.next = new _Node(item, null);
      }
    }
    insertAt(pos, item) {
      if (this.head === null) {
        this.insertFirst(item);
        return;
      } else {
        let currNode = this.head;
        let index = 0;
        while (currNode.next !== null && pos !== index) {
          currNode = currNode.next;
          index++;
        }
  
        const temp = new _Node(item, currNode.next);
        currNode.next = temp;
      }
    }
    find(item) {
      let currNode = this.head;
      if (!this.head) {
        return null;
      }
  
      while (currNode.value !== item) {
        if (currNode.next === null) {
          return null;
        } else {
          currNode = currNode.next;
        }
      }
      return currNode;
    }
    remove(item) {
      let previousNode = this.head;
      let currNode = this.head;
  
      if (!this.head) {
        return null;
      }
      if (this.head.value === item) {
        this.head = this.head.next;
        return;
      }
      while (currNode.value !== item && currNode !== null) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log("Item not found");
        return;
      }
      previousNode.next == currNode.next;
    }
  }
  
  function main() {
    const SLL = new LinkedList();
    SLL.insertLast("Apollo");
    SLL.insertLast("Boomer");
    SLL.insertLast("Helo");
    SLL.insertLast("Husker");
    SLL.insertLast("Starbuck");
    //   console.log(SLL);
    SLL.insertLast("Tauhida");
    SLL.remove("Husker");
    SLL.insertBefore("Boomer", "Athena");
    //   console.log(SLL);
    SLL.insertAfter("Helo", "Hotdog");
    SLL.insertAt(3, "Kat");
  //   console.log();
    SLL.remove("Tauhida");
  
    return SLL;
  }
  
  const SLL = main();
  
  function display(list) {
    let output = "";
    let currNode = list.head;
    while (currNode !== null) {
      output += currNode.value;
      if (currNode.next !== null) {
        output += " -> ";
      }
      currNode = currNode.next;
    }
    return output;
  }
  
  // console.log(display(SLL));
  
  function size(list) {
    let index = 0;
    let currNode = list.head;
    while (currNode !== null) {
      currNode = currNode.next;
      index++;
    }
    return index;
  }
  
  // console.log(size(SLL));
  
  function isEmpty(list) {
    let currNode = list.head;
    if (!currNode) return true;
    return false;
  }
  
  const zapatos = new LinkedList();
  // console.log(isEmpty(zapatos));
  
  function findPrevious(item, list) {
    if (!list.head || list.head === null) {
      return null;
    }
    //if at head
    if (list.head.value === item) {
      return list.head;
    }
    // else
    let currNode = list.head;
    let previousNode;
    while (currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    return previousNode;
  }
  
  // console.log(findPrevious("Hotdog", SLL));
  
  function findLast(list) {
    if (!list.head || list.head === null) {
      return null;
    }
    //if at head
    if (list.head.next === null) {
      return list.head;
    }
    // else
    let currNode = list.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }
  
  // console.log(findLast(SLL));
  
  function reverseList(list) {
    if (!list.head || list.head === null) {
      return null;
    }
    // else
    let currNode = list.head;
    let previousNode = null;
    let temp = currNode;
  
    while (currNode !== null) {
      temp = currNode.next;
      currNode.next = previousNode;
      previousNode = currNode;
      currNode = temp;
    }
    list.head = previousNode;
    return display(list);
  }
  
  // console.log(reverseList(SLL));
  
  function third(list) {
    let index = 0;
    let bounds = size(list);
    let currNode = list.head;
    let previousNode;
    while (currNode !== null && index !== bounds - 3) {
      currNode = currNode.next;
      index++;
    }
    return currNode;
  }
  
  // console.log(third(SLL));
  
  function middle(list) {
    let index = 0;
    let bounds = size(list);
    let currNode = list.head;
    let previousNode;
    while (currNode !== null && index !== Math.floor(bounds / 2)) {
      currNode = currNode.next;
      index++;
    }
    return currNode;
  }
  
  // console.log(middle(SLL));
  
  const CycleList = new LinkedList();
  CycleList.insertLast("A");
  CycleList.insertLast("B");
  CycleList.insertLast("C");
  CycleList.insertLast("D");
  // CycleList.head.next.next = CycleList.head;
  // console.log(display(CycleList));
  
  function cycles(list) {
    if (!list.head || list.head === null) {
      return null;
    }
    let currNode = list.head;
    let tempNode = null;
    while (currNode !== null && currNode.next !== null) {
      tempNode = currNode.next;
      while (tempNode !== null) {
        if (currNode.value === tempNode.value) return "Has cycle.";
        tempNode = tempNode.next;
      }
      currNode = currNode.next;
    }
    return "No cycle here.";
  }
  
  // console.log(cycles(CycleList));
  
  function sort(list) {
    if (!list.head || list.head === null) {
      return null;
    }
    if(list.head.next === null) {
        return list;
    }
    // sort???
    let currNode = list.head;
    let tempNode = null;
    let prevNode = null;
    while (currNode !== null) {
      prevNode = currNode;
      tempNode = currNode.next;
      //  2 -> 4 -> 1 -> 3
      // first find the head
  
      while(tempNode !== null) {
      }
  
      if(currNode !== null)
          currNode = currNode.next;
    }
  
    return display(list);
  }
  
  const sorted = new LinkedList();
  sorted.insertLast(2);
  sorted.insertLast(1);
  // sorted.insertLast(4);
  // sorted.insertLast(3);
  
  
  console.log(sort(sorted));