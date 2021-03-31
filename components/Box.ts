import styled from "styled-components";
import {
  space,
  color,
  SpaceProps,
  ColorProps,
  size,
  SizeProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps
} from "styled-system";

type BoxType = SpaceProps &
  ColorProps &
  SizeProps &
  LayoutProps &
  TypographyProps;
const Box = styled.div<BoxType>`
  ${space}
  ${color}
  ${size}
  ${layout}
  ${typography}
`;

export default Box;
