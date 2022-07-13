import styled from "styled-components"

export const Wrapper = styled.div`

display: flex;
justify-content: space-between;
align-items:center;
border: 1px solid lightblue;
padding-bottom : 20px;


div{
    flex: 1;
    background_color:blue;
}

.information, .buttons{
    display: flex;
    justify-content:space-between;
}

img{
    max-width:90px;
    max-height:90px;
    border-radius: 50%;
    margin-left:20px;
    object-fit:cover;

}

`;