import { CTA } from "../CTA";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Home } from "../Home";
import { LeadCapture } from "../LeadCapture";
import { Services } from "../Services";
import { SocialProof } from "../SocialProof";
import { ChatPopup, MainContainer, SocialLinks } from "./style";
import linkedinImg from "../../assets/linkedin_icon.svg";
import faceImg from "../../assets/face_icon.svg";
import instaImg from "../../assets/insta_icon.svg";
import wppImg from "../../assets/wpp-icon.svg";
import { Sidebar } from "../Sidebar";

export function Main() {
  return (
    <MainContainer>
      <Header />
      <Sidebar />
      <Home />
      <Services />
      <CTA />
      <SocialLinks>
        <nav>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/raul-sigoli-137bb4173/"
            rel="noreferrer"
          >
            <img
              draggable={false}
              width={40}
              height={40}
              src={linkedinImg}
              alt="linkedin"
            />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/raul_sigoli"
            rel="noreferrer"
          >
            <img
              draggable={false}
              width={40}
              height={40}
              src={faceImg}
              alt="facebook"
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/raul_sigoli/"
            rel="noreferrer"
          >
            <img
              draggable={false}
              width={40}
              height={40}
              src={instaImg}
              alt="instagram"
            />
          </a>
        </nav>
      </SocialLinks>
      <ChatPopup>
        <a
          href="http://api.whatsapp.com/send?1=pt_BR&phone=55044991658351"
          target="_blank"
          rel="noreferrer"
        >
          <img draggable={false} src={wppImg} alt="whatsapp" />
        </a>
      </ChatPopup>
      <SocialProof />
      <LeadCapture />
      <Footer />
    </MainContainer>
  );
}
