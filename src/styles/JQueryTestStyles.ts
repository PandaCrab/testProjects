import styled from "styled-components"
import { colors } from "../GlobalStyles";

export const Page = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 600px;
    min-height: 800px;
    background-color: ${colors.white};
`;