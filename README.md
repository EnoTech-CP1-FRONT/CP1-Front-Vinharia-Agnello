Gerenciamento – Vinharia Agnello Website

Documento de Requisitos

Versão: 1.0
Data: 17/04/2025

Desenvolvedores Front-end:

RM 562098 - Ana

RM 561820 - Gustavo

RM 565191 - Gabriel Akira

RM 556645 - Mauro Carlos

---


Histórico de Revisões

Versão | Data       | Autor          | Descrição
-------|------------|----------------|-------------------
1.0    | 17/04/2025 | EnoTech        | Documento inicial

Índice

1. Introdução
    1.1 Propósito
    1.2 Público-alvo
    1.3 Escopo
2. Visão Geral do Produto
3. Escopo Não Contemplado
4. Requisitos Funcionais
5. Regras de Negócio
6. Requisitos Não Funcionais
7. Técnica de Levantamento de Requisitos

1. Introdução

1.1 Propósito

Este documento especifica os requisitos para o desenvolvimento do website da Vinharia Agnello. O objetivo é fornecer à equipe de desenvolvimento as informações necessárias para a criação de um site informativo e engajador, que apresente a história da vinícola, seus produtos (vinhos) e formas de contato.

1.2 Público-alvo

Destinado ao proprietário (cliente) da Vinharia Agnello e à equipe de desenvolvimento responsável pela concepção, design e implementação do website.

1.3 Escopo

O website da Vinharia Agnello incluirá as seguintes seções e funcionalidades, conforme a estrutura HTML fornecida:

* **Página Inicial:**
    * Cabeçalho com navegação para as seções "Sobre nós", "Vinhos" (Catálogo) e "Contato".
    * Seção "Sobre Nós" com a história da vinícola, imagem e destaques de seus valores (melhores uvas, prêmios, sustentabilidade).
    * Seção "Catálogo" com a apresentação de uma seleção de vinhos (Reserve Cabernet Sauvignon, Signature Chardonnay, Estate Pinot Noir), incluindo imagem, nome, safra, descrição, preço e botão de "Comprar".
    * Rodapé com informações sobre a Agnello, links rápidos, categorias de vinhos e um formulário/seção para "Novidades".

2. Visão Geral do Produto

O website da Vinharia Agnello tem como objetivo principal apresentar a marca, sua história e seus produtos ao público online. Ele servirá como uma plataforma informativa para clientes existentes e potenciais, permitindo que conheçam a tradição da vinícola e explorem sua seleção de vinhos.

3. Escopo Não Contemplado

As seguintes funcionalidades não estão contempladas nesta versão inicial do website:

* **Processo de compra online completo:** A funcionalidade do botão "Comprar" não inclui um carrinho de compras ou sistema de pagamento integrado.
* **Página de contato detalhada:** A seção "Contato" no cabeçalho não possui uma página dedicada com formulário de contato ou informações adicionais.
* **Página individual para cada vinho:** Cada vinho no catálogo possui apenas uma breve descrição na página inicial, sem uma página dedicada com mais detalhes.
* **Sistema de gerenciamento de conteúdo (CMS):** O conteúdo do site será estático, definido no HTML, CSS e JavaScript, sem um sistema para atualização dinâmica pelo cliente.
* **Integração com redes sociais:** Apenas ícones de redes sociais são exibidos no rodapé, sem funcionalidades de compartilhamento ou feeds integrados.
* **Funcionalidade de "Visita" mencionada nos "Links Rápidos".**
* **Funcionalidade de inscrição para "Novidades".**

4. Requisitos Funcionais

* **RF001 – Navegação:**
    * O usuário deve poder navegar entre as seções "Sobre nós", "Vinhos" e "Contato" através do menu principal no cabeçalho.
* **RF002 – Visualização da seção "Sobre Nós":**
    * O usuário deve poder visualizar a história da Vinharia Agnello, incluindo texto e imagem da vinícola.
    * O usuário deve poder visualizar os destaques dos valores da vinícola (Melhores uvas, Prêmios, Sustentabilidade) com seus respectivos ícones e descrições.
* **RF003 – Visualização do Catálogo de Vinhos:**
    * O usuário deve poder visualizar uma lista de vinhos em destaque, incluindo imagem, nome, safra e breve descrição de cada um.
    * O usuário deve poder visualizar o preço de cada vinho.
    * O usuário deve visualizar um botão "Comprar" para cada vinho. *(Observação: A funcionalidade de compra em si não está no escopo)*
* **RF004 – Visualização do Rodapé:**
    * O usuário deve poder visualizar informações sobre a Vinharia Agnello, incluindo uma breve descrição e ícones de redes sociais (Instagram, X, Facebook, LinkedIn).
    * O usuário deve poder visualizar uma lista de "Links Rápidos" para diferentes seções do site.
    * O usuário deve poder visualizar uma lista de categorias de "Nossos vinhos".
    * O usuário deve poder visualizar a seção "Novidades" com um texto de incentivo à inscrição.
* **RF005 – Responsividade:**
    * O layout do website deve se adaptar a diferentes tamanhos de tela (desktop, tablet e mobile) para garantir uma boa experiência de visualização em diversos dispositivos.
* **RF006 – Carregamento de Recursos:**
    * Todos os recursos (CSS, JavaScript, imagens, fontes) devem ser carregados corretamente para a exibição completa do website.

5. Regras de Negócio

* **RN001 – Apresentação da História:** A história da vinícola deve ser apresentada de forma concisa e destacar a tradição familiar e o compromisso com a qualidade.
* **RN002 – Destaque dos Valores:** Os valores da vinícola relacionados às uvas, prêmios e sustentabilidade devem ser claramente visíveis na seção "Sobre Nós".
* **RN003 – Seleção de Vinhos no Catálogo:** O catálogo deve apresentar uma seleção dos principais vinhos da Vinharia Agnello.
* **RN004 – Informações dos Vinhos:** As informações apresentadas para cada vinho (nome, safra, descrição, preço) devem ser precisas.
* **RN005 – Links de Navegação:** Os links no menu principal devem direcionar o usuário para as respectivas seções da página. *(Observação: O link "Contato" atualmente não direciona para uma seção específica na estrutura HTML fornecida)*
* **RN006 – Ícones de Redes Sociais:** Os ícones de redes sociais devem representar os perfis da Vinharia Agnello (os links para esses perfis não estão implementados nesta versão).

6. Requisitos Não Funcionais

* **RNF001 – Desempenho:** O website deve carregar de forma rápida e eficiente para garantir uma boa experiência do usuário.
* **RNF002 – Usabilidade:** A navegação e o layout do website devem ser intuitivos e fáceis de usar para todos os públicos.
* **RNF003 – Acessibilidade:** O website deve seguir as diretrizes básicas de acessibilidade para garantir que possa ser utilizado por pessoas com diferentes necessidades.
* **RNF004 – Manutenibilidade:** A estrutura do código (HTML, CSS, JavaScript) deve ser organizada e bem comentada para facilitar futuras atualizações e manutenções.
* **RNF005 – Layout Responsivo:** (Reiterado do RF005) O sistema deve funcionar bem em desktop, tablet e mobile, adaptando seu layout para diferentes resoluções de tela.

7. Técnica de Levantamento de Requisitos

* **Análise da Estrutura HTML Existente:** A equipe de desenvolvimento analisou a estrutura HTML fornecida pelo cliente para identificar as seções e o conteúdo inicial do website.
* **Inferência de Requisitos:** Com base na estrutura HTML e no conhecimento do domínio de websites de vinícolas, foram inferidos os requisitos funcionais e não funcionais necessários para o funcionamento básico do site.
* **Próximos Passos (Sugestão):** Para refinar e expandir os requisitos, uma entrevista com o proprietário (stakeholder) da Vinharia Agnello seria essencial para entender suas necessidades específicas, objetivos de negócio e funcionalidades desejadas para futuras versões do website.
