
import React from "react";
import styled from "styled-components";

const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 32px 0;
`;

/* CartSeparator
 *
 * TODO: add component description
 */
const CartSeparator = (props) => {
  return (
    <StyledBorder />
  );
};

export default CartSeparator;
