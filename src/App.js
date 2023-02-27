
  import { Button, Flex, Heading,  Input,    } from "@chakra-ui/react";
import { useState } from "react";
import TaskItem from "./TaskItem";



function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {
    id: 1,  
    title:"Learn Python",
    complete: false,
    
  },
  {
    id: 2,
    title:"Learn JavaScripts",
    complete: false,
    
  },
  
]);

const onChange = (event) => {
  setInput(event.target.value);
};

const onSubmit = (event) => {
  event.preventDefault();
  const newTodos = [...todos, {
     id: Math.random(), title: input, complete: false
     }
    ]
  setTodos(newTodos);
  setInput("");
};

const onToggle = (id) => {
  
  
 const updatedTodos = todos.map((todo) => {

  if (todo.id == id) {
    return {
      ...todo,
      complete: !todo.complete,
    };
  }
  return todo;
 });

 setTodos(updatedTodos);
     
};

const onDelete = (id) => {
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  setTodos(updatedTodos);
};






// edit 



  return (
  <Flex
  as="form"
  w="full"
  maxW="2xl"
   h="100vh"
    alignItems="center" 
    flexDirection="column"
    mx="auto"
    onSubmit={onSubmit}
    >

    <Heading mt="4">My-App</Heading>
     <Input mt="4"  placeholder="Enter a task.." value={input} onChange={onChange} />
     <Button type="submit" mt="2" w="full" >
      Enter
      </Button>
      <Flex flexDirection="column" 
      className="list-container" 
      w="full" 
      mt="6"
      >
         {todos.map((todo) =>(
         <TaskItem 
         key={todo.id} 
         title={todo.title} 
         complete={todo.complete} 
         onToggle={onToggle} 
         id={todo.id}
         onDelete={onDelete} 
         />
         ))}
      </Flex>
  </Flex>
  );
}

export default App;
