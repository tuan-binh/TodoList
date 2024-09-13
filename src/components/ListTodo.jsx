export default function ListTodo({ todo, handleCompleted, handleDelete, viewEdit }) {
  return (
    <ul style={{ width: '300px' }}>
      {todo.map((item) => (
        <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <input
              checked={item.completed}
              type="checkbox"
              onClick={() => handleCompleted(item.id)}
            />
            {item.completed ? <s>{item.task}</s> : <span>{item.task}</span>}
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <i className="fa-regular fa-pen-to-square" onClick={() => viewEdit(item.id)}></i>
            <i className="fa-solid fa-trash" onClick={() => handleDelete(item.id)}></i>
          </div>
        </li>
      ))}
    </ul>
  );
}
