import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
}
html{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}
body{
    width: 100%;
    height: 100%;
    background: #050214;
    font-family: 'Inter';

}
.Mui-error{
    color: #ff0058 !important;
}
.MuiInputBase-input-MuiInput-input, .Mui-Input, .MuiInput-root, .Mui-focused{
    color: #fff!important;

    &:before{
        border-bottom: 1px solid #fff!important;
        color: white!important;
    }
    
    &:after{
        color: white!important;
        border-bottom: 1px solid #fff!important;
    }
}

label{
    color: white!important;
    &:before, &:after{
        color: white!important;
    }
}
#root{
    height: 100%;
}
`;
export default Global;
