import { Queue } from "./queue";
import { Stack } from "./stack";

const queue = new Queue<string>();
queue.enqueue("one");
queue.enqueue("two");
console.log(queue);
console.log(queue.dequeue());

const stack = new Stack<string>();
stack.push("one");
stack.push("two");
console.log(stack);
console.log(stack.pop());
