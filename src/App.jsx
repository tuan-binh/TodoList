import { useEffect, useRef, useState } from 'react';

import FormTodo from './components/FormTodo';
import ListTodo from './components/ListTodo';

function App() {
  const index = useRef();

  const [todo, setTodo] = useState(() => JSON.parse(localStorage.getItem('todo')) || []);

  const [edit, setEdit] = useState(null);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      task: e.target.todo.value,
      completed: false,
    };
    setTodo([newTodo, ...todo]);
    e.target.todo.value = '';
  };

  // chức năng completed
  const handleCompleted = (id) => {
    console.log(id);

    // find -> phần tử || findIndex -> index

    const indexUpdate = todo.findIndex((item) => item.id === id);
    if (indexUpdate !== -1) {
      // sao chép lại todo
      const newTodo = [...todo];
      // thao tác trên thằng mới là newTodo
      newTodo[indexUpdate].completed = !newTodo[indexUpdate].completed;
      // set lại todo = newTodo
      setTodo(newTodo);
    }
  };

  // chức năng xóa'
  const handleDelete = (id) => {
    const indexDelete = todo.findIndex((item) => item.id === id);
    if (indexDelete !== -1) {
      const newTodo = [...todo];
      newTodo.splice(indexDelete, 1);
      setTodo(newTodo);
    }
  };

  // chức năng view edit
  const viewEdit = (id) => {
    const indexUpdate = todo.findIndex((item) => item.id === id);
    if (indexUpdate !== -1) {
      index.current = indexUpdate;
      setEdit(todo[indexUpdate]);
    }
  };

  // chức năng bấm nút update cập nhật lại mảng
  const handleEditTodo = (e) => {
    e.preventDefault();

    const newTask = e.target.todo.value;

    const newTodo = [...todo];
    console.log(index.current);
    newTodo[index.current] = { ...newTodo[index.current], task: newTask };
    setTodo(newTodo);
    setEdit(null);
    e.target.todo.value = '';
  };

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <FormTodo handleAddTodo={handleAddTodo} handleEditTodo={handleEditTodo} edit={edit} />
      <ListTodo
        todo={todo}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        viewEdit={viewEdit}
      />
    </>
  );
}

export default App;
