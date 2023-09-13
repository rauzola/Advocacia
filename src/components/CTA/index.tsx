import { Content, CTAContainer } from "./style";
import ctaImg from "../../assets/CTA.png";
import { DefaultButton } from "../Buttons/Buttons";
import branchBgImg from "../../assets/branch_bg.png";

export function CTA() {
  return (
    <CTAContainer>
      <Content>
        <img
          draggable={false}
          width={496}
          height={680}
          src={ctaImg}
          alt="balança simbolo da justiça"
        />
        <div>
          <h1>Sua justiça é a nossa prioridade</h1>
          <p>
            Garantimos a defesa de seus direitos e podemos ajudá-lo a encontrar
            a solução ideal para o seu problema. Entre em contato conosco para
            obter mais informações.
          </p>
          <a
            href="http://api.whatsapp.com/send?1=pt_BR&phone=55044991658351"
            target="_blank"
            rel="noreferrer"
          >
            <DefaultButton>Entrar em contato</DefaultButton>
          </a>
        </div>
        <img
          draggable={false}
          className="branchBg"
          src={branchBgImg}
          alt="ramo de fundo"
        />
      </Content>
    </CTAContainer>
  );
}
