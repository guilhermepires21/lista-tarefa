

 
import { AddArea } from './components/AddArea';
import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';



const  App = ( )  =>  {

  const [list, setList] = useState<Item[ ]>([

    { id: 1, name: 'Comprar o pão na padaria', done: false },

    { id: 2, name: 'Comprar um bolo ', done: true },

    { id: 3, name: 'Limpar Casa ', done: false },

   ] ) ;


   const handleAddTask = (taskName:  string) => {
     let newList = [...list];
     newList.push({
       id: list.length + 1,
       name: taskName,
       done: false
     });
     setList(newList);


   }

  return (  
                  
    <C.Container>
      <C.Area>

        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />



        {list.map((item, index)=>(

          <ListItem key={index}  item={item}  />
          

        ))}
      </C.Area>
    </C.Container>

  );
}
export default App;


 