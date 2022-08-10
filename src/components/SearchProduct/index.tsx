import * as Styled from "./styled";

interface SearchProducts {
  value: string;
  handleSearchValue: (e: any) => void;
}

const SearchProducts = (props: SearchProducts) => {
  return (
    <Styled.Search>
      <Styled.SearchInput type="text" 
      placeholder="Procure pelos produtos"
      value={props.value}
      onChange={props.handleSearchValue}
      />
    </Styled.Search>
  );
};

export default SearchProducts;
