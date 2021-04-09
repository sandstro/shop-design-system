
import React from "react";
import styled from "styled-components";
import { colors } from 'tokens';

const StyledDiv1 = styled.div`
  padding: 64px 40px 40px 40px;
  background-color: ${colors.primaryOrange10};
`;

/* TopContainer
 *
 * TODO: add component description
 */
const TopContainer = ({ children }) => {
  return <StyledDiv1>{children}</StyledDiv1>;
};

export default TopContainer;
