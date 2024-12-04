
import { Tittle } from './components/tittle/Tittle';
// import SearchBar from './components/search-bar/searchBar';
// import { BtnAdd } from './components/btn-add/btnAdd'
// import { TextTask } from './components/text-task/textTask'
import { ContainerToDoList } from './components/container-todolist/containerToDoList';
import { BodyContainer } from './components/body-container/body-container'
import { ContainerSearch } from './components/container-search-bar/containerSearch'
import { ContainerTasks } from './components/container-tasks/containerTasks'
import Hr from './components/hr/Hr'
import BtnDelAll from './components/btn-del-all/BtnDelAll'

const App = () => {
  return (
    <BodyContainer>
      <ContainerToDoList>
        <Tittle />
        <ContainerSearch />
        <ContainerTasks text="Tarea 1" />
        <Hr />
        <ContainerTasks text="Tarea 2" />
        <BtnDelAll />
      </ContainerToDoList>
    </BodyContainer>
  );
}

export default App

