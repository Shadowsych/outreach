import styled from 'styled-components';
import { FlexRow, FlexColumn, FlexCenter } from '../../styles/flex';

interface PhotoProps {
  photo: string;
}

interface ProfileProps {
  isProfile: boolean;
}

export const HeaderWrapper = styled(FlexColumn)<PhotoProps>`
  width: 100%;
  height: 350px;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(180deg, rgba(7, 16, 19, 0.5) 0%, rgba(7, 16, 19, 1) 95%), url(${(props) => props.photo});
  background-position: center;
  background-size: cover;
  margin: 0;
  padding: 0;

  & h1 {
    color: ${(props) => props.theme.colors.teritary};
    font-size: 8em;
    line-height: 0;
  }
  & h2 {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 2em;
    line-height: 0;
  }
`;

export const HeaderNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 10px;
  margin: 20px;
  & a {
    font-size: 1.5em;
    padding-right: 30px;
    color: ${(props) => props.theme.colors.teritary};
    & :visited {
      color: ${(props) => props.theme.colors.teritary};
    }
    & :active {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const HeaderContent = styled(FlexRow)<ProfileProps>`
  width: 95%;
  ${(props) =>
    !props.isProfile &&
    `
  align-items: center;
  justify-content: center;`}
`;

// profile headers

export const CircularImgBig = styled.div<PhotoProps>`
  border-radius: 50%;
  min-width: 200px;
  min-height: 200px;
  background: url(${(props) => props.photo});
  background-position: center;
  background-size: cover;
`;

export const ProfileContent = styled(FlexRow)`
  height: auto;
  justify-content: flex-start;
  align-items: center;
  text-align: left;

  & .TextInfo {
    padding-left: 20px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const DashboardVerifiedWrapper = styled(FlexRow)`
  width: 100%;
  height: auto;
  justify-content: flex-start;
  align-items: center;
`;

export const DashboardContent = styled(FlexColumn)`
  width: fit-content;
  align-items: center;
  justify-content: center;
`;
