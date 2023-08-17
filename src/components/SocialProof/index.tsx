import {
  CardContainer,
  Content,
  SocialProofCard,
  SocialProofContainer,
} from './style'
import commentImg from '../../assets/comment_icon.svg'
import { DefaultButton } from '../Buttons/Buttons'
import branchBgImg from '../../assets/social_proof_branch.png'

export function SocialProof() {
  return (
    <SocialProofContainer id="depoimentos">
      <Content>
        <h1>Depoimentos de nossos clientes</h1>
        <p>
          Muitos clientes estão felizes em trabalhar conosco e estão apreciando
          nosso trabalho.{' '}
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
        <SocialProofCard>
          <div className="header">
            <p className="name">Lucas Vieira</p>
            <img src={commentImg} alt="comentario" />
          </div>
          <p className="content">
            O advogado Antônio Júnior foi um recurso inestimável quando se
            tratava de proteger meus direitos no tribunal. Sua atenção aos
            detalhes e conhecimento das leis são insuperáveis. Eu a recomendaria
            muito.
          </p>
        </SocialProofCard>
        <SocialProofCard className="currentCard">
          <div className="header">
            <p className="name">Lucas Vieira</p>
            <img src={commentImg} alt="comentario" />
          </div>
          <p className="content">
            O advogado Antônio Júnior foi um recurso inestimável quando se
            tratava de proteger meus direitos no tribunal. Sua atenção aos
            detalhes e conhecimento das leis são insuperáveis. Eu a recomendaria
            muito.
          </p>
        </SocialProofCard>
        <SocialProofCard>
          <div className="header">
            <p className="name">Lucas Vieira</p>
            <img src={commentImg} alt="comentario" />
          </div>
          <p className="content">
            O advogado Antônio Júnior foi um recurso inestimável quando se
            tratava de proteger meus direitos no tribunal. Sua atenção aos
            detalhes e conhecimento das leis são insuperáveis. Eu a recomendaria
            muito.
          </p>
        </SocialProofCard>
      </CardContainer>

      <img className="branchImg" src={branchBgImg} alt="ramo defundo" />
    </SocialProofContainer>
  )
}
