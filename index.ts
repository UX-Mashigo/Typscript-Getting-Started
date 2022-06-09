import axios from "axios";

//creating a variable called url and assigning the json placeholder link to it
const url = "http://jsonplaceholder.typicode.com/todos/1";

//we can now use axios to make a nerrwork request to the above url using http get request and attempt to fetch that json data
axios.get(url);

//to get a notification when the request is received we can chain on the .then() that will be called with the response once we get the res from the API
axios.get(url).then( response => {
  console.log(response.data);  
});

//todo object properties . interfaces in typescript are used to define the structure of objects
interface Todo{
    id: number;
    title: string;
    completed:boolean;
}

//pulling of the id, title and completed
axios.get(url).then(response =>
    {
       
        const  todo=response.data as Todo;
        
        const id= todo.id;
        const title =todo.title;
        const completed =todo.completed;

        logTodo(id,title,completed);
        
    });

    const logTodo = (id: number,title: string,completed: boolean)=>{
        console.log(`
          The Todo with ID : ${id}   
          Has a title of: ${title}
          IS it finished: ${completed}     `);
    }