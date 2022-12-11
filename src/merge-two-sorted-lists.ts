class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let output: ListNode = new ListNode();
    let nextNode: ListNode = output
    while(list1 && list2){
        if(list1?.val! < list2?.val!){
                nextNode.next = list1
                list1 = list1?.next!
        } else {
                nextNode.next = list2
                list2 = list2?.next!
        }
        nextNode = nextNode?.next!
    }
    if(list1) nextNode.next = list1
    if(list2) nextNode.next = list2
    return output.next;
};

