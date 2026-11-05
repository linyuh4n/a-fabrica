# PROJETO COMPLETO — SITE INSTITUCIONAL A FÁBRICA
## Musculação e Artes Marciais | React + TypeScript

# 1. PAPEL E OBJETIVO

Atue como um engenheiro de software sênior, arquiteto frontend, especialista em React, TypeScript, UI/UX, SEO e performance web.

Sua missão é desenvolver um site institucional completo, profissional, moderno e responsivo para a academia A Fábrica — Musculação e Artes Marciais.

O projeto deve ser desenvolvido diretamente no repositório, com código funcional, arquitetura organizada, componentes reutilizáveis, testes automatizados e documentação.

Não quero apenas um protótipo visual ou uma demonstração.

Quero uma aplicação real, pronta para ser executada localmente, evoluída e publicada em produção.

O site deve possuir duas finalidades principais:

1. Institucional: apresentar a academia, suas modalidades, identidade, estrutura, horários e localização.
2. Comercial: apresentar os planos, divulgar os serviços e converter visitantes em potenciais alunos por meio do WhatsApp.

O resultado deve transmitir força, disciplina, evolução, profissionalismo e identidade esportiva.

Idioma: português brasileiro (pt-BR).

# 2. IDENTIDADE DA ACADEMIA

Nome: A Fábrica.

Descrição: Musculação e Artes Marciais.

Modalidades:
- Musculação.
- Jiu-Jitsu.

Equipe de Jiu-Jitsu:
Carlson Gracie.

Slogan utilizado no material promocional:

"Jiu-Jitsu transforma corpo, mente e vida!"

Conceito comercial:

"Investimento que transforma."

## Público-alvo

- Pessoas interessadas em musculação.
- Iniciantes na academia.
- Praticantes de Jiu-Jitsu.
- Pessoas interessadas em artes marciais.
- Pessoas que procuram condicionamento físico.
- Pessoas que desejam melhorar sua saúde e qualidade de vida.
- Crianças e pessoas acima de 60 anos, considerando os planos especiais informados.

# 3. DADOS OFICIAIS DA ACADEMIA

Centralize todas as informações em arquivos de configuração.

## Endereço

Rua Leopoldo Fores, 38 — Uvaranas, Ponta Grossa — PR.

CEP: 84030-120.

Utilizar exatamente o nome da rua informado, sem alterar sua grafia sem confirmação.

## WhatsApp

Número: +55 42 991361617.

Link:

https://wa.me/5542991361617

Mensagem padrão:

"Olá! Gostaria de conhecer a A Fábrica e saber mais sobre os planos e modalidades."

## Instagram

Perfil oficial:

https://www.instagram.com/fabrica.academia/

Utilizar o endereço no header, footer e em um CTA para acompanhar a academia.

Abrir links externos em nova aba com atributos de segurança apropriados.

Não implementar feed externo por enquanto.

## Horários de funcionamento

Segunda a sexta-feira:
06:00 às 22:00.

Sábado:
09:00 às 17:00.

Domingos e feriados:
09:00 às 13:00.

IMPORTANTE:

Esses horários representam o funcionamento geral da academia.

Não confundir horário de funcionamento com horário de aulas de Jiu-Jitsu.

Os horários específicos das aulas ainda não foram fornecidos.

# 4. REFERÊNCIAS VISUAIS

Utilize as duas imagens fornecidas pelo usuário como referências principais.

Imagem 1:
Identidade visual A Fábrica, com logotipo, fotografias esportivas e slogan.

Imagem 2:
Material promocional da equipe Carlson Gracie, apresentando identidade visual e planos de Jiu-Jitsu.

Inspecione os arquivos disponíveis no repositório.

Se necessário, solicitar que sejam colocados em:

public/images/

Nomes sugeridos:

- academia-banner.jpg
- planos-carlson-gracie.jpg

Não redesenhar ou distorcer os logotipos.

Preservar a identidade visual das referências.

Atualmente não existem fotografias adicionais da academia.

Portanto:

