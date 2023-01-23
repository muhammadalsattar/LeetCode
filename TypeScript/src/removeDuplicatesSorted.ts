import { ListNode } from "./merge-two-sorted-lists"

interface LooseObject {
    [key: string]: any
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let myList = new ListNode()
    myList.next = head
    while(head?.next){
        if(head?.val === head?.next.val){
            head!.next = head?.next.next!
        } else {
            head = head?.next!
        }
    }
    return myList.next;
};