import TasksApp from "./component/TasksApp";

import TasksProvider from "./context/TasksProvider";
import AddEditingTaskProvider from "./context/AddEditingTaskProvider";

function App() {
  return (
    <TasksProvider>
      <AddEditingTaskProvider>
        <TasksApp />
      </AddEditingTaskProvider>
    </TasksProvider>
  );
}

export default App;
