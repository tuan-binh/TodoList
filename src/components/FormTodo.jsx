import { useEffect, useState } from 'react';

export default function FormTodo({ handleAddTodo, handleEditTodo, edit }) {
  // chuyển đổi giữa 2 form add hoặc edit

  const [task, setTask] = useState('');

  useEffect(() => {
    if (edit) {
      setTask(edit.task);
    }
  }, [edit]);

  return (
    <>
      {edit ? (
        <form action="" onSubmit={handleEditTodo}>
          <input type="text" name="todo" onChange={(e) => setTask(e.target.value)} value={task} />
          <button>UPDATE</button>
        </form>
      ) : (
        <form action="" onSubmit={handleAddTodo}>
          <input type="text" name="todo" />
          <button>ADD</button>
        </form>
      )}
    </>
  );
}
