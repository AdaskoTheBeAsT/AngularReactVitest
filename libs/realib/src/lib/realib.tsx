import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface RealibProps {}

const StyledRealib = styled.div`
  color: pink;
`;

export function Realib(props: RealibProps) {
  return (
    <StyledRealib>
      <h1>Welcome to Realib!</h1>
    </StyledRealib>
  );
}

export default Realib;
