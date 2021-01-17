<p align="center">
  <img src="https://i.imgur.com/Uhs97rr.png" width="65" />
</p>
  
<h3 align="center">
  Capivara do Trampo
</h3>
<p align="center">
  Projeto desenvolvido pela equipe 157 para a 2ª edição<br>
  do Hackathon da CCR.
</p>

<p align="center">
  <img alt="Versão" src="https://img.shields.io/badge/version-alfa-yellowgreen">
  <img alt="GitHub" src="https://img.shields.io/github/license/galenodemelo/capivara-do-trampo">
  <img src="https://img.shields.io/npm/v/npm" />
  <img src="https://img.shields.io/github/languages/count/galenodemelo/capivara-do-trampo" />
</p>

### Tabela de conteúdos
1. [Primeiros passos](#primeiros-passos)
1. [Tecnologias](#tecnologias)
1. [To do list](#to-do-list)
1. [Documentos auxiliares](#documentos-auxiliares)

<a name="primeiros-passos"></a>
### Primeiros passos

#### Iniciando a plataforma
1. Instale o [Node.JS](https://nodejs.org/en/)
1. Instale o gerenciador de pacotes Node, preferencialmente o NPM ou YARN
1. Faça download do repositório na sua máquina
1. Rode o comando abaixo via terminal, dentro da pasta `capivara-do-trampo`
```
  # Se você usa NPM
  npm run dev

  // Se você usa YARN
  yarn dev
```

Pronto! O projeto deverá começar a rodar na porta `3000` e será acessível pelo link `localhost:3000`. 

#### Banco de dados (SQLite)

Para criar o banco de dados em SQLite, basta rodar:
```
node /settings/bootstrap.js
```

<a name="tecnologias"></a>
### Tecnologias

#### Plataforma para mentores
![version](https://img.shields.io/badge/version-alfa-yellowgreen)

Para desenvolver a WebApp, as tecnologias empregadas foram:
- NodeJS
- NextJS
- React
- SASS/SCSS
- SQLite

No futuro, pretende-se transformar em um PWA

#### Chatbot
![version](https://img.shields.io/badge/version-alfa-yellowgreen)

Para criar o chatbot, foi utilizado o [Dialogflow](https://dialogflow.cloud.google.com/). No momento, o chatbot conta apenas com uma inteligência que comporta um fluxo mais ou menos perfeito, demandando mais tempo de treino com outros cenários para torná-lo mais eficiente.

O chatbot pode ser aplicado no WhatsApp, Facebook Messenger, Viber, Telegram, Twitter, site próprio e até robôs telefônicos. O ZIP para importar no Dialogflow está disponível na pasta `/chatbot`.

#### Busca de vagas
![status](https://img.shields.io/badge/status-developing-yellow)

A busca de vagas se dará via API de integração com ferramentas utilizadas para divulgar vagas, como: Kenoby, Catho e Indeed. Não será desenvolvida uma plataforma para ser acessada pelas empresas, pois isso pode onerar a rotina dos profissionais de RH. Assim, as vagas que serão exibidas estarão sempre atualizadas.

O mecanismo será orquestrado por várias Cron Jobs que rodarão a cada 30min. Cada job irá chamar a API da respectiva ferramenta e atualizar os dados no banco de dados.

#### Aplicação nas vagas
![status](https://img.shields.io/badge/status-not%20started-red)

O chatbot já conta com boa parte desse fluxo completo, mas ele depende da liberação da documentação das APIs para ser realizado. Com isso, a plataforma contará com um webhook que será acessado pelo chatbot, no qual ele enviará os dados do aluno e o arquivo com o currículo para ser realizado o cadastro na vaga.

<a name="to-do-list"></a>
### To do list
- [ ] Analisar soluções de computação em nuvem (AWS, Azure, Google Cloud) para melhorar a performance
- [ ] Aplicar um modelo de ORM (como o Sequelize) para facilitar a leitura e manutenção do código
- [ ] Finalizar a estrutura de API

<a name="documentos-auxiliares"></a>
### Documentos auxiliares

#### Modelo EER do Banco de Dados
![Modelo EER](https://i.imgur.com/bMVJnxa.png)

---

<pre>
Essa é a Capivara da boa sorte.
 　　　　　/)─―ヘ
　　　＿／　　　　＼
　 ／　　　　●　　　●丶
　｜　　　　　　　▼　 | 
　｜　　　　　　　亠ノ
　 U￣U￣￣￣￣U￣U
Compartilhe esse projeto com alguém para você ter sorte.
</pre>
