import { TextTask } from '../text-task/textTask'
import BtnDel from '../btn-del/BtnDel'
import { ContainerTasksStyled } from './container-task'

// eslint-disable-next-line react/prop-types
export const ContainerTasks = ( {text} ) => {
  return (
    <ContainerTasksStyled>
      <TextTask
        text={ text }
      />
      <BtnDel />
    </ContainerTasksStyled>
  )
}

