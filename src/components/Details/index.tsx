import toast from "react-hot-toast";
import Button from "../Buttons";
import CheckoutCard from "../CheackCard";
import * as Styled from "./styled";
import { mockedProducts } from "../../mock";

const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>

      <Styled.OrderDetailsHeader>
        <h2>Pedido #12</h2>
        <div>
          <Button text="Comer no local" onClick={() => {}} size="small" />
          <Button
            text="P/ Viagem"
            onClick={() => {}}
            size="small"
            variant="disabled"
          />
          <Button
            text="Delivery"
            onClick={() => {}}
            size="small"
            variant="disabled"
          />
        </div>
      </Styled.OrderDetailsHeader>
      <Styled.CheckoutDetailsContainer>
        <Styled.CheckoutDetailsHeader>
          <div>
            <h3>Item</h3>
            <h3>Qtd</h3>
          </div>
          <h3>Preço</h3>
        </Styled.CheckoutDetailsHeader>
        <Styled.CheckoutCardsContainer>
          <CheckoutCard product={mockedProducts[0]} />
          <CheckoutCard product={mockedProducts[1]} />
        </Styled.CheckoutCardsContainer>
      </Styled.CheckoutDetailsContainer>
      <Styled.OrderDetailsFooter>
        <div>
          <p>Desconto</p>
          <h3>R$0.00</h3>
        </div>
        <div>
          <p>Sub total</p>
          <h3>R$0.00</h3>
        </div>
        <Button
          text="Continue para o pagamento"
          onClick={() => toast.error("Sessão em desenvolvimento!")}
          size="x-large"
        />
      </Styled.OrderDetailsFooter>
      
    </Styled.OrderDetailsContainer>
  );
};

export default OrderDetails;
