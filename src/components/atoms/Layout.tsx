import styled from 'styled-components';
import { theme } from './theme';
import { media } from './media';

// the containers for layout
// Don't set Margin or Padding this components
type ContainerProps = {
  pTop?: any;
  pBottom?: any;
  pRight?: any;
  pLeft?: any;
  padding?: any;
  width?: any;
  minWidth?: any;
  maxWidth?: any;
  height?: any;
};
export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${props => props.pTop || theme.large};
  padding-bottom: ${props => props.pBottom || theme.large};
  padding-right: ${props => props.pRight || theme.large};
  padding-left: ${props => props.pLeft || theme.large};
  padding: ${props => props.padding};
  width: ${props => props.width};
  min-width: ${props => props.minWidth};
  max-width: ${props => props.maxWidth};
  height: ${props => props.height || '100%'};
`;

type WrapperProps = {
  width?: any;
  minWidth?: any;
  maxWidth?: any;
  height?: any;
};
export const Wrapper = styled.div<WrapperProps>`
  margin-left: auto;
  margin-right: auto;
  width: ${props => props.width};
  min-width: ${props => props.minWidth};
  max-width: ${props => props.maxWidth};
  height: ${props => props.height || '100%'};
`;

type BoxProps = {
  display?: any;
  justify?: any;
  align?: any;
  aligns?: any;
  self?: any;
  grow?: any;
  shrink?: any;
  basis?: any;
  width?: any;
  minWidth?: any;
  maxWidth?: any;
  height?: any;
  minHeight?: any;
  maxHeight?: any;
};
export const Box = styled.div<BoxProps>`
  display: ${props => props.display || 'flex'};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  align-content: ${props => props.aligns};
  align-self: ${props => props.self};
  flex-grow: ${props => props.grow};
  flex-shrink: ${props => props.shrink};
  flex-basis: ${props => props.basis || '100%'};

  width: ${props => props.width || '100%'};
  min-width: ${props => props.minWidth || 'initial'};
  max-width: ${props => props.maxWidth || 'initial'};
  height: ${props => props.height || '100%'};
  min-height: ${props => props.minHeight};
  max-height: ${props => props.maxHeight};

  &.fill {
    width: 100%;
    height: 100%;
  }
  &.vertical {
    flex-direction: column;
  }
  &.horizontal {
    flex-direction: row;
  }
  &.wrap {
    flex-wrap: wrap;
  }
  &.wrap-sm {
    ${media.sm`
      flex-wrap: wrap;
    `}
  }
  &.wrap-md {
    ${media.md`
      flex-wrap: wrap;
    `}
  }
`;

type ImageProps = {
  image?: any;
  bgSize?: any;
  opacity?: any;
};
export const Image = styled(Box)<ImageProps>`
  display: ${props => props.display || 'flex'};
  background-image: url(${props => props.image || null});
  background-size: ${props => props.bgSize || 'cover'};
  background-repeat: no-repeat;
  opacity: ${props => props.opacity || '1'};
  background-color: #ffffff;
  width: ${props => props.width || '100%'};
  height: ${props => props.height};
  background-position: top center;
`;

export const Block = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type SpacingProps = {
  pTop?: any;
  pRight?: any;
  pBottom?: any;
  pLeft?: any;
  mTop?: any;
  mRight?: any;
  mBottom?: any;
  mLeft?: any;
};
export const Spacing = styled.div<SpacingProps>`
  padding-top: ${props => props.pTop};
  padding-right: ${props => props.pRight};
  padding-bottom: ${props => props.pBottom};
  padding-left: ${props => props.pLeft};
  margin-top: ${props => props.mTop};
  margin-right: ${props => props.mRight};
  margin-bottom: ${props => props.mBottom};
  margin-left: ${props => props.mLeft};
`;

export const Divider = styled.hr`
  height: 0;
  margin: 0;
  padding: 0;
  border: 0;
  border-top: 1px solid ${props => props.color || theme.naturalDark};
  &.middle {
    margin-left: ${theme.small};
    margin-right: ${theme.small};
  }
`;
