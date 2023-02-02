import styled from "@emotion/styled";

interface ICssPrototype {
  pd : string
  mr : string
  bg : string
  boxShadow : string
}

interface ITextProps extends ICssPrototype {
  fontSize?: string
  color?: string
  fontWeight?: string
}

// export const Text = styled.p(
//   (props:ITextProps)=>({
//         ...props,
//     }),
  
  
// )
    
export const Texts = (props:ITextProps) =>{
    
 
}



interface IBoxProps extends ICssPrototype {

}

export const Box = () => {

}

interface IImageProps extends ICssPrototype {
  src : string
  alt : string
  width: string
  height:string
  paddingTop:string

}

export const Image = styled.img(
  (props:IImageProps)=>({
        ...props,
    })
)