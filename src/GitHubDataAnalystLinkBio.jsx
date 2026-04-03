import { ArrowUpRight, Briefcase, FolderKanban, Wrench } from "lucide-react";
import "./GitHubDataAnalystLinkBio.css";
import profileImage from "./assets/paulo-profile-v2.png";
import linkedinCardArt from "./assets/linkedin-card-art.png";
import projectsCardArt from "./assets/projects-card-art.svg";

const cards = [
  {
    title: "Minha Decisão, LinkedIn.",
    subtitle: "Um recorte do meu posicionamento, da minha visão profissional e da direção que escolhi seguir.",
    href: "https://www.linkedin.com/in/paulo-lamorea/",
    cta: "Acessar LinkedIn",
    icon: Briefcase,
    variant: "default",
    image: linkedinCardArt,
    imageAlt: "Arte do card do LinkedIn com gráfico ascendente em vermelho",
    imageClass: "bio-card-image-linkedin",
  },
  {
    title: "Meus Projetos",
    subtitle: "Projetos que traduzem estudo, execução, consistência e evolução aplicada no mundo real.",
    href: "https://github.com/paulohrlamorea",
    cta: "Abrir GitHub",
    icon: FolderKanban,
    variant: "default",
    image: projectsCardArt,
    imageAlt: "Arte conceitual do card de projetos e portfólio",
    imageClass: "bio-card-image-projects",
  },
  {
    title: "Projeto Além das Fronteiras",
    subtitle: "Aplicativo em desenvolvimento com foco no universo automotivo.",
    href: "#mecanicos",
    icon: Wrench,
    variant: "mechanic",
  },
];

function DefaultCard({ card }) {
  const Icon = card.icon;
  const isExternal = card.href.startsWith("http");

  return (
    <a
      href={card.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="bio-card bio-card-default"
    >
      <div className="bio-card-overlay" />

      <div className={`bio-card-image ${card.imageClass || ""}`}>
        <img src={card.image} alt={card.imageAlt} />
        <div className="bio-card-image-shine" />
        <div className="bio-card-image-fade" />
      </div>

      <div className="bio-card-content">
        <div>
          <div className="bio-card-icon">
            <Icon size={18} />
          </div>

          <h2 className="bio-card-title">{card.title}</h2>

          <p className="bio-card-subtitle">{card.subtitle}</p>
        </div>

        <div className="bio-card-cta">
          {card.cta}
          <ArrowUpRight size={16} />
        </div>
      </div>
    </a>
  );
}

function MechanicCard({ card }) {
  const Icon = card.icon;

  return (
    <a href={card.href} className="bio-card bio-card-mechanic">
      <div className="bio-card-mechanic-glow" />

      <div className="bio-card-mechanic-content">
        <div className="bio-card-mechanic-icon">
          <Icon size={34} />
        </div>

        <h2 className="bio-card-mechanic-title">{card.title}</h2>
        <p className="bio-card-mechanic-subtitle">{card.subtitle}</p>

        <span className="bio-card-mechanic-badge">Em construção</span>
      </div>
    </a>
  );
}

export default function GitHubDataAnalystLinkBio() {
  return (
    <main className="bio-page">
      <div className="bio-container">
        <section className="bio-shell">
          <div className="bio-glow bio-glow-right" />
          <div className="bio-glow bio-glow-left" />

          <div className="bio-content">
            <div className="bio-header">
              <div className="bio-avatar-wrap">
                <div className="bio-avatar-glow" />
                <img src={profileImage} alt="Foto de Paulo" className="bio-avatar" />
              </div>

              <span className="bio-badge">Dados • Projetos • Evolução</span>

              <h1 className="bio-heading">Bem-vindo ao meu espaço profissional</h1>

              <p className="bio-description">
                Aqui você encontra meu posicionamento, meus projetos e a visão que estou
                transformando em construção real.
              </p>
            </div>

            <div className="bio-grid">
              {cards.map((card) =>
                card.variant === "mechanic" ? (
                  <MechanicCard key={card.title} card={card} />
                ) : (
                  <DefaultCard key={card.title} card={card} />
                ),
              )}
            </div>

            <div id="mecanicos" className="bio-status">
              <span className="bio-status-kicker">Status atual</span>
              <p className="bio-status-title">Construindo repertório, direção e presença.</p>
              <p className="bio-status-text">
                Projetos em andamento, cursos em andamento e um futuro que está sendo
                lapidado com disciplina, visão e constância.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