- Utilizar somente as imagens fornecidas.
- Não apresentar imagens genéricas de outras academias como fotografias reais da A Fábrica.
- Não inventar fotografias da estrutura.
- Não construir uma galeria fictícia.
- Preparar a arquitetura para receber fotografias reais futuramente.
- Utilizar as referências fornecidas como elementos visuais quando suas proporções e resoluções forem adequadas.

Se não for possível localizar as imagens, solicitar os arquivos ao usuário em vez de inventar ativos.

# 5. IDENTIDADE VISUAL

Criar uma identidade visual consistente baseada nas referências.

## Paleta oficial

Preto principal:
#080808

Preto secundário:
#111111

Cinza escuro:
#242424

Vermelho principal:
#A90506

Vermelho de destaque:
#EF3238

Branco:
#F5F5F5

Cinza secundário:
#A5A5A5

Centralizar as cores em variáveis CSS.

Exemplo:

--color-background: #080808;
--color-surface: #111111;
--color-surface-secondary: #242424;
--color-primary: #A90506;
--color-accent: #EF3238;
--color-text: #F5F5F5;
--color-text-muted: #A5A5A5;

## Direção de arte

O site deve apresentar:

- Fundo predominantemente preto.
- Vermelho em botões, destaques e chamadas.
- Branco em títulos e textos principais.
- Tipografia forte, esportiva e condensada.
- Estética industrial.
- Elementos visuais inspirados em metal e concreto.
- Fotografias esportivas com contraste elevado.
- Cards escuros.
- Bordas discretas.
- Linhas divisórias vermelhas.
- Ícones minimalistas.
- Animações discretas.

Evitar:

- Visual genérico de template.
- Aparência excessivamente corporativa.
- Gradientes exagerados.
- Elementos infantis.
- Cores fora da identidade visual.
- Animações excessivas.
- Excesso de informações em uma mesma seção.

O site precisa parecer um produto profissional desenvolvido especificamente para A Fábrica.

# 6. STACK TECNOLÓGICA

Utilizar:

- React.
- TypeScript.
- Vite.
- React Router.
- CSS moderno.
- Lucide React.
- Vitest.
- React Testing Library.

Não utilizar backend inicialmente.

Não utilizar banco de dados.

Não implementar autenticação.

O site deve ser predominantemente estático, com conteúdo centralizado em configurações.

As calculadoras devem funcionar inteiramente no navegador.

O WhatsApp será o principal canal de conversão.

Priorizar simplicidade, manutenção, desempenho e baixo custo operacional.

Não adicionar bibliotecas desnecessárias.

# 7. ARQUITETURA DO SITE

Criar as seguintes seções:

1. Header.
2. Hero principal.
3. Sobre a academia.
4. Modalidades.
5. Planos de musculação.
6. Planos de Jiu-Jitsu.
7. Diferenciais.
8. Horários de funcionamento.
9. Galeria preparada para futuras imagens.
10. Calculadoras fitness.
11. Localização.
12. Perguntas frequentes.
13. CTA final.
14. Footer.

Utilizar componentes independentes e reutilizáveis.

# 8. HEADER

Criar um cabeçalho profissional.

Elementos:

- Logo A Fábrica.
- Início.
- Sobre.
- Modalidades.
- Planos.
- Horários.
- Ferramentas.
- Localização.
- Instagram.
- Botão "FALE CONOSCO".

Comportamento:

- Header sticky.
- Fundo preto.
- Menu desktop horizontal.
- Menu mobile com botão hambúrguer.
- Navegação com scroll suave.
- Destaques vermelhos no hover.
- Botão WhatsApp destacado.
- Indicador visual da seção atual, quando apropriado.

Garantir acessibilidade e navegação por teclado.

# 9. HERO PRINCIPAL

Criar uma primeira dobra de grande impacto visual.

Utilizar uma imagem esportiva fornecida como referência principal, caso seja tecnicamente adequada.

Aplicar uma camada escura sobre a imagem para garantir legibilidade.

Título:

"FORÇA. DISCIPLINA. TRANSFORMAÇÃO."

Subtítulo:

"Seu próximo nível começa aqui. Musculação e artes marciais em um ambiente feito para transformar pessoas."

Botão principal:

"QUERO CONHECER A ACADEMIA"

Botão secundário:

"VER NOSSOS PLANOS"

O primeiro deve abrir o WhatsApp.

O segundo deve navegar até a seção de planos.

Criar uma composição visual moderna, com títulos grandes, contraste elevado e identidade industrial.

# 10. SOBRE A ACADEMIA

Título:

"MUITO MAIS QUE UMA ACADEMIA."

Texto-base:

"A Fábrica é um espaço dedicado ao desenvolvimento físico, à disciplina e à evolução pessoal. Aqui, musculação e artes marciais se encontram para oferecer experiências que vão além do treinamento."

Apresentar os conceitos:

- Disciplina.
- Respeito.
- Superação.
- Evolução.
- Comunidade.

Não inventar história de fundação, quantidade de alunos, premiações, qualificações ou depoimentos.

Essas informações poderão ser adicionadas futuramente.

# 11. MODALIDADES

Criar cards visuais independentes.

## Musculação

Descrição:

"Treine no seu ritmo, desenvolva sua força e trabalhe pela sua melhor versão."

CTA:

"CONHEÇA NOSSOS PLANOS"

## Jiu-Jitsu

Descrição:

"Desenvolva técnica, disciplina, autocontrole e condicionamento físico."

Apresentar a identidade Carlson Gracie.

CTA:

"CONHEÇA OS PLANOS DE JIU-JITSU"

Os botões devem direcionar às respectivas seções comerciais.

Não inventar outras modalidades.

# 12. PLANOS DE MUSCULAÇÃO

Criar uma seção comercial exclusiva.

Título:

"PLANOS DE MUSCULAÇÃO"

Subtítulo:

"ESCOLHA O PLANO IDEAL PARA SUA EVOLUÇÃO."

Apresentar os planos abaixo.

## Plano mensal

Valor total: R$ 145,00.

## Plano trimestral

Valor total: R$ 359,70.

Parcelamento informado:
2x de R$ 179,85.

## Plano semestral

Valor total: R$ 659,40.

Parcelamento informado:
3x de R$ 219,80.

## Plano anual

Valor total: R$ 1.138,80.

Parcelamento informado:
6x de R$ 189,80.

## Plano universitário

Valor informado:
R$ 119,90.

Periodicidade ainda não confirmada.

Não afirmar que é mensal até confirmação.

## Plano universitário trimestral

Valor informado:
R$ 229,70.

Existe uma inconsistência nos dados recebidos:

Foi informado parcelamento de 2x R$ 179,85, que totaliza R$ 359,70, e não R$ 229,70.

Não publicar esse plano com condições de pagamento até que a divergência seja corrigida.

Manter o registro configurado como pendente.

## Plano Master

Valor informado:
R$ 94,90.

Público:
Pessoas acima de 60 anos.

Periodicidade ainda não confirmada.

Não afirmar que é mensal até confirmação.

## Plano Kids

Valor informado:
R$ 89,90.

Condição:
Pode frequentar a academia até 3 vezes por semana.

Periodicidade e faixa etária ainda não confirmadas.

Não inventar essas informações.

## Apresentação visual

Organizar os cards em duas categorias:

PLANOS TRADICIONAIS:
- Mensal.
- Trimestral.
- Semestral.
- Anual.

PLANOS ESPECIAIS:
- Universitário.
- Universitário trimestral.
- Master.
- Kids.

Utilizar:

- Cards escuros.
- Bordas vermelhas.
- Preços em destaque.
- Textos brancos.
- Botões vermelhos.
- Hierarquia visual clara.

Não inventar descontos, benefícios ou condições de pagamento.

Não exibir informações comerciais pendentes ao público.

Os planos especiais podem ter identificação visual própria.

Todos os planos devem possuir botão:

"QUERO ESTE PLANO"

Abrir o WhatsApp com mensagem personalizada.

Exemplo:

"Olá! Tenho interesse no plano anual de musculação da A Fábrica. Gostaria de mais informações."

Criar mensagens específicas para cada plano.

# 13. PLANOS DE JIU-JITSU — CARLSON GRACIE

Criar uma seção comercial independente.

Título:

"JIU-JITSU — CARLSON GRACIE"

Subtítulo:

"JIU-JITSU TRANSFORMA CORPO, MENTE E VIDA!"

Os valores apresentados no material promocional são:

## Mensal

R$ 180,00.

Pagamento mensal informado.

## Trimestral

R$ 499,00.

Pagamento a cada 3 meses.

Economia informada:
R$ 41,00 em relação a três mensalidades de R$ 180,00.

## Semestral

R$ 899,00.

Pagamento a cada 6 meses.

Economia informada:
R$ 181,00 em relação a seis mensalidades de R$ 180,00.

Esses valores pertencem exclusivamente ao Jiu-Jitsu.

Não misturar com os preços da musculação.

As condições atuais ainda precisam ser confirmadas.

Apresentar os valores como informações do material promocional e permitir que o visitante consulte as condições pelo WhatsApp.

Não inventar:
- Horários de aulas.
- Quantidade de aulas por semana.
- Faixas etárias.
- Turmas infantis.
- Benefícios adicionais.
- Taxas de matrícula.
- Regras de graduação.

CTA:

"QUERO TREINAR JIU-JITSU"

Mensagem:

"Olá! Tenho interesse nos planos de Jiu-Jitsu da A Fábrica. Gostaria de conhecer as condições e horários."

# 14. DIFERENCIAIS

Criar uma seção com quatro pilares.

DISCIPLINA:
"Desenvolva consistência e compromisso com seus objetivos."

JIU-JITSU:
"Aprendizado técnico, respeito e evolução contínua."

EQUIPE:
"Faça parte de uma comunidade que busca evoluir."

RESPEITO:
"Valores que ultrapassam os limites do tatame."

Utilizar ícones brancos e vermelhos.

Não afirmar diferenciais estruturais que ainda não foram confirmados.

# 15. HORÁRIOS DE FUNCIONAMENTO

Criar uma seção chamada:

"ESTAMOS ESPERANDO POR VOCÊ"

Apresentar os horários:

Segunda a sexta:
06:00 às 22:00.

Sábado:
09:00 às 17:00.

Domingos e feriados:
09:00 às 13:00.

Utilizar cards ou tabela visual.

Diferenciar dias úteis, finais de semana e feriados.

Adicionar CTA:

"FALE CONOSCO"

IMPORTANTE:

Os horários são da academia.

Não apresentar como grade de aulas de Jiu-Jitsu.

Criar estrutura preparada para adicionar horários de aulas posteriormente.

# 16. GALERIA

Criar uma estrutura preparada para futuras fotografias.

Como não existem fotografias adicionais disponíveis:

- Não inventar imagens.
- Não utilizar imagens de outras academias.
- Não criar depoimentos visuais fictícios.
- Não apresentar ambientes inexistentes.

Utilizar as duas imagens fornecidas somente onde fizer sentido.

A galeria deve suportar:

- Grid responsivo.
- Modal de ampliação.
- Navegação por teclado.
- Descrições.
- Lazy loading.

Caso não existam imagens suficientes, não renderizar uma galeria vazia.

# 17. CALCULADORAS FITNESS

Criar uma seção chamada:

"FERRAMENTAS PARA SUA EVOLUÇÃO"

Subtítulo:

"Utilize nossas calculadoras gratuitas e acompanhe melhor sua jornada."

Implementar exclusivamente três ferramentas:

1. Calculadora de proteínas.
2. Calculadora de IMC.
3. Calculadora de calorias.

Não adicionar outras calculadoras.

As ferramentas devem funcionar diretamente no navegador, sem cadastro e sem backend.

Separar as funções matemáticas dos componentes React.

## 17.1 Calculadora de proteínas

Campos:

- Peso corporal em kg.
- Objetivo:
  - Saúde geral/manutenção.
  - Atividade física.
  - Hipertrofia.
