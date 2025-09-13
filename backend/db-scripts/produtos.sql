-- Criação da tabela products
DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL,
    imagem TEXT NOT NULL,
    preco_original TEXT NOT NULL,
    preco_pix TEXT NOT NULL,
    preco_cartao TEXT NOT NULL,
    link TEXT NOT NULL,
    info TEXT
);

-- Inserção dos itens do catálogo
INSERT INTO products (id, descricao, imagem, preco_original, preco_pix, preco_cartao, link, info) VALUES
(1,
 'Console PlayStation® 5 Slim Edição Digital 1TB Branco - Sony',
 'Playstation5.webp',
 'R$ 4.299,00',
 'R$ 3.384,27',
 'R$ 3.639,00',
 'https://mercadolivre.com/sec/2Xz83Qz',
 'Itens incluídos:

1 Console PlayStation®5 Edição Digital;
1 Controle sem fio DualSense®;
1 SSD de 1TB;
2 bases para suporte horizontal;
1 Cabo HDMI®;
1 Cabo de alimentação de CA;
1 Cabo USB;
Materiais impressos.

Para uso com os seguintes acessórios:
Suporte Vertical
Controle sem fio DualSense®
Base de Carregamento do DualSense®
Headset Sem Fio PULSE 3D™
Controle de Mídia
Câmera HD'
),

(2,
 'Resident Evil 4 Remake Standard Edition PlayStation 5 (Físico)',
 'Midia_Fisica_RE4.webp',
 'R$ 202,40',
 'R$ 121,80',
 'R$ 151,80',
 'https://mercadolivre.com/sec/17LpMnR',
 'RESIDENT EVIL 4 PS5

- Mídia: Física (disco ou cartucho no caso se for Nintendo);
- Console: Compatível com PS5;
- Versão: Nacional;
- Idioma ou Áudio: Inglês, Francês, Espanhol, Português; Legenda ou Texto: Inglês, Francês, Espanhol, Português;
- Jogadores: 1;

CONTEÚDO DA EMBALAGEM:
1 (um) Jogo RESIDENT EVIL 4 PS5;'
),

(3,
 'Controle Playstation 5 sem fio Dualsense Ps5 Cor Branco/Preto',
 'ControlePS5.webp',
 'R$ 459,00',
 'R$ 399,00',
 'R$ 429,00',
 'https://mercadolivre.com/sec/2hK3BBS',
 'O que você precisa saber sobre este produto
Unidades por kit: 1.
Possui Bluetooth.
Tela sensível ao toque.
Controle sem fio.
Compatível com: Computadores.
Com sistema de vibração incorporado.
Conta com manual.
Diversão garantida com o seu controle da PlayStation
Design ergonômico.'
),

(4,
 'Headset Gamer Onikuma B2 Fone Tipo G435 Bt-5.3 Ps5 Ps4 Pc Cor Branco',
 'FonePS5.webp',
 'R$ 225,00',
 'R$ 163,03',
 'R$ 193,03',
 'https://mercadolivre.com/sec/28nL3tX',
 'O que você precisa saber sobre este produto
É monaural.
Tem cancelamento de ruído.
Inclui microfone.
O comprimento do cabo é de 2.2m.'
),

(5,
 'Skin Para Ps5 Adesivo Gta Vi 6 B Premium',
 'SkinGTA6PS5.webp',
 'R$ 42,90',
 'R$ 25,74',
 'R$ 42,90',
 'https://mercadolivre.com/sec/12ux6Ye',
 'Skin ADESIVA premium exclusiva para Playstation 5.

Verifique se a sua versão é FAT, SLIM, com DISCO ou DIGITAL e escolha a opção correta durante a compra.
Oferecemos o acabamento opcional de plastificação, que protege a skin e aumenta a durabilidade. 
Se tiver interesse, nos avise que enviaremos o link do anúncio da plastificação.'
);
