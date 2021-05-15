import styled from "@emotion/styled";

export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? 'space-between' : undefined)};
  > * {
    margin:
      0
      ${(props) => typeof props.gap === 'number' ? props.gap + 'rem' : getMarginNumber(props.gap as boolean)}
      0
      0
    ;
  }
`

const getMarginNumber = (gap: boolean) => gap ? '2rem' : undefined
