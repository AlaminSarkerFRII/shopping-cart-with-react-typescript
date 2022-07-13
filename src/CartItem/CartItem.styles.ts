import styled from "styled-components"

export const Wrapper = styled.div`

display: flex;
justify-content: space-between;
border: 1px solid lightblue;
paddign-bottom : 20px;


div{
    flex: 1;
}

.information, .buttons{
    display: flex;
    justify-content:space-between;
}

img{
    max-width:80px;
    margin-left:40px;
    object-fit:cover;
}

`;