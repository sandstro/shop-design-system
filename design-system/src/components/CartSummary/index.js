
import React from "react";
import styled from "styled-components";

const Styledh2 = styled.h2`
  margin-bottom: 30px;
`;

const StyledDiv6 = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 16px;
  margin-bottom: 32px;
`;

/* CartSummary
 *
 * TODO: add component description
 */
const CartSummary = ({ subtotal = '95.00', handlingFee = '0.00' }) => {
  return (
    <>
      <Styledh2>Summary</Styledh2>
      <StyledDiv6>
        <p>Subtotal</p>
        <h6>€{subtotal}</h6>
        <p>Estimated Delivery & Handling</p>
        <h6>€{handlingFee}</h6>
      </StyledDiv6>
    </>
  );
};

export default CartSummary;