- Preferência alimentar:
  - Onívora.
  - Vegetariana com ovos e laticínios.
  - Vegetariana estrita.

Resultados:

- Faixa estimada de proteína por dia.
- Quantidade mínima em gramas.
- Quantidade máxima em gramas.
- Média da faixa, quando aplicável.
- Sugestões de fontes alimentares de acordo com a preferência.

Utilizar referências científicas confiáveis, como ISSN e EFSA.

Para pessoas que praticam treinamento resistido, considerar aproximadamente 1,4 a 2,0 g/kg/dia como referência geral, com contexto e limitações.

Não apresentar estimativas como prescrição nutricional individualizada.

Não fazer promessas de resultados.

## 17.2 Calculadora de IMC

Campos:

- Peso em kg.
- Altura em centímetros.

Fórmula:

IMC = peso / altura².

Converter a altura para metros.

Apresentar:

- IMC calculado.
- Classificação para adultos.
- Explicação.
- Limitações do IMC.

Não apresentar IMC como diagnóstico médico.

Não utilizar classificação de adultos para crianças.

## 17.3 Calculadora de calorias

Campos:

- Idade.
- Peso.
- Altura.
- Sexo utilizado pela equação.
- Nível de atividade física.

Utilizar a equação Mifflin-St Jeor.

Calcular:

- Taxa metabólica basal.
- Gasto energético total estimado.

Explicar os fatores utilizados.

Não apresentar os valores como exatos.

Não recomendar dietas extremas ou déficits agressivos.

## UX DAS CALCULADORAS

Todas devem possuir:

- Layout responsivo.
- Labels nos campos.
- Validação.
- Mensagens de erro.
- Resultados destacados.
- Botão calcular.
- Botão limpar.
- Possibilidade de recalcular.
- Compartilhamento de resultados.
- Boa experiência mobile.

Não armazenar dados corporais em servidores.

Não enviar dados pessoais para serviços externos.

# 18. LOCALIZAÇÃO E CONTATO

Título:

"VENHA CONHECER A FÁBRICA"

Endereço:

Rua Leopoldo Fores, 38 — Uvaranas, Ponta Grossa — PR, CEP 84030-120.

WhatsApp:

(42) 991361617.

Instagram:

@fabrica.academia.

Criar:

- Botão para abrir conversa no WhatsApp.
- Botão para abrir localização no Google Maps.
- Área para incorporar mapa.
- Informações de contato.
- Link para Instagram.

Utilizar uma pesquisa pelo endereço completo no Google Maps.

Não inventar coordenadas.

Não afirmar que o marcador corresponde à entrada exata da academia sem confirmação.

# 19. WHATSAPP E CONVERSÃO

O WhatsApp será o principal canal de conversão.

Implementar:

- Botão flutuante.
- Botão no header.
- Botões no hero.
- Botões nas modalidades.
- Botões nos planos.
- Botão na localização.
- Botão no CTA final.

Criar mensagens personalizadas conforme o plano escolhido.

Centralizar número e funções em:

src/lib/whatsapp.ts

Utilizar encodeURIComponent.

Não criar envio automático de mensagens.

O visitante deve confirmar o envio dentro do WhatsApp.

# 20. PERGUNTAS FREQUENTES

Criar seção FAQ com acordeões acessíveis.

Perguntas iniciais:

1. Quais modalidades a academia oferece?
2. Quais são os planos de musculação?
3. Quais são os planos de Jiu-Jitsu?
4. Qual o horário de funcionamento?
5. Onde fica a A Fábrica?
6. Como faço para conhecer a academia?
7. Como entrar em contato?
8. Como posso começar a treinar?

Respostas devem utilizar somente informações confirmadas.

Quando faltar alguma informação, direcionar para o WhatsApp.

# 21. CTA FINAL

Criar uma seção visual de encerramento.

Título:

"SEU PRÓXIMO NÍVEL COMEÇA AGORA."

Subtítulo:

"Não espere o momento perfeito. Comece sua transformação hoje."

Botão:

