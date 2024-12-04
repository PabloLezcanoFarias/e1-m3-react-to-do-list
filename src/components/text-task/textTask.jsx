
import { TextTaskStyled } from './text-task' 

// eslint-disable-next-line react/prop-types
export const TextTask = ({ text }) => {
  return (
    <TextTaskStyled>
      {text}
    </TextTaskStyled>
  )
}

