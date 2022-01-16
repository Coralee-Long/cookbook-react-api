import styled from "styled-components";

export const TitleXL = styled.h1`
  color: rgba(238, 238, 238, 0.9);
  font-size: 5rem;
  ${({ dark }) =>
    dark &&
    `
color: rgba(23, 23, 23, 0.8)
`}
`;
export const TitleL = styled.h2`
  color: rgba(238, 238, 238, 1);
  font-size: 4rem;
  text-shadow: 2px 2px 8px rgba(23, 23, 23, 0.8);
  ${({ dark }) =>
    dark &&
    `
color: rgba(23, 23, 23, 0.8)
`}
`;
export const TitleM = styled.h3`
  color: rgba(238, 238, 238, 0.9);
  font-size: 3rem;
  ${({ dark }) =>
    dark &&
    `
color: rgba(23, 23, 23, 0.8)
`}
`;
export const TitleS = styled.h4`
  color: rgba(238, 238, 238, 0.9);
  font-size: 2rem;
  margin-bottom: 0;
  ${({ dark }) =>
    dark &&
    `
color: rgba(23, 23, 23, 0.8)
`}
`;
export const TitleSS = styled.h4`
  color: rgba(238, 238, 238, 0.9);
  font-size: 1.7rem;
  margin-bottom: 0;
  ${({ dark }) =>
    dark &&
    `
color: rgba(23, 23, 23, 0.8)
`}
`;
export const TitleXS = styled.h5`
  color: rgba(238, 238, 238, 0.9);
  font-size: 1.5rem;
  }
  ${({ dark }) =>
    dark &&
    `
color: rgba(23, 23, 23, 0.8)
`}
`;

export const TitleXXS = styled.h6`
  color: rgba(238, 238, 238, 0.9);
  font-size: 0.7rem;

  ${({ dark }) =>
    dark &&
    `
color: rgba(23, 23, 23, 0.8)
`}
`;

export const TextMain = styled.div`
  color: rgba(238, 238, 238, 0.9);
  font-size: 1rem;
  font-weight: bold;

  ${({ dark }) =>
    dark &&
    `
color: rgba(23, 23, 23, 0.8)
`}
`;

export const TextSecondary = styled.div`
  color: rgba(238, 238, 238, 0.7);
  font-size: 1rem;

  ${({ dark }) =>
    dark &&
    `
color: rgba(23, 23, 23, 0.8)
`}
`;

const Styles = () => {
  return <div></div>;
};

export default Styles;
