
import React from "react";
import styled from "styled-components";
import { colors } from 'tokens';

const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.secondaryBlack10};
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
