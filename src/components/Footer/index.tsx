import { FooterContainer, FooterContent } from "./style";
import logoImg from "../../assets/logo_gray.svg";
import linkedinImg from "../../assets/linkedin_icon.svg";
import faceImg from "../../assets/face_icon.svg";
import instaImg from "../../assets/insta_icon.svg";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <img
            draggable={false}
            width={54}
            height={48}
            src={logoImg}
            alt="logomarca antonio"
          />
          <div>
            <p>Raul Sigoli ©</p>
            <p>Advocacia e consultoria jurídica</p>
          </div>
        </div>
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
      </FooterContent>
    </FooterContainer>
  );
}
