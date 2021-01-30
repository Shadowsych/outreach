import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexCenter = styled(FlexRow)`
  align-items: center;
  justify-content: center;
`;
