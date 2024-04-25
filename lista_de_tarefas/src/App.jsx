import React, { useState } from 'react';
import { Container, Input, StyledButton, TasksList, TaskItem, TaskCheckbox, InputContainer } from './styles';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  

  const handleAddTask = () => { //função para adicionar tarefas
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleInputChange = (e) => { //função para registrar o input
    setNewTask(e.target.value);
  };

  const handleToggleTask = (index) => { //função para atualizar tarefa como concluida ou não
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <h1>Lista de Tarefas</h1>
      <InputContainer>
        <Input
          value={newTask}
          onChange={handleInputChange}
          placeholder="Adicionar nova tarefa"
        />
        <StyledButton label="Adicionar" icon="pi pi-check" onClick={handleAddTask} />
      </InputContainer>
      <TasksList>
        {tasks.map((task, index) => (
          <TaskItem key={index}>
            <TaskCheckbox
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(index)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
          </TaskItem>
        ))}
      </TasksList>
    </Container>
  );
}

export default App;
