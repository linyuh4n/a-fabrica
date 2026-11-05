export const academyConfig = {
  name: "A Fábrica",
  description: "Musculação e Artes Marciais",
  tagline: "Jiu-Jitsu transforma corpo, mente e vida!",
  commercialConcept: "Investimento que transforma.",
  slogan: "FORÇA. DISCIPLINA. TRANSFORMAÇÃO.",
  subtitle: "Seu próximo nível começa aqui. Musculação e artes marciais em um ambiente feito para transformar pessoas.",
  
  address: {
    street: "Rua Leopoldo Fores, 38",
    neighborhood: "Uvaranas",
    city: "Ponta Grossa",
    state: "PR",
    cep: "84030-120",
    full: "Rua Leopoldo Fores, 38 — Uvaranas, Ponta Grossa — PR, CEP 84030-120",
    mapsQuery: "Rua Leopoldo Fores, 38, Uvaranas, Ponta Grossa, PR, 84030-120",
  },
  
  whatsapp: {
    number: "5542991246560",
    formatted: "(42) 99124-6560",
    link: "https://wa.me/5542991246560",
    defaultMessage: "Olá! Gostaria de conhecer a A Fábrica e saber mais sobre os planos e modalidades.",
  },
  
  instagram: {
    handle: "@fabrica.academia",
    url: "https://www.instagram.com/fabrica.academia/",
  },
  
  modalities: [
    {
      id: "musculacao",
      name: "Musculação",
      description: "Treine no seu ritmo, desenvolva sua força e trabalhe pela sua melhor versão.",
      ctaText: "CONHEÇA NOSSOS PLANOS",
      ctaTarget: "#planos-musculacao",
    },
    {
      id: "jiu-jitsu",
      name: "Jiu-Jitsu",
      description: "Desenvolva técnica, disciplina, autocontrole e condicionamento físico.",
      team: "Carlson Gracie",
      ctaText: "CONHEÇA OS PLANOS DE JIU-JITSU",
      ctaTarget: "#planos-jiu-jitsu",
    },
  ],
  
  openingHours: {
    weekdays: { open: "06:00", close: "22:00", label: "Segunda a sexta-feira" },
    saturday: { open: "09:00", close: "17:00", label: "Sábado" },
    sunday: { open: "09:00", close: "13:00", label: "Domingos e feriados" },
  },
  
  seo: {
    title: "A Fábrica | Academia, Musculação e Jiu-Jitsu em Uvaranas",
    description: "Conheça a A Fábrica, academia de musculação e artes marciais em Uvaranas, Ponta Grossa. Confira nossos planos, horários e localização.",
    keywords: [
      "academia em Uvaranas",
      "academia em Ponta Grossa",
      "musculação em Uvaranas",
      "academia de musculação em Ponta Grossa",
      "Jiu-Jitsu em Ponta Grossa",
      "Carlson Gracie Ponta Grossa",
      "artes marciais em Uvaranas",
    ],
    canonicalUrl: "https://afabrica.com.br/",
    ogImage: "/images/banners/academia-banner.jpg",
  },
  
  hero: {
    title: "FORÇA. DISCIPLINA. TRANSFORMAÇÃO.",
    subtitle: "Seu próximo nível começa aqui. Musculação e artes marciais em um ambiente feito para transformar pessoas.",
    primaryCta: "QUERO CONHECER A ACADEMIA",
    secondaryCta: "VER NOSSOS PLANOS",
  },
  
  about: {
    title: "MUITO MAIS QUE UMA ACADEMIA.",
    text: "A Fábrica é um espaço dedicado ao desenvolvimento físico, à disciplina e à evolução pessoal. Aqui, musculação e artes marciais se encontram para oferecer experiências que vão além do treinamento.",
    concepts: [
      { title: "Disciplina", description: "Desenvolva consistência e compromisso com seus objetivos." },
      { title: "Respeito", description: "Valores que ultrapassam os limites do tatame." },
      { title: "Superação", description: "Vença seus limites a cada treino." },
      { title: "Evolução", description: "Progresso contínuo, dentro e fora da academia." },
      { title: "Comunidade", description: "Faça parte de uma equipe que busca evoluir junta." },
    ],
  },
  
  differentials: [
    {
      id: "disciplina",
      title: "DISCIPLINA",
      description: "Desenvolva consistência e compromisso com seus objetivos.",
      icon: "target",
    },
    {
      id: "jiu-jitsu",
      title: "JIU-JITSU",
      description: "Aprendizado técnico, respeito e evolução contínua.",
      icon: "award",
    },
    {
      id: "equipe",
      title: "EQUIPE",
      description: "Faça parte de uma comunidade que busca evoluir.",
      icon: "users",
    },
    {
      id: "respeito",
      title: "RESPEITO",
      description: "Valores que ultrapassam os limites do tatame.",
      icon: "heart",
    },
  ],
  
  cta: {
    title: "SEU PRÓXIMO NÍVEL COMEÇA AGORA.",
    subtitle: "Não espere o momento perfeito. Comece sua transformação hoje.",
    buttonText: "FALE COM A FÁBRICA",
  },
  
  footer: {
    copyright: `© ${new Date().getFullYear()} A Fábrica — Musculação e Artes Marciais. Todos os direitos reservados.`,
  },
};
