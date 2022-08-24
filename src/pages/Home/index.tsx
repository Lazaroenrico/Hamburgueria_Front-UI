import { DateTime } from "luxon";
import { SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as Styled from "./styled";
import { mockedProducts } from "../../mock";
import ListProducts from "../../components/ListProduct";
import { mockedCategories } from "../../mock";
import { Dispatch, SetStateAction, useState } from "react";
import { Category, Product } from "../../types";
import Details from "../../components/Details";
import { useProducts } from "../../context/product";



const Home = () => {
  const { products } = useProducts();


  const [selectedCategory, setSelectedCategory] = useState<Category>(
    mockedCategories[0]
  );
  
  const filteredProducts: Product[] = products.filter(
    (element) => element.categoryId === selectedCategory.id
  );

  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

  return (
    <Styled.HomeContainer>
      <Menu path="home"/>
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <Styled.TitleContainer>
            <h1>Burguer Lazer</h1>
            <p>{formatedDate}</p>
          </Styled.TitleContainer>

          <Styled.SearchInputContainer>
            <SearchIcon />
            <input placeholder="Procure o produto" />
          </Styled.SearchInputContainer>
          
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategoriesNavigationBar>
            {mockedCategories.map((element) => {
              return (
                <Styled.CategoriesNavigationButton
                  active={element.name === selectedCategory.name}
                  onClick={() => setSelectedCategory(element)}
                >
                  {element.name}
                </Styled.CategoriesNavigationButton>
              );
            })}
          </Styled.CategoriesNavigationBar>
          <Styled.ProductsHeaderContainer>
            <h2>Escolha seu lanche</h2>
            <Styled.TableSelect defaultValue="">
              <option value="" disabled>  
                Selecione a mesa
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Styled.TableSelect>
          </Styled.ProductsHeaderContainer>
          <ListProducts list={filteredProducts} />
        </section>
      </Styled.HomeContentContainer>
      <Details />
    </Styled.HomeContainer>
  );
};

export default Home;
