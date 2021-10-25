import React, {useState, useContext, useEffect} from "react"
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../../context/location.context";


const SearchContainer = styled.View`
  position : absolute;
  top : 2px;
  width : 100%;
  z-index : 1000;
`;

const SearchField = styled(Searchbar)`
padding: ${(props) => props.theme.spaces[0]};
margin: ${(props) => props.theme.spaces[2]};
`;

export const Search = () => {
  const { keyword, onSearch } = useContext(LocationContext)
  const [searchTerm, setSearchTerm] = useState(keyword)
  
  useEffect(() => setSearchTerm(keyword), [keyword])
  
  return(
    <SearchContainer>
      <SearchField
        placeholder="Search By City Name...."
        onSubmitEditing={() => onSearch(searchTerm)}
        value={searchTerm}
        onChangeText={text => setSearchTerm(text) }
        icon="map"
        />
    </SearchContainer>
  )
}