
import SearchBar from '../search-bar/searchBar'
import { BtnAdd } from '../btn-add/btnAdd'
import { ContainerSearchBarStyled  } from './container-search-bar'

export const ContainerSearch = () => {
  return (
    <ContainerSearchBarStyled>
      <SearchBar />
      <BtnAdd/>
    </ContainerSearchBarStyled>
  )
}

