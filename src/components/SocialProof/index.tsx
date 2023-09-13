import { useMemo } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import commentImg from "../../assets/comment_icon.svg";
import branchBgImg from "../../assets/social_proof_branch.png";
import { DefaultButton } from "../Buttons/Buttons";
import {
  CardContainer,
  Content,
  SocialProofCard,
  SocialProofContainer,
} from "./style";

export function SocialProof() {
  const items = useMemo(
    () => [
      <div className="item" data-value="1">
        <SocialProofCard>
          <div className="header">
            <p className="name">Raul Sigoli</p>
            <img draggable={false} src={commentImg} alt="comentario" />
          </div>
          <p className="content">
            1111 teste de Depoimentos - O advogado ...... foi um recurso
            inestimável quando se tratava de proteger meus direitos no tribunal.
            Sua atenção aos detalhes e conhecimento das leis são insuperáveis.
            Eu a recomendaria muito.
          </p>
        </SocialProofCard>
      </div>,
      <div className="item" data-value="2">
        <SocialProofCard>
          <div className="header">
            <p className="name">Raul Sigoli</p>
            <img draggable={false} src={commentImg} alt="comentario" />
          </div>
          <p className="content">
            2222 teste de Depoimentos - O advogado ....... foi um recurso
            inestimável quando se tratava de proteger meus direitos no tribunal.
            Sua atenção aos detalhes e conhecimento das leis são insuperáveis.
            Eu a recomendaria muito.
          </p>
        </SocialProofCard>
      </div>,
      <div className="item" data-value="3">
        <SocialProofCard>
          <div className="header">
            <p className="name">Raul Sigoli</p>
            <img draggable={false} src={commentImg} alt="comentario" />
          </div>
          <p className="content">
            3333 teste de Depoimentos - O advogado ...... foi um recurso
            inestimável quando se tratava de proteger meus direitos no tribunal.
            Sua atenção aos detalhes e conhecimento das leis são insuperáveis.
            Eu a recomendaria muito.
          </p>
        </SocialProofCard>
      </div>,
      <div className="item" data-value="4">
        <SocialProofCard>
          <div className="header">
            <p className="name">Raul Sigoli</p>
            <img draggable={false} src={commentImg} alt="comentario" />
          </div>
          <p className="content">
            4444 teste de Depoimentos - Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eaque, suscipit, voluptatem quia expedita
            consequuntur corrupti nobis libero veniam temporibus deleniti
            voluptatibus, iste eligendi est beatae esse odio. Dolores, ut
            temporibus.
          </p>
        </SocialProofCard>
      </div>,
      <div className="item" data-value="5">
        <SocialProofCard>
          <div className="header">
            <p className="name">Raul Sigoli</p>
            <img draggable={false} src={commentImg} alt="comentario" />
          </div>
          <p className="content">
            5555 teste de Depoimentos - Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugit, autem. Debitis consectetur impedit eaque,
            quibusdam, eos sed excepturi quod molestias cupiditate hic natus?
            Eaque consequuntur hic, maiores aperiam eius iste.
          </p>
        </SocialProofCard>
      </div>,
    ],
    []
  );

  const responsive = useMemo(
    () => ({
      0: { items: 1 },
      568: { items: 2 },
      1024: { items: 2 },
    }),
    []
  );

  return (
    <SocialProofContainer id="depoimentos">
      <Content>
        <h1>Depoimentos de nossos clientes</h1>
        <p>
          Muitos clientes estão felizes em trabalhar conosco e estão apreciando
          nosso trabalho.
        </p>
        <a
          href="http://api.whatsapp.com/send?1=pt_BR&phone=55044991658351"
          target="_blank"
          rel="noreferrer"
        >
          <DefaultButton>Fale conosco</DefaultButton>
        </a>
      </Content>

      <CardContainer>
        <AliceCarousel
          key="carousel"
          mouseTracking
          autoPlay
          animationDuration={6000}
          disableButtonsControls
          items={items}
          infinite
          responsive={responsive}
        />
      </CardContainer>

      <img
        draggable={false}
        className="branchImg"
        src={branchBgImg}
        alt="ramo defundo"
      />
    </SocialProofContainer>
  );
}
