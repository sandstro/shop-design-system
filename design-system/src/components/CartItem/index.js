
import React from "react";
import styled from "styled-components";
import item1Img from "../../assets/item1.png";

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledDiv4 = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: center;
  margin-left: 16px;
  align-content: flex-start;
`;

const Styledh6 = styled.h6`
  max-width: 58%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right: auto;
`;

const Styledh62 = styled.h6`
  font-weight: 700;
`;
const StyledP = styled.p`
  opacity: 0.6;
`;

const StyledImg = styled.img`
  max-width: 100%;
  width: 96px;
  height: 100px;
`;

/* CartItem
 *
 * TODO: add component description
 */
const CartItem = ({ title = 'Nike Air Force 1 \'0', price = '95.00', description = 'Men\'s Shoe, Black', src = item1Img }) => {
  return (
    <StyledDiv3>
      <StyledImg src={src} alt="" />
      <StyledDiv4>
        <Styledh6>{title}</Styledh6>
        <Styledh62>€{price}</Styledh62>
        <StyledP>{description}</StyledP>
      </StyledDiv4>
    </StyledDiv3>
  );
};

export default CartItem;
