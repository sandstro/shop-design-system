import React from "react";
import styled from "styled-components";
import { Button, Icon } from "design-system";

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const StyledImage = styled.img`
  width: 48px;
  height: 48px;
`;

const Styledh1 = styled.h1`
  margin-bottom: 40px;
  letter-spacing: -1.6px;
`;

/*
 * TopBar component.
 */
const TopBar = ({ title = 'Default' }) => {
  return (
    <>
      <TopWrapper>
        <StyledImage />
        <Button isOutline>
          <Icon name="menu" />
        </Button>
      </TopWrapper>
      <Styledh1>{title}</Styledh1>
    </>
  );
};

export const Wrapper = styled.div`

`;

export default TopBar;
