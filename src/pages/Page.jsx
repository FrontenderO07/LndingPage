import styled from "styled-components";
import { device } from "../device/device";

const Page = styled.div`
  width: 100%;
  height: 100dvh;
  /* margin: auto; */
  font-family: "sans-serif";
  @media ${device.mobileS} {
    min-width: 320px;
  }
  @media ${device.mobileM} {
    max-width: 375px;
  }
  @media ${device.mobileL} {
    max-width: 425px;
  }
  @media ${device.tablet} {
    min-width: 768px;
  }
  @media ${device.laptop} {
    min-width: 1024px;
  }
  @media ${device.laptopL} {
    max-width: 1920px;
  }
  @media ${device.desktop} {
    max-width: 2560px;
  }
`;

export default Page;
