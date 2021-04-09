
import React from "react";
import styled from "styled-components";
import TopBarDetail from "../TopBarDetail";
import Button from "../Button";
import { colors } from "tokens";
import imgHeart from "../../assets/heart.png";
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

/* ProductDetail
 *
 * Detail of the product
 */
const ProductDetail = ({ header='Header', productTitle = 'ProductTitle', productDescription = 'ProductDescription', price = '95.00', buttonDescription = 'Add to cart', src = item1Img }) => {
  return (
  <StyledDiv6>
      <TopBarDetail title={header}></TopBarDetail>
      <StyledImg src={src} alt="" />
      <p>{productTitle}</p>
      <h4>{productDescription}</h4>
      <StyledP>€{price}</StyledP>
      <Button label={buttonDescription} color={colors.primaryOrange100}></Button>
    </StyledDiv6>
  );
};

export const StyledProductDetail = styled.div;

export default ProductDetail;
