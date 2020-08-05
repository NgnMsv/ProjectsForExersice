const todos = ['walk'];
const input = prompt('what do you want?');

while (input !== 'quit') {
    if (input === 'list') {
        console.log(todos)
    } else  if (input === 'new') {
        const newTodo = prompt('what do you want to do?');
        todos.push(newTodo);
    }
    input = prompt('what do you want?');
}
console.log('ok you quit the app')