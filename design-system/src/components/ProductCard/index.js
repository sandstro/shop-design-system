
import React from "react";
import styled from "styled-components";
import item1Img from "../../assets/item1.png";

const StyledDiv6 = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImg = styled.img`
  max-width: 100%;
  margin-bottom: 16px;
`;

const StyledP = styled.p`
  color: #f15223;
  font-weight: 700;
  margin-top: 8px;
`;

/* ProductCard
 *
 * TODO: add component description
 */
const ProductCard = ({ productTitle = 'Nike Air Force 1 \'07', price = '95.00', src = item1Img }) => {
  return (
    <StyledDiv6>
      <StyledImg src={src} alt="" />
      <h4>{productTitle}</h4>
      <StyledP>€{price}</StyledP>
    </StyledDiv6>
  );
};

export default ProductCard;
