import styled from 'styled-components';

export const IndexMiningContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 0 120px 0;

  div.wrap {
    width: 100%;
    max-width: 768px;
    min-height: 180px;
    border-bottom: 2px dashed black;
    padding: 45px 15px;

    &:last-of-type { border-bottom: none; }

    h2 {
      font-weight: 300;
      font-size: 24px;
      padding: 0 0 30px 0;
    }

    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 1.5;
    }
  }
`;