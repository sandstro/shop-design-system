import React from "react";
import styled from "styled-components";
import { Button, Icon } from "design-system";

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const StyledDiv3 = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

/*
 * TopBarDetail component.
 */
const TopBarDetail = ({ title = 'Default', rightIcon }) => {
  return (
    <>
      <TopWrapper>
        <Button isOutline>
          <Icon name="arrowBack" />
        </Button>
        <StyledDiv3>
          <h4>{title}</h4>
        </StyledDiv3>
        {rightIcon != null && rightIcon.length && (
          <Button isIcon color="#fff">
            <Icon name={rightIcon} />
          </Button>
        )}
      </TopWrapper>
    </>
  );
};

export default TopBarDetail;
