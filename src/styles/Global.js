import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
}
body{
    width: 100vw;
    height: 100vh;
    /* background: #050214; */
    font-family: 'Inter';

}
/* .Mui-error{
    color: #ff0058 !important;
} */
`;
export default Global;
