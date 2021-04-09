
import React from "react";
import styled from "styled-components";

const StyledDiv6 = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 16px;
  margin-bottom: 32px;
`;

const BiggerP = styled.p`
  font-size: 18px;
  line-height: 28px;
`;

/* CartTotal
 *
 * TODO: add component description
 */
const CartTotal = ({ price = '99.99' }) => {
  return (
    <StyledDiv6>
      <BiggerP>Total</BiggerP>
      <h4>€{price}</h4>
    </StyledDiv6>
  );
};

export default CartTotal;