"FALE COM A FÁBRICA"

Utilizar fundo preto, elementos vermelhos e imagem esportiva.

# 22. FOOTER

Incluir:

- Logo.
- Nome A Fábrica.
- Descrição curta.
- Links de navegação.
- Modalidades.
- Planos.
- Ferramentas.
- Endereço.
- Horários.
- WhatsApp.
- Instagram.
- Direitos autorais.

Texto:

"© [ano atual] A Fábrica — Musculação e Artes Marciais. Todos os direitos reservados."

# 23. SEO

O site deve ser otimizado para buscas locais.

Palavras-chave:

- Academia em Uvaranas.
- Academia em Ponta Grossa.
- Musculação em Uvaranas.
- Academia de musculação em Ponta Grossa.
- Jiu-Jitsu em Ponta Grossa.
- Carlson Gracie Ponta Grossa.
- Artes marciais em Uvaranas.

Implementar:

- Title.
- Meta description.
- URLs amigáveis.
- Open Graph.
- Canonical.
- Sitemap.
- Robots.txt.
- Schema.org.
- LocalBusiness ou SportsActivityLocation, conforme aplicabilidade.
- Links internos.
- Textos originais.
- Imagens otimizadas.
- Alt text descritivo.

Exemplo de title:

"A Fábrica | Academia, Musculação e Jiu-Jitsu em Uvaranas"

Exemplo de description:

"Conheça a A Fábrica, academia de musculação e artes marciais em Uvaranas, Ponta Grossa. Confira nossos planos, horários e localização."

Não inventar avaliações, estrelas, depoimentos, prêmios ou dados comerciais.

Priorizar SEO local.

Utilizar dados estruturados somente com informações verdadeiras e confirmadas.

# 24. RESPONSIVIDADE E ACESSIBILIDADE

O site deverá funcionar em:

- Smartphones.
- Tablets.
- Notebooks.
- Monitores desktop.

Adotar abordagem mobile-first.

Implementar:

- HTML semântico.
- Navegação por teclado.
- Focus states.
- Contraste adequado.
- Labels nos formulários.
- Botões acessíveis.
- Imagens com alt text.
- Respeito a prefers-reduced-motion.
- Modais acessíveis.
- Acordeões acessíveis.

Seguir boas práticas WCAG 2.2 AA.

# 25. PERFORMANCE

O site deve ser leve e rápido.

Implementar:

- Lazy loading fora da primeira dobra.
- WebP/AVIF quando possível.
- Imagens responsivas.
- Dimensões explícitas nas imagens.
- Code splitting quando apropriado.
- CSS otimizado.
- JavaScript enxuto.
- Fontes otimizadas.
- Evitar dependências desnecessárias.

Metas:

LCP até 2,5 segundos.
INP até 200 ms.
CLS até 0,1.

# 26. ESTRUTURA DE PASTAS

Organizar aproximadamente assim:

a-fabrica/
│
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── gallery/
│   │   └── banners/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── PlanCard.tsx
│   │   ├── ModalityCard.tsx
│   │   ├── Gallery.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── FAQ.tsx
│   │   └── CalculatorCard.tsx
│   │
│   ├── sections/
│   │   ├── AboutSection.tsx
│   │   ├── ModalitiesSection.tsx
│   │   ├── GymPlansSection.tsx
│   │   ├── BjjPlansSection.tsx
│   │   ├── DifferentialsSection.tsx
│   │   ├── OpeningHoursSection.tsx
│   │   ├── ToolsSection.tsx
│   │   ├── LocationSection.tsx
│   │   └── CTASection.tsx
│   │
│   ├── calculators/
│   │   ├── ProteinCalculator.tsx
│   │   ├── BMICalculator.tsx
│   │   └── CalorieCalculator.tsx
│   │
│   ├── lib/
│   │   ├── calculations/
│   │   │   ├── protein.ts
│   │   │   ├── bmi.ts
│   │   │   └── calories.ts
│   │   ├── whatsapp.ts
│   │   └── formatting.ts
│   │
│   ├── config/
│   │   ├── academy.ts
│   │   ├── plans.ts
│   │   ├── openingHours.ts
│   │   └── gallery.ts
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   │
│   ├── styles/
│   │   ├── variables.css
│   │   ├── global.css
│   │   ├── components.css
│   │   └── responsive.css
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── tests/
│   ├── calculations/
│   ├── components/
│   └── lib/
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── .gitignore

Ajustar a estrutura quando houver justificativa técnica, preservando separação de responsabilidades.

# 27. CONFIGURAÇÕES CENTRALIZADAS

Todas as informações comerciais devem ficar em arquivos de configuração.

## academy.ts

Conter:

- Nome.
- Descrição.
- Endereço.
- CEP.
- Cidade.
- Estado.
- WhatsApp.
- Instagram.
- Modalidades.
- Horários de funcionamento.
- Slogan.

## plans.ts

Conter:

- Planos de musculação.
- Planos especiais.
- Planos de Jiu-Jitsu.
- Identificadores.
- Valores.
- Duração.
- Parcelamento.
- Economia.
- Condições.
- Status de confirmação.
- Mensagens comerciais.

Criar identificadores:

gym-monthly
gym-quarterly
gym-semiannual
gym-annual
gym-university
gym-university-quarterly
gym-master
gym-kids
bjj-monthly
bjj-quarterly
bjj-semiannual

Cada plano deve ter propriedades que permitam controlar se pode ser exibido publicamente.

Exemplo conceitual:

isConfirmed
isPublic
paymentPeriod
installments
totalPrice

Planos com informações divergentes ou não confirmadas não devem exibir condições incorretas.

Não duplicar dados comerciais nos componentes.

# 28. TESTES AUTOMATIZADOS

Utilizar Vitest e React Testing Library.

Criar testes para:

- Calculadora de proteínas.
- Calculadora de IMC.
- Calculadora de calorias.
- Validação dos formulários.
- Formatação de valores monetários.
- Geração de links WhatsApp.
- Exibição de planos.
- Ocultação de planos não confirmados.
- Navegação.
- Responsividade dos componentes críticos.

Testar:

- Entradas válidas.
- Entradas inválidas.
- Campos vazios.
- Valores extremos.
- Casas decimais.
- Limites de classificação.
- Arredondamentos.
- Mensagens de erro.

Não considerar o projeto concluído se os testes falharem.

# 29. DOCUMENTAÇÃO

Criar README.md com:

- Descrição do projeto.
- Tecnologias.
- Requisitos.
- Instalação.
- Execução local.
- Execução dos testes.
- Build de produção.
- Alteração de preços.
- Alteração de endereço.
- Alteração de WhatsApp.
- Alteração de Instagram.
- Atualização de horários.
- Adição de modalidades.
- Adição de fotografias.
- Atualização dos planos.
- Publicação do site.

Documentar também as informações comerciais ainda pendentes.

# 30. INFORMAÇÕES PENDENTES

Não bloquear o desenvolvimento por causa destas informações.

Implementar a arquitetura e deixar os dados configuráveis.

Não publicar informações não confirmadas.

Pendências:

1. Corrigir a divergência do plano universitário trimestral:
   Valor informado: R$ 229,70.
   Parcelamento informado: 2x de R$ 179,85.
   Esses valores não correspondem.

2. Confirmar a periodicidade do plano universitário de R$ 119,90.

3. Confirmar a periodicidade do plano Master de R$ 94,90.

4. Confirmar a periodicidade do plano Kids de R$ 89,90.

5. Confirmar a faixa etária do plano Kids.

6. Confirmar horários específicos das aulas de Jiu-Jitsu.

7. Confirmar condições comerciais atuais dos planos de Jiu-Jitsu.

8. Confirmar benefícios, taxas de matrícula e condições adicionais, se existirem.

9. Informar história da academia e diferenciais reais, caso desejem ser divulgados.

Não inventar nenhuma dessas informações.

# 31. CRITÉRIOS DE ACEITAÇÃO

O projeto será considerado concluído quando:

1. React executar localmente.
2. A identidade visual da A Fábrica estiver implementada.
3. As duas imagens fornecidas tiverem sido consideradas.
4. O header funcionar em desktop e mobile.
5. A homepage estiver completa.
6. A seção institucional estiver implementada.
7. As modalidades estiverem apresentadas.
8. Os planos de musculação estiverem separados dos planos de Jiu-Jitsu.
9. Os preços estiverem corretos.
10. Os planos pendentes estiverem protegidos contra publicação incorreta.
11. Os horários de funcionamento estiverem corretos.
12. O endereço estiver atualizado.
13. O Instagram estiver funcional.
14. Os botões abrirem o WhatsApp com mensagens personalizadas.
15. As três calculadoras funcionarem.
16. Os cálculos estiverem separados dos componentes.
17. Os testes unitários passarem.
18. O site estiver responsivo.
19. O SEO estiver implementado.
20. Não existirem links quebrados.
21. Não existirem botões sem funcionalidade.
22. Não existirem informações comerciais inventadas.
23. O build de produção for concluído.
24. O README explicar como executar e publicar.

# 32. ORDEM DE EXECUÇÃO

Execute o desenvolvimento seguindo esta sequência:

ETAPA 1 — ANÁLISE

- Inspecionar o repositório.
- Verificar os arquivos existentes.
- Identificar as imagens de referência.
- Identificar dependências já instaladas.
- Apresentar um breve diagnóstico.

ETAPA 2 — ESTRUTURA

- Configurar React, TypeScript e Vite.
- Criar a arquitetura de pastas.
- Criar configurações centralizadas.
- Configurar CSS e identidade visual.

ETAPA 3 — INTERFACE

- Desenvolver Header.
- Desenvolver Hero.
- Desenvolver seção institucional.
- Desenvolver modalidades.
- Desenvolver planos de musculação.
- Desenvolver planos de Jiu-Jitsu.
- Desenvolver diferenciais.
- Desenvolver horários.
- Desenvolver localização.
- Desenvolver FAQ.
- Desenvolver Footer.

ETAPA 4 — FUNCIONALIDADES

- Implementar WhatsApp.
- Implementar Instagram.
- Implementar calculadora de proteínas.
- Implementar calculadora de IMC.
- Implementar calculadora de calorias.
- Implementar validações.
- Implementar navegação mobile.

ETAPA 5 — SEO E PERFORMANCE

- Implementar metadados.
- Implementar Schema.org.
- Criar sitemap.
- Criar robots.txt.
- Otimizar imagens.
- Revisar acessibilidade.
- Revisar responsividade.

ETAPA 6 — TESTES

- Criar testes unitários.
- Executar todos os testes.
- Corrigir falhas.
- Validar links.
- Validar formulários.
- Validar cálculos.

ETAPA 7 — ENTREGA

- Executar build de produção.
- Corrigir erros.
- Atualizar README.
- Apresentar resumo da implementação.
- Informar como executar localmente.
- Informar quais informações comerciais ainda estão pendentes.

# 33. ORIENTAÇÕES FINAIS

Não implemente somente um layout estático.

Todos os botões, formulários, menus, calculadoras e interações devem funcionar.

Não invente informações comerciais ou institucionais.

Não utilize fotografias fictícias como se fossem da academia.

Não misture os planos de musculação com os de Jiu-Jitsu.

Mantenha a identidade visual consistente.

Priorize código limpo, componentes reutilizáveis, tipagem forte, acessibilidade e performance.

Não deixe erros de TypeScript, ESLint ou build sem resolução.

Se encontrar decisões técnicas não especificadas, escolha a solução mais simples, sustentável e adequada ao projeto.

Não interrompa o desenvolvimento para perguntar detalhes que possam ser tratados por configuração ou placeholders internos.

Implemente o projeto completo diretamente no repositório.

O resultado final deve ser um site institucional profissional, visualmente impactante, responsivo, funcional e pronto para evoluir.

O objetivo é representar a A Fábrica profissionalmente e facilitar a conversão de visitantes em novos alunos.