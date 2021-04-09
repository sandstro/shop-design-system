
import React from "react";
import styled from "styled-components";
import { Button, Icon } from "design-system";
import { colors } from 'tokens';

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const StyledDiv4 = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  padding: 0;
  border: 0;
  margin: 0 8px;
  &:last-child {
    margin-right: 0;
  }
`;

const StyledBorder = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${colors.secondaryBlack10};
  margin: 0 8px;
`;

/* SectionHeader
 *
 * TODO: add component description
 */
const SectionHeader = ({ title = 'Default' }) => {
  return (
    <StyledDiv3>
      <h4>{title}</h4>

      <StyledDiv4>
        <StyledButton color="transparent">
          <Icon name="viewItem" width={24} height={16} />
        </StyledButton>
        <StyledButton color="transparent">
          <Icon name="viewGrid" width={24} height={16} />
        </StyledButton>
        <StyledBorder />
        <StyledButton color="transparent">
          <Icon name="filter" width={24} height={16} />
        </StyledButton>
      </StyledDiv4>
    </StyledDiv3>
  );
};

export default SectionHeader;
