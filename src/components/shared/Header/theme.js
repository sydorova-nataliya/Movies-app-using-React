import {createGlobalStyle} from "styled-components";
export const darkTheme = {
    body: "#000",
    textColor: "#fff",
    headerBackground:"rgb(27, 1, 27)",
    infoBtnBackground:"white",
    infoBtnColor:"black",
    boxShadow: "0 0 0 7px rgb(45, 13, 72),0 0 0 14px rgba(88, 39, 127, 0.6), 0 0 0 21px rgba(148, 68, 214, 0.4)",
    slickBtnColor:"white",
    slickBtnOpacity:"1",
    sclickBtnActiveColor:"rgb(122, 119, 119)",
  }
  
  export const lightTheme = {
    body: "#fff",
    textColor: "#000",
    infoBtnBackground:"black",
    infoBtnColor:"white",
    headerBackground:"rgb(102, 18, 102)",
    boxShadow: "0 0 0 7px rgb(118, 46, 177), 0 0 0 14px rgba(118, 46, 177, 0.6), 0 0 0 21px rgba(118, 46, 177, 0.4)",
    slickBtnColor:"black",
    slickBtnOpacity:".25",
    sclickBtnActiveColor:"rgb(122, 119, 119)",
  }
  
  export const GlobalStyles = createGlobalStyle`
   body {
        background: ${props => props.theme.body};
        color: ${props => props.theme.textColor};
   }
   .info__btn{
        background: ${props => props.theme.infoBtnBackground};
        color: ${props => props.theme.infoBtnColor};
   }
   .info, .footer{
        background:${props => props.theme.headerBackground};
        box-shadow:${props => props.theme.boxShadow};
   }
   .slick-dots li button:before{
        color:${props => props.theme.slickBtnColor};
        opacity:${props => props.theme.slickBtnOpacity};
   }
   .slick-dots li.slick-active button:before{
        color:${props => props.theme.sclickBtnActiveColor};
   }

  `