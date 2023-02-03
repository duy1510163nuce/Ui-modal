import styled from "@emotion/styled";

interface IBoxProps {
    width?: string;
    margin?:string,
    padding?:string,
    display?:string,
    alignItems?:string,
    columnGap?:string,
    height?:string,
    justifyContent?:string,
    borderRadius?:string,
    marginBottom?:string,
    overflow?:string,
    backgroundColor?:string,
    displayMobileHorizontal?:string,
    MPadding?:string,
    flexDirection?:string,
}

export const Box = styled.div<IBoxProps>`
  width:${(props)=> props.width}
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  column-gap: ${(props) => props.columnGap};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justifyContent};
  border-radius: ${(props) => props.borderRadius};
  margin-bottom:${(props) => props.marginBottom};
  overflow:${(props) => props.overflow};
  @media only screen and (max-width: 400px) {
    display: ${(props) => props.displayMobileHorizontal};
    flex-direction: ${(props) => props.flexDirection};
    padding: ${(props) => props.MPadding};
  }
`;
export const Flex = styled.div<IBoxProps>`
  width:${(props)=> props.width}
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  column-gap: ${(props) => props.columnGap};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justifyContent};
  border-radius: ${(props) => props.borderRadius};
  margin-bottom:${(props) => props.marginBottom};
  overflow:${(props) => props.overflow};
  background-color:${(props) => props.backgroundColor};
  @media only screen and (max-width: 400px) {
    
    flex-direction: column;
  }
`;

interface ITextProps {
    fontSize?:string,
    lineHeight?:string,
    fontWeight?:string,
    whiteSpace?:string,
    marginTop?:string,
    color?:string,
    marginRight?:string,
    TFontSize?:string,
    MFontSize?:string,
}

export const Text = styled.div<ITextProps>`
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.fontWeight};
  white-space: ${(props) => props.whiteSpace};
  margin-top: ${(props) => props.marginTop};
  color: ${(props) => props.color};
  margin-right: ${(props) => props.marginRight};
  @media only screen and (max-width: 820px) {
    font-size:${(props) => props.TFontSize}
  }
  @media only screen and (max-width: 400px) {
    padding: 10px 0;
    font-size:${(props) => props.MFontSize}
  }
`;

interface IImageProps {
  alt?:string,
  src?:string,
  width?:string,
  height?:string,
  paddingTop?:string,
  displayMobileHorizontal?:string,
}

export const Image = styled.img<IImageProps>`
  alt:${(props) => props.alt};
  src:${(props) => props.src};
  width:${(props) => props.width};
  height:${(props) => props.height};
  padding-top:${(props) => props.paddingTop};
  @media only screen and (max-width: 400px) {
    
    display: ${(props) => props.displayMobileHorizontal};
  }
`