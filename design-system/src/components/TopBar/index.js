import React from "react";
import styled from "styled-components";
import { Button, Icon } from "design-system";
import avatarImg from "../../assets/avatar.png";

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
const TopBar = ({ title = 'Default', src = avatarImg }) => {
  return (
    <>
      <TopWrapper>
        <StyledImage src={src} />
        <Button isOutline>
          <Icon name="menu" />
        </Button>
      </TopWrapper>
      <Styledh1>{title}</Styledh1>
    </>
  );
};

export default TopBar;
