fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

async function getTodos() {
  await fetch("https://jsonplaceholder.typicode.com/todos/1");
}
