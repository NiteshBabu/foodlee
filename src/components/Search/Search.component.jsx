import React, {useState, useContext, useEffect} from "react"
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { FavouritesContext } from "../../context/favourites.context";
import { LocationContext } from "../../context/location.context";


const SearchContainer = styled.View`
`;

const SearchField = styled(Searchbar)`
padding: ${(props) => props.theme.spaces[0]};
margin: ${(props) => props.theme.spaces[2]};
`;

export const Search = () => {
  const { keyword, onSearch } = useContext(LocationContext)
  const { toggleFavouritesList } = useContext(FavouritesContext)
  const [searchTerm, setSearchTerm] = useState(keyword)
  const [isHeartIcon, setIsHeartIcon] = useState(true)

  useEffect(() => setSearchTerm(keyword), [keyword])

  return(
    <SearchContainer>
      <SearchField
        placeholder="Search By City Name...."
        onSubmitEditing={() => onSearch(searchTerm)}
        value={searchTerm}
        onChangeText={text => setSearchTerm(text) }
        icon={`${isHeartIcon ? "heart" : "magnify"}`}
        onIconPress={() => {
          setIsHeartIcon(!isHeartIcon)
          toggleFavouritesList()
        }}
      />
    </SearchContainer>
  )
}