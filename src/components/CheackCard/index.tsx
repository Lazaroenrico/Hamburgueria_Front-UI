import { Product } from "../../types";
import * as Styled from "./styled";
import { useState } from "react";
import toast from "react-hot-toast";
import { TrashIcon } from "../../assets/icons";
import { StyledInput } from "../../assets/styles/mixins";


interface CheckCardProps {
  product: Product;
}

const CheckCard = ({ product }: CheckCardProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [description, setDescription] = useState<string>("");

  return (
    <Styled.CheckoutCardContainer>
      <Styled.CheckoutCardHeader >
        <img alt={product.name} src={product.image} />
        <div>
          <h5 title={product.name}>{product.name}</h5>
          <p>R${product.price}</p>
        </div>
        <Styled.ProductQuantityInput
          type="number"
          min="1"
          max="100"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <span>R${(quantity * product.price).toFixed(2)}</span>
      </Styled.CheckoutCardHeader>
      <Styled.CheckoutCardFooter>
        <StyledInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Detalhes do produto"
        />
        <Styled.RemoveProductButton
          onClick={() => toast.error("Sessão sendo desenvolvida!")}
        >
          <TrashIcon />
        </Styled.RemoveProductButton>
      </Styled.CheckoutCardFooter>
    </Styled.CheckoutCardContainer>
  );
};

export default CheckCard;
