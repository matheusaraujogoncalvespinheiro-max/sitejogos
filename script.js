// Lista de jogos (embutida para funcionar abrindo o index.html direto pelo arquivo local).
const JOGOS = [
  {
    "id": "spore",
    "nome": "Spore Complete Edition",
    "categoria": "Simulação",
    "tamanho": "4 GB",
    "desenvolvedor": "Maxis / Electronic Arts",
    "ano": "2008",
    "descricao": "Crie sua criatura e evolua da célula até a galáxia. Edição completa com Galactic Adventures.",
    "historia": "Spore permite que você conduza o desenvolvimento de uma espécie desde seus primórdios unicelulares em uma sopa primordial até se tornar uma civilização galáctica altamente avançada. O jogo é dividido em 5 estágios evolutivos: Celular, Criatura, Tribo, Civilização e Espaço.\n\nÀ medida que sua espécie evolui, você molda sua anatomia, inteligência, comportamento social, veículos e a arquitetura de suas cidades. Na fase final, viaje por milhares de sistemas solares, faça alianças ou guerras espaciais e tente alcançar o centro da galáxia para desvendar o segredo da existência.",
    "imagem": "img/17390_header.jpg",
    "galeria": [
      "img/17390_header.jpg",
      "img/17390_real1.jpg",
      "img/17390_real2.jpg",
      "img/17390_real3.jpg",
      "img/17390_real4.jpg"
    ],
    "link": "https://download2388.mediafire.com/ier5obwo81jg7n2Xm58BBVvm1bx_5P97aY1Dk8Z-zGutgC_ibWWh9K5aJqg4vOQ_t_-tFRnQp6Xvgv3MsgM00Ffqgp06f910z0cwXCvPdcx_oJADatim6xrtsmYPEAGQA1oyJJtxLtbnG2K7vwOh0M0upQry_8Uj9V6e3m4IfahSNSQ/bows34oelk7i6ix/Spore.Complete.Edition.Multi-RU.Repack.by.z10yded.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/zi2GvqboQfY?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=zi2GvqboQfY",
    "trailerId": "zi2GvqboQfY",
    "preco": 400,
    "moedas": 400
  },
  {
    "id": "fnaf-1",
    "nome": "Five Nights at Freddy's 1",
    "categoria": "Terror",
    "tamanho": "300 MB",
    "desenvolvedor": "Scott Cawthon",
    "ano": "2014",
    "descricao": "O clássico que começou tudo. Sobreviva 5 noites como vigia na Freddy Fazbear's Pizza.",
    "historia": "Em Five Nights at Freddy's, você assume o papel de Mike Schmidt, o novo guarda noturno contratado para trabalhar no turno da madrugada na Freddy Fazbear's Pizza. Durante o dia, o local é uma pizzaria infantil adorada, estrelada pelos mascotes animatrônicos Freddy Fazbear, Bonnie, Chica e Foxy.\n\nPorém, à noite, o comportamento dos robôs se torna imprevisível. Eles entram em um modo de patrulha livre e interpretam qualquer humano acordado como um endoesqueleto sem fantasia, tentando forçá-lo a entrar em um traje de robô repleto de engrenagens e travas mortais. Gerencie sua reserva limitada de energia elétrica para monitorar as câmeras e fechar as portas de segurança antes que seja tarde demais.",
    "imagem": "img/319510_header.jpg",
    "galeria": [
      "img/319510_header.jpg",
      "img/319510_real1.jpg",
      "img/319510_real2.jpg",
      "img/319510_real3.jpg",
      "img/319510_real4.jpg"
    ],
    "link": "https://download2294.mediafire.com/c3lwq34tjnbgwcS_SznOFXay_vIejybpRVTwg9xZL7oZz2Q3GJEofMJs6kEQerUm6YdeMwrVTUTwiQIIyo2kJFv_F6e11scZaj4TUNvnZe_I2NRsauPCIanN2dqQ9FF0SKBjSiSQUAw7H8QLcBwYBfyyb751hz0kW5C1pmDHNiaiuK4/zfz5l9odnpxmnip/FNAF+1.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/RP4UTOek0-Y?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=RP4UTOek0-Y",
    "trailerId": "RP4UTOek0-Y",
    "preco": 100,
    "moedas": 100
  },
  {
    "id": "fnaf-2",
    "nome": "Five Nights at Freddy's 2",
    "categoria": "Terror",
    "tamanho": "400 MB",
    "desenvolvedor": "Scott Cawthon",
    "ano": "2014",
    "descricao": "Novos animatrônicos, máscara de Freddy e a caixa de música. Sobreviva na nova pizzaria.",
    "historia": "Ambientado em 1987, Five Nights at Freddy's 2 apresenta uma nova e aprimorada Freddy Fazbear's Pizza. Os antigos animatrônicos foram desmontados para peças e substituídos pela linha 'Toy', robôs de plástico reluzente equipados com tecnologia avançada de reconhecimento facial conectada a bancos de dados policiais.\n\nNa pele do vigia Jeremy Fitzgerald, você descobre que as portas de proteção do escritório foram removidas. Para sobreviver às investidas dos 11 animatrônicos ativos, você deve colocar a máscara sobressalente do próprio Freddy Fazbear para enganar os robôs, além de manter a caixa de música da Marionete (Puppet) constantemente tocando.",
    "imagem": "img/332800_header.jpg",
    "galeria": [
      "img/332800_header.jpg",
      "img/332800_real1.jpg",
      "img/332800_real2.jpg",
      "img/332800_real3.jpg",
      "img/332800_real4.jpg"
    ],
    "link": "https://download2269.mediafire.com/lihv4qan3d1gbJZiq2K1zKeGKTVZEYlDmq5MVV7ksnhY5lXrnRCDCFQRap-ieFR04yh7M-HN1--9O0_Nz_qW4FXbL6atUpdDNwngeyX95ttq3ru_Zrpg52sygobnSSfCojHVDf3vxUb2zFKY66eRylzDvHv5LS-HBiqzoCUw8N4KoSI/qjfrhac11g4g947/FNAF+2.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/lVPONdZBh6s?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=lVPONdZBh6s",
    "trailerId": "lVPONdZBh6s",
    "preco": 120,
    "moedas": 120
  },
  {
    "id": "fnaf-3",
    "nome": "Five Nights at Freddy's 3",
    "categoria": "Terror",
    "tamanho": "350 MB",
    "desenvolvedor": "Scott Cawthon",
    "ano": "2015",
    "descricao": "30 anos depois, o horror volta na atração Fazbear's Fright com Springtrap à espreita.",
    "historia": "Trinta anos após os acontecimentos que levaram ao fechamento definitivo da pizzaria, os trágicos eventos do passado viraram lendas urbanas. Investidores decidem aproveitar a mística criando o 'Fazbear's Fright: The Horror Attraction', um parque temático macabro reunindo peças autênticas das antigas pizzarias.\n\nDurante as buscas por itens originais, a equipe encontra um único animatrônico preservado: Springtrap. No entanto, Springtrap abriga o cadáver aprisionado de William Afton, o assassino responsável pelas tragédias da franquia. Como vigia noturno da atração, você precisa reiniciar constantemente os sistemas com defeito (câmeras, áudio e ventilação) enquanto evita o ataque mortal de Springtrap.",
    "imagem": "img/354140_header.jpg",
    "galeria": [
      "img/354140_header.jpg",
      "img/354140_real1.jpg",
      "img/354140_real2.jpg",
      "img/354140_real3.jpg",
      "img/354140_real4.jpg"
    ],
    "link": "https://download2296.mediafire.com/b5b8bht9opngW2uJqYJhnijmMtHyghiuLcU-QgKjt2AU90-w25rtRP1qowwBN-0nY5O5dS3nk7yJTh5T5LaP3nWX2rr_xKHXbltKLa-3LJzWyrFcKdOmDKbUzYx1eKc6MvhxKz4utW-t8JZHDh3thC8GOXYpUpOjHxLyGmMWXBPor90/uewnf5hht0fldl2/FNAF+3.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/hdHlIy0W4uU?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=hdHlIy0W4uU",
    "trailerId": "hdHlIy0W4uU",
    "preco": 120,
    "moedas": 120
  },
  {
    "id": "fnaf-4",
    "nome": "Five Nights at Freddy's 4",
    "categoria": "Terror",
    "tamanho": "400 MB",
    "desenvolvedor": "Scott Cawthon",
    "ano": "2015",
    "descricao": "O capítulo final: pesadelos em casa, sem câmeras nem portas. Ouça com atenção.",
    "historia": "Em Five Nights at Freddy's 4, o terror sai das pizzarias e adentra o quarto de uma criança assustada. Sem monitores de vídeo, câmeras de segurança ou painéis elétricos, o jogo foca no puro instinto e na percepção auditiva do jogador.\n\nVocê deve vigiar as portas esquerda e direita, a cama e o armário contra as aterrorizantes versões 'Nightmare' de Freddy, Bonnie, Chica e Foxy. Ouça com extrema atenção a respiração das criaturas nos corredores escuros antes de usar sua lanterna ou fechar a porta para impedir a invasão.",
    "imagem": "img/388090_header.jpg",
    "galeria": [
      "img/388090_header.jpg",
      "img/388090_real1.jpg",
      "img/388090_real2.jpg",
      "img/388090_real3.jpg",
      "img/388090_real4.jpg"
    ],
    "link": "https://download2273.mediafire.com/f3znnodo48cgMJ-U5LlGG5g5iYtEM6yN-qmKSGdVCDsDn7gNOMqUW7SMoCJZ51vvlav2mVBpvMTsWwwOt9p7wEMUfYRjHnkpISI488CQomTrlDSOHSS0SItPJ05I1uEQPFGtZ-Um2yG1RdmUr6Lkl0Bl_8bswjeZ-Z_F-qxDYVb07K8/pes8b90hoidtkwp/FNAF+4.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/A-taWymx1WI?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=A-taWymx1WI",
    "trailerId": "A-taWymx1WI",
    "preco": 130,
    "moedas": 130
  },
  {
    "id": "fnaf-sister-location",
    "nome": "Five Nights at Freddy's: Sister Location",
    "categoria": "Terror",
    "tamanho": "900 MB",
    "desenvolvedor": "Scott Cawthon",
    "ano": "2016",
    "descricao": "Trabalhe no aluguel de animatrônicos da Circus Baby's. Cada noite uma missão diferente.",
    "historia": "Bem-vindo ao Circus Baby's Entertainment and Rental, um complexo subterrâneo altamente tecnológico onde animatrônicos de última geração são preparados para festas de aniversário privadas. Diferente dos jogos anteriores, Sister Location permite livre movimentação por diferentes salas da instalação a cada noite.\n\nContratado como técnico noturno sob as ordens do guia virtual HandUnit, você descobre que os robôs (Circus Baby, Ballora, Funtime Freddy e Funtime Foxy) possuem comportamentos conscientes e planos perigosos para escapar do complexo a qualquer custo.",
    "imagem": "img/506610_header.jpg",
    "galeria": [
      "img/506610_header.jpg",
      "img/506610_real1.jpg",
      "img/506610_real2.jpg",
      "img/506610_real3.jpg",
      "img/506610_real4.jpg"
    ],
    "link": "https://download2277.mediafire.com/qoehco9tl53g9m-fcUufeLLgYb1OipNiJmYnAzd_um58-ntq0r9mjNKyaR5PlIHbIenUPI5eKAp08ZaBJE-zCeE03kFyYAZiA1xgrRW-0-qmEmIeNiH_o0TWYSjtyyoLyzlQUNfaE-HrkzuyNAnYSxDH9nzeTxvQrJ4Wt5yr7xdHcRE/renc6yqr1na6gef/FNAF+SISTER+LOCATION.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/Uw4-bZkxyKQ?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=Uw4-bZkxyKQ",
    "trailerId": "Uw4-bZkxyKQ",
    "preco": 200,
    "moedas": 200
  },
  {
    "id": "fnaf-6",
    "nome": "Freddy Fazbear's Pizzeria Simulator",
    "categoria": "Terror",
    "tamanho": "500 MB",
    "desenvolvedor": "Scott Cawthon",
    "ano": "2017",
    "descricao": "Gerencie sua própria pizzaria de dia e salve animatrônicos à noite. Cuidado com o que aparece.",
    "historia": "Disfarçado sob a aparência de um jogo retrô de 8-bits sobre gerenciamento de restaurantes, Freddy Fazbear's Pizzeria Simulator é o encerramento épico da linha do tempo original da franquia.\n\nDurante o dia, você compra atrações, projeta o leiaute da pizzaria e garante o sucesso financeiro da franquia. Ao final de cada dia, você deve decidir se recolhe e inspeciona animatrônicos destruídos encontrados no beco dos fundos. À noite, sobreviva enquanto realiza a manutenção dos sistemas do restaurante com os robôs salvos perambulando pela tubulação de ar ao seu redor.",
    "imagem": "img/738060_header.jpg",
    "galeria": [
      "img/738060_header.jpg",
      "img/738060_real1.jpg",
      "img/738060_real2.jpg",
      "img/738060_real3.jpg",
      "img/738060_real4.jpg"
    ],
    "link": "https://download2260.mediafire.com/1tj4u6f32dpg46_IUSiW9tQtJGNqWKB2xdcqT_1PEWHIY6pE09oPdWxMKZpno0H6GdrAmlUvNgtX1dvXQED_mMCq1zm3jZxjYZuTD8wJ1M7qZJ_N6KlRNnkqlLCRF3BnSzujyh0VMAdqXCEFE0yB_BNTLn1Qzm3Zr-L3nRRPpLqTZSU/kdzik31qpyst4s5/FNAF+6.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/Z_d71t9g3z0?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=Z_d71t9g3z0",
    "trailerId": "Z_d71t9g3z0",
    "preco": 150,
    "moedas": 150
  },
  {
    "id": "worldbox",
    "nome": "WorldBox - God Simulator",
    "categoria": "Simulação",
    "tamanho": "250 MB",
    "desenvolvedor": "Maxim Karpenko",
    "ano": "2021",
    "descricao": "O simulador de deus definitivo. Crie seu mundo ou destrua-o com poderes divinos. Veja civilizações crescerem e reinos caírem.",
    "historia": "WorldBox é a caixa de areia definitiva de deus. Como uma placa de Petri para civilizações de fantasia, você cria seu próprio mundo e observa como o povo evolui. Gere continentes, ilhas, montanhas e oceanos, e povoie-os com humanos, elfos, anões e orcs.\n\nObserve como aldeias crescem e se tornam vilas e reinos, colonizam novas terras, navegam por oceanos, traem aliados e guerreiam. Lance raios, tornados, terremotos, pragas ou abençoe com bênçãos. Você é livre para ajudar ou apenas assistir o caos. Cada partida gera histórias emergentes únicas — sem roteiro, apenas sistemas vivos interagindo.",
    "imagem": "img/1206560_header.jpg",
    "galeria": [
      "img/1206560_header.jpg",
      "img/1206560_real1.jpg",
      "img/1206560_real2.jpg",
      "img/1206560_real3.jpg",
      "img/1206560_real4.jpg"
    ],
    "link": "https://www.mediafire.com/file/5kltb5d7gxlzhbe/WorldBox+-+God+Simulator.url/file",
    "trailer": "https://www.youtube-nocookie.com/embed/V2B8BKP8S_M?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=V2B8BKP8S_M",
    "trailerId": "V2B8BKP8S_M",
    "preco": 250,
    "moedas": 250
  },
  {
    "id": "nfsu2",
    "nome": "Need for Speed Underground 2",
    "categoria": "Corrida",
    "tamanho": "2 GB",
    "desenvolvedor": "EA Black Box",
    "ano": "2004",
    "descricao": "O clássico da tunagem e rachas noturnos em Bayview. Personalize seu carro e domine a cidade.",
    "historia": "Need for Speed Underground 2 leva você para Bayview, uma cidade aberta dividida em cinco bairros interconectados — de Coal Harbor ao Aeroporto. Após ser chamado por Rachel Teller, você chega para se vingar de Caleb Reece, líder da Wraiths, que sabotou seu carro.\n\nExplore livremente a cidade para encontrar lojas de tuning, corridas de rua, desafios de URL, drift, drag e circuitos. Cada vitória rende dinheiro e respeito, desbloqueando peças visuais e de performance — de aerofólios e neon a turbos e suspensão. Monte o carro dos sonhos, enfrente chefes de cada área e torne-se o rei das ruas de Bayview.",
    "imagem": "img/nfsu2_header.jpg",
    "galeria": [
      "img/nfsu2_header.jpg",
      "img/nfsu2_real1.jpg",
      "img/nfsu2_real2.jpg",
      "img/nfsu2_real3.jpg",
      "img/nfsu2_real4.jpg"
    ],
    "link": "https://www.mediafire.com/file/5h3742ho9a8b0o4/NFSU2.rar/file",
    "trailer": "https://www.youtube-nocookie.com/embed/3h16a3p-aRE?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=3h16a3p-aRE",
    "trailerId": "3h16a3p-aRE",
    "preco": 300,
    "moedas": 300
  },
  {
    "id": "little-nightmares-1",
    "nome": "Little Nightmares 1",
    "categoria": "Terror",
    "tamanho": "10 GB",
    "desenvolvedor": "Tarsier Studios",
    "ano": "2017",
    "descricao": "Fuja da Bocarra e sobreviva aos pesadelos grotescos de Little Nightmares. Stealth e horror em um mundo de bonecos gigantes.",
    "historia": "Em Little Nightmares, você controla Six, uma menina de capa amarela presa na Bocarra — um enorme e sinistro navio-resort habitado por criaturas famintas e deformadas. Sem poderes especiais, sua única arma é a furtividade, a inteligência e a luz do seu isqueiro.\n\nExplore cozinhas grotescas onde chefs gêmeos preparam banquetes humanos, fuja da longa e sinistra Jeanne e dos hóspedes glutões que devoram tudo. Cada cenário é um quebra-cabeça ambiental onde每一 detalhe conta. A narrativa sem diálogos fala sobre fome, ganância e a coragem de uma criança contra um mundo que a quer consumir.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/424840/facf9a7a675c6d7f210d96d6b111caffe0386cd5/header.jpg?t=1773135169",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/424840/facf9a7a675c6d7f210d96d6b111caffe0386cd5/header.jpg?t=1773135169",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/424840/8942672a817424d426e65ade0253e428a3f449ee/ss_8942672a817424d426e65ade0253e428a3f449ee.1920x1080.jpg?t=1773135169",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/424840/659c0e9407e6886ed3e27320db598274c0e352a2/ss_659c0e9407e6886ed3e27320db598274c0e352a2.1920x1080.jpg?t=1773135169",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/424840/24d7518ab72df4608de04f4ad4bc04ee479e3911/ss_24d7518ab72df4608de04f4ad4bc04ee479e3911.1920x1080.jpg?t=1773135169",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/424840/351e2a93274cadae4952a1d05847c9a4ea723129/ss_351e2a93274cadae4952a1d05847c9a4ea723129.1920x1080.jpg?t=1773135169",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/424840/f44ce606d6d5cb2c2d04c32488c3c751bfb3747c/ss_f44ce606d6d5cb2c2d04c32488c3c751bfb3747c.1920x1080.jpg?t=1773135169"
    ],
    "link": "https://download1588.mediafire.com/gfgi6rnvg3og6ID3HMaiSIpSLMtu2Vzsf5eIDpv577Z8dD3JQPvg-7WtZvzSSYbXi8zjjLyxrVZLReZdQPGO0noiO9Um5E2gQyr-NfkYkduhdQ_QfS_XVehji4st9v6h3UdmMTxmcUwX4fdURx0-jX3pCCTMoC79VmAsL4SvKQU3/funr3vs1i6qm735/Little-Nightmares.%28ALL.DLCs%29+By+G.A.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/RHcpWTu606g?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=RHcpWTu606g",
    "trailerId": "RHcpWTu606g",
    "preco": 80,
    "moedas": 80
  },
  {
    "id": "little-nightmares-2",
    "nome": "Little Nightmares 2",
    "categoria": "Terror",
    "tamanho": "4 GB",
    "desenvolvedor": "Tarsier Studios",
    "ano": "2021",
    "descricao": "Acompanhe Mono e Six em uma cidade distorcida pelo sinal da Torre. Mais terror, puzzles e cooperação silenciosa.",
    "historia": "Little Nightmares II expande o pesadelo além da Bocarra. Você é Mono, um menino de saco de papel na cabeça, que desperta em uma floresta sombria e encontra Six. Juntos, cruzam a Cidade Pálida, um lugar petrificado por uma transmissão hipnótica vinda da Torre de Sinais.\n\nEnfrente o Professor macabro na escola, o Doutor hospitalar e espectadores de televisões que quebram pescoços. Com mecânicas de combate (martelos, canos) e puzzles cooperativos, o jogo revela a origem da distorção e o destino trágico de Six e Mono — um ciclo de horror que se alimenta de si mesmo.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/860510/header.jpg?t=1730127763",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/860510/header.jpg?t=1730127763",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/860510/ss_b7bdc32338c0261ee0773ad0b13024c853a2141c.1920x1080.jpg?t=1730127763",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/860510/ss_a17e682e91c93695f2855be46428c4fc04c997f3.1920x1080.jpg?t=1730127763",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/860510/ss_a2f4c8ad95844656764d6b7d3a033fc787e82144.1920x1080.jpg?t=1730127763",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/860510/ss_fa043ec9f1f044e57085bbff9b5200d60fa05d91.1920x1080.jpg?t=1730127763",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/860510/ss_6da5e5f073542d9e47d0d0bd0fe813010f8fb9a7.1920x1080.jpg?t=1730127763"
    ],
    "link": "https://download1583.mediafire.com/ta8d6df7pztgh8eerR-pOmeP43h-r5FBJ2-QNypEkAJkUs8q38mMWJRGe75nHmkWfO8PHETICHc1I0PsyKGr0NEEPIoCp50T45kf4IzWjc1__bbBs6ssbf9t_khuCwIpXn1k6kafSr5IqnRRXjXzk24y1dfnBPs5I4GqcEYQOLu3XCY/1jcflwcxl4qswqe/Little.Nightmares.2+By+G.A.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/mXp9w2C6Y38?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=mXp9w2C6Y38",
    "trailerId": "mXp9w2C6Y38",
    "preco": 90,
    "moedas": 90
  },
  {
    "id": "hollow-knight",
    "nome": "Hollow Knight",
    "categoria": "Aventura",
    "tamanho": "9 GB",
    "desenvolvedor": "Team Cherry",
    "ano": "2017",
    "descricao": "Explore Hallownest, um reino em ruínas de insetos. Metroidvania lendário com combate preciso e segredos por todo lado.",
    "historia": "Hollow Knight leva você a Hallownest, um vasto reino subterrâneo outrora próspero e agora consumido por uma Infecção misteriosa que enlouquece seus habitantes. Como o Cavaleiro silencioso, você desce por cavernas de cristais, cidades esquecidas e templos sagrados.\n\nDesbloqueie habilidades como dash, escalada e feitiços de alma, enfrente chefes épicos como o Hollow Knight e a Radiância, e descubra a verdade sobre o Rei Pálido, o Vazio e o sacrifício que mantém o reino selado. Cada canto guarda história ambiental e desafios de plataforma implacáveis.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/3c3489495136b26b34f8a9543c7f5645b99d388c/header.jpg?t=1776125684",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/3c3489495136b26b34f8a9543c7f5645b99d388c/header.jpg?t=1776125684",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_5384f9f8b96a0b9934b2bc35a4058376211636d2.1920x1080.jpg?t=1776125684",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_d5b6edd94e77ba6db31c44d8a3c09d807ab27751.1920x1080.jpg?t=1776125684",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_a81e4231cc8d55f58b51a4a938898af46503cae5.1920x1080.jpg?t=1776125684",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_62e10cf506d461e11e050457b08aa0e2a1c078d0.1920x1080.jpg?t=1776125684",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_bd76bd88bc5334ee56ae3d5f0d8dec4455e8e3b8.1920x1080.jpg?t=1776125684"
    ],
    "link": "https://download2390.mediafire.com/a71lpr5czeagcneSE-BbtOzFAqQah7Dl6WIEfuDdkXcI46ovsVPPz0OvxNt8MEtA8lAiju5-L32NglNkfU5j_nLermMJ4mPwhumfxRO9EDLII-YrNxnOMApMRlKB6tX82fIc29KiKdWMIDlHCWugSBMeZcWxEI6cY77-5e7BhaLJAZY/q8orn0u12emselj/Hollow.Knight.v7442300.zip",
    "trailer": "https://www.youtube-nocookie.com/embed/UAO2urG23S4?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=UAO2urG23S4",
    "trailerId": "UAO2urG23S4",
    "preco": 90,
    "moedas": 90
  },
  {
    "id": "hollow-knight-silksong",
    "nome": "Hollow Knight: Silksong",
    "categoria": "Aventura",
    "tamanho": "5 GB",
    "desenvolvedor": "Team Cherry",
    "ano": "2025",
    "descricao": "A princesa Hornet em aventura inédita. Escale Pharloom, um reino de seda e canção, com acrobacias e combate veloz.",
    "historia": "Hollow Knight: Silksong coloca você no papel de Hornet, a princesa-protetora de Hallownest, capturada e levada ao reino distante de Pharloom. Presa em uma terra de seda, fiandeiras e peregrinos, ela precisa escalar até a cidadela no topo para descobrir por que foi levada.\n\nCom movimentação acrobática (dash aéreo, escalada em paredes, agulha e linha), Hornet enfrenta insetos corrompidos, tece ferramentas e descobre templos de seda. O jogo mantém o DNA metroidvania mas com ritmo mais rápido, missões e um mundo vertical deslumbrante feito para speedrun e exploração profunda.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/7983574d464e6559ac7e24275727f73a8bcca1f3/header.jpg?t=1776125736",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/7983574d464e6559ac7e24275727f73a8bcca1f3/header.jpg?t=1776125736",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/26950369fe4b03c2268620eb9815c8a246aa0b06/ss_26950369fe4b03c2268620eb9815c8a246aa0b06.1920x1080.jpg?t=1776125736",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/09ccaa6c16f158f9df8298feb5d196098506a028/ss_09ccaa6c16f158f9df8298feb5d196098506a028.1920x1080.jpg?t=1776125736",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/d1a893ec6357b347a55ed929833ba793b57a79d2/ss_d1a893ec6357b347a55ed929833ba793b57a79d2.1920x1080.jpg?t=1776125736",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/856e33e755a0b9a785c645d116036516ea08812b/ss_856e33e755a0b9a785c645d116036516ea08812b.1920x1080.jpg?t=1776125736",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/8e09f2b2eedd3fa9b4479dd5c26d8bdf60562478/ss_8e09f2b2eedd3fa9b4479dd5c26d8bdf60562478.1920x1080.jpg?t=1776125736"
    ],
    "link": "https://download2390.mediafire.com/rjje54e8snwgf4Z03bQ4bBYfMhGrHfCEUgAEnCji9i0XUo-N_sFgTzOegmoFqnAaHK1N5F1FiBUlXLGw6FbTwOy8_CNfJ6YENv9yDLz3I8Dx0Ar3w6WpXSeD3nxVLXZ64ySkI6Wt_nsjmViYLAnfS_9nMqPTRXSn3BgCRCGNqvoA8WY/vennv4topa2sm46/Hollow+Knight+Silksong.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/eQBbmPM6n2M?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=eQBbmPM6n2M",
    "trailerId": "eQBbmPM6n2M",
    "preco": 120,
    "moedas": 120
  },
  {
    "id": "cuphead-dlc",
    "nome": "Cuphead + DLC",
    "categoria": "Ação",
    "tamanho": "4 GB",
    "desenvolvedor": "Studio MDHR",
    "ano": "2017",
    "descricao": "Run & gun desenhado à mão dos anos 30. Enfrente chefes absurdos com Cuphead, Mugman e a DLC The Delicious Last Course.",
    "historia": "Cuphead é uma carta de amor aos desenhos animados dos anos 1930. Cuphead e Mugman apostam suas almas com o Diabo nos dados e, ao perderem, precisam cobrar contratos de outros devedores para salvar a pele. Cada chefe é um show de animação quadro a quadro.\n\nA DLC The Delicious Last Course adiciona a Ilha Inkwell IV, a nova personagem Ms. Chalice e chefes como o Padeiro Salgado. Com trilha de jazz e dificuldade punitiva mas justa, é um teste de reflexos, padrão e arte visceral.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg?t=1709068852",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg?t=1709068852",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_e3096a5555cb77d88db165c83d5ef3a24af1354a.1920x1080.jpg?t=1709068852",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_615455299355eaf552c638c7ea5b24a8b46e02dd.1920x1080.jpg?t=1709068852",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_483fb089be0093beeef03525276803a9ca4f66a1.1920x1080.jpg?t=1709068852",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_48477e4a865827aa0be6a44f00944d8d2a3e5eb9.1920x1080.jpg?t=1709068852",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_380296effbf1073bbedfd480e50cf246eb542b66.1920x1080.jpg?t=1709068852"
    ],
    "link": "https://download2389.mediafire.com/8j8i9xzlarsgOqDxI7KVuIXgh8DmpfAXRW83B8-xWBqIqx1Alb-2fJ2318VsbqNGvLPm3NSPUpQKag7rKWc8wBa1KZE9hBZ7POanIK-bPUX9N_FvSYgW6DNgDlD3B-zayLgGR-YueOhSOX29qLW0_4p1VqzarEVY4FV2L-WL4mT7-tw/vctk3mxbegot85b/Cuphead%2BDLC+%28PT-BR+1.3.4%29+By-RuDroid777.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/c68yER7k674?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=c68yER7k674",
    "trailerId": "c68yER7k674",
    "preco": 90,
    "moedas": 90
  },
  {
    "id": "plants-vs-zombies-replanted",
    "nome": "Plants vs. Zombies: Replanted",
    "categoria": "Estratégia",
    "tamanho": "1 GB",
    "desenvolvedor": "PopCap / EA",
    "ano": "2024",
    "descricao": "O tower defense mais amado, replantado em HD. Defenda seu jardim com girassóis, ervilhas e cerejas explosivas.",
    "historia": "Plants vs. Zombies: Replanted traz de volta a guerra mais carismática entre flora e mortos-vivos. Dave, seu vizinho maluco, precisa de ajuda para proteger o quintal de hordas de zumbis com chapéu de cone, balde e vara de futebol.\n\nMonte estratégias com plantas que atiram, congelam, explodem e hipnotizam. Modos Puzzle, Survival e Jardins Zen garantem dezenas de horas. A versão Replanted traz gráficos remasterizados, cooperação local e jardinagem relaxante entre as hordas.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3590/header.jpg?t=1777394124",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3590/header.jpg?t=1777394124",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3590/0000008150.1920x1080.jpg?t=1777394124",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3590/0000008151.1920x1080.jpg?t=1777394124",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3590/0000008152.1920x1080.jpg?t=1777394124",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3590/0000008153.1920x1080.jpg?t=1777394124",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3590/0000008154.1920x1080.jpg?t=1777394124"
    ],
    "link": "https://download1529.mediafire.com/kgayfvrkz21glE8FZ8ekgouZpNo1jQt6ABHVevzFHAfjviCCMXOCKWhJzRLW-NB6p3ekZbphNfpWWdAeEVqZgaVBUoV3a5eAT5w3X0htTXlWe4hlZsIrnKxO1ggSJ8Xz4oMt8AjFDYvn6Jb4eDNjAE3EnaWMN4sWZpiNTnqvnNgS/3i2ny867fcvb1ry/Plants.vs.Zombies.Replanted-GoldBerg.zip",
    "trailer": "https://www.youtube-nocookie.com/embed/CHabZ_-4L1w?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=CHabZ_-4L1w",
    "trailerId": "CHabZ_-4L1w",
    "preco": 40,
    "moedas": 40
  },
  {
    "id": "minecraft-bedrock-edition",
    "nome": "Minecraft Bedrock Edition",
    "categoria": "Simulação",
    "tamanho": "1 GB",
    "desenvolvedor": "Mojang Studios",
    "ano": "2017",
    "descricao": "O mundo infinito de blocos. Construa, sobreviva, explore e jogue com amigos no cross-play Bedrock.",
    "historia": "Minecraft Bedrock Edition é a porta definitiva para o universo cúbico mais jogado do planeta. No modo Sobrevivência, colete madeira, minere diamantes, enfrente Creepers e o Ender Dragon. No Criativo, voe e ergue castelos sem limites.\n\nCom cross-play entre PC, console e mobile, Realms, addons e Ray Tracing no Bedrock, é o mesmo Minecraft só que otimizado, com mercado de skins e atualizações constantes de biomas, criaturas e redstone.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1501750/c793d85dc133f22112c7283b79dd89e2c0aa58a4/header.jpg?t=1786951564",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1501750/c793d85dc133f22112c7283b79dd89e2c0aa58a4/header.jpg?t=1786951564",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1501750/741bdea1df8f5b7e694cd9cf1a055f61da23aa7a/ss_741bdea1df8f5b7e694cd9cf1a055f61da23aa7a.1920x1080.jpg?t=1786951564",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1501750/ss_dccd501a0b49d5ab317cf3c3d9073e5968db2af9.1920x1080.jpg?t=1786951564",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1501750/ecb5a5df054344bf681282edb3ed76499e675605/ss_ecb5a5df054344bf681282edb3ed76499e675605.1920x1080.jpg?t=1786951564",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1501750/ss_37e77b49edf7cb0ea8582197eb0ea98628c6803a.1920x1080.jpg?t=1786951564",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1501750/ss_1114c931ca9a4f671a2a7d22112abe3340df43d1.1920x1080.jpg?t=1786951564"
    ],
    "link": "https://download1638.mediafire.com/p8cruhcb902gh7epIzOrMGUVix_aOtZJK3aPTNNaIaaLykYB_g-idvcobQknR-4A6FEGium7zNmuzahB07GV2jhs3E7zqiws-reyebQspGJU-RdRtp3GnLkDvz9KvLbRBGry5NIl5KinEUe4GxtZap_EDDSXr2BOQ7AvlbViXBbx2KI/ym88opgp1c5z76q/MinecraftBedrockEdition%5BFitGirl+Repack%5D.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/MmB9b5njVbA?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=MmB9b5njVbA",
    "trailerId": "MmB9b5njVbA",
    "preco": 100,
    "moedas": 100
  },
  {
    "id": "stardew-valley",
    "nome": "Stardew Valley",
    "categoria": "Simulação",
    "tamanho": "500 MB",
    "desenvolvedor": "ConcernedApe",
    "ano": "2016",
    "descricao": "Herança de fazenda, vida simples e segredos da cidade. Plante, pesque, case e explore as minas.",
    "historia": "Stardew Valley começa quando você abandona o emprego sufocante na Joja e herda a velha fazenda do seu avô no Vale do Orvalho. Com ferramentas enferrujadas e algumas moedas, você transforma mato em plantação, cria galinhas e descobre que a vila está cheia de vidas e mistérios.\n\nFaça amizade com 30+ moradores, cada um com história e coração, participe de festivais, desça 120 andares das minas contra slimes, e decida entre apoiar o mercado local ou a corporação Joja. Relaxante, profundo e viciante.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg?t=1786554168",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg?t=1786554168",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.1920x1080.jpg?t=1786554168",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_9ac899fe2cda15d48b0549bba77ef8c4a090a71c.1920x1080.jpg?t=1786554168",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_4fa0866709ede3753fdf2745349b528d5e8c4054.1920x1080.jpg?t=1786554168",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_d836f0a5b0447fb6a2bdb0a6ac5f954949d3c41e.1920x1080.jpg?t=1786554168",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_10628b4a811c0a925a1433d4323f78c7017dbbe4.1920x1080.jpg?t=1786554168"
    ],
    "link": "https://download2388.mediafire.com/lvl9qj2rhm3gx9kZgVirbxoAW38UERlbClfKJdeBxVaPWdljFAyBKgLq6ORKx15zNzl6jkfbYZ-BHP46rW9o-406yqYBTP5gccK8weWmbHgga8uB11tb0m6nCgDcOGtoVTfsr0a6rFkD6GA1mWSPp0vxYeqtSIy4KVQfSI3AvncTL9E/qww4a0x03chzvdh/Stardew+Valley+v1.6.15+%282%29.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/8S_j-hV8Q00?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=8S_j-hV8Q00",
    "trailerId": "8S_j-hV8Q00",
    "preco": 80,
    "moedas": 80
  },
  {
    "id": "no-i-m-not-a-human",
    "nome": "No, I'm not a Human",
    "categoria": "Terror",
    "tamanho": "2 GB",
    "desenvolvedor": "Trioskaz",
    "ano": "2025",
    "descricao": "Horror psicológico na porta. Decida quem entra no seu abrigo durante o apocalipse. Nem todos são humanos.",
    "historia": "No, I'm Not a Human é um jogo de inspeção e paranoia. O sol ficou mortal, visitantes batem à sua porta pedindo abrigo no seu bunker. Você precisa observar detalhes: dentes demais, olhos errados, pele estranha. Use raio-X e interrogue.\n\nCada escolha é irreversível. Deixar um Visitante entrar pode condenar todos; recusar um humano inocente pesa na consciência. Com múltiplos finais, atmosfera lo-fi e áudio perturbador, o jogo brinca com sua empatia e medo de confiar.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3180070/fadebc14211b17b5a6603926612ead9294cad9ce/header.jpg?t=1782490040",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3180070/fadebc14211b17b5a6603926612ead9294cad9ce/header.jpg?t=1782490040",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3180070/9c147177c6a51ec3e354e9e8964c95c86dc9a238/ss_9c147177c6a51ec3e354e9e8964c95c86dc9a238.1920x1080.jpg?t=1782490040",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3180070/3e6ae30c9be167959e94b3bfdf69e271c350b423/ss_3e6ae30c9be167959e94b3bfdf69e271c350b423.1920x1080.jpg?t=1782490040",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3180070/20a1516849b25cb3e1de4609642510f8d8375122/ss_20a1516849b25cb3e1de4609642510f8d8375122.1920x1080.jpg?t=1782490040",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3180070/ee2666c2237c459fa0f521fa0e25dae3daf6313a/ss_ee2666c2237c459fa0f521fa0e25dae3daf6313a.1920x1080.jpg?t=1782490040",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3180070/9fa5666773b0cb493f120834e0659c30592e6a9d/ss_9fa5666773b0cb493f120834e0659c30592e6a9d.1920x1080.jpg?t=1782490040"
    ],
    "link": "https://download946.mediafire.com/dmkzkqzcpsjgfF5BXggexGyfjK_VmaJHXNBlRSGTmufxBfFqZTAxnchYG-06KcTQaR8f9QX2xFL6D1XHikbxM_cq_8ArfpAR_0S_v7-aqau69NSIgViiJP58ZsonfLexoh-_liapajtnvLNRZ-l_bAoAtYAQQAZoHRgNar7IoN4cJEA/utw6e2lsq7bs8i6/No.Im.not.a.Human.v1.2.11-P2P.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/9u4V-f_2gS0?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=9u4V-f_2gS0",
    "trailerId": "9u4V-f_2gS0",
    "preco": 50,
    "moedas": 50
  },
  {
    "id": "garry-s-mod",
    "nome": "Garry's Mod",
    "categoria": "Simulação",
    "tamanho": "5 GB",
    "desenvolvedor": "Facepunch Studios",
    "ano": "2006",
    "descricao": "A caixa de areia definitiva na Source. Physgun, mods, TTT, Prop Hunt e criatividade sem limites.",
    "historia": "Garry's Mod é o playground infinito da engine Source. Sem objetivos, você recebe physgun, toolgun e acesso a tudo de Half-Life 2 e da Workshop: construa carros, naves, máquinas de Rube Goldberg ou filme machinimas.\n\nMas o coração são os modos: Trouble in Terrorist Town, Prop Hunt, DarkRP, Murder. Com milhares de addons, Garry's Mod é uma plataforma de criação onde comunidades inteiras nasceram e onde qualquer ideia vira jogo.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/header.jpg?t=1776868682",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/header.jpg?t=1776868682",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/ss_af060d0a9aeb6598e154c9704ce250b0e63b2266.1920x1080.jpg?t=1776868682",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/ss_d314d7dba0987b3e7f49154964bda0ae74ee5161.1920x1080.jpg?t=1776868682",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/ss_3d320f333fb74413911cbc2bffae9bdda683e2ec.1920x1080.jpg?t=1776868682",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/ss_12741a4344b5cfee33726ae219476c8634517f7d.1920x1080.jpg?t=1776868682",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/ss_74a181b4584a04c88ee316df31a850ab2810fb79.1920x1080.jpg?t=1776868682"
    ],
    "link": "https://download1072.mediafire.com/5cj56tk0m2zg3_HgqwPas0qiJj14PQ6MyMvJ77ikXxvg9dEU2JdU8T3BVEwVd24iCjQwZ8vS0npai3J27TPZz3IgPavjE0jJAd9PQThB9Hzi4NyFxX8XeavweJ-fv-3d4VpMGN_LKelEcUAYtR_psUBtmpMeT8hdh16wdt-uL8WI3AQ/wh49wbga3lxervx/Garrys.Mod.Build.17902109.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/tau732w9sAQ?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=tau732w9sAQ",
    "trailerId": "tau732w9sAQ",
    "preco": 60,
    "moedas": 60
  },
  {
    "id": "farming-simulator-17",
    "nome": "Farming Simulator 17",
    "categoria": "Simulação",
    "tamanho": "6 GB",
    "desenvolvedor": "GIANTS Software",
    "ano": "2016",
    "descricao": "Assuma sua fazenda em Goldcrest Valley. Plantio, colheita, gado e tratores licenciados.",
    "historia": "Farming Simulator 17 traz a vida no campo para o seu PC com John Deere, Case e New Holland licenciados. Arar, semear, fertilizar e colher trigo, canola e girassol em estações dinâmicas.\n\nCrie porcos, ovelhas e vacas, venda leite, transporte toras e expanda a fazenda. Com multiplayer cooperativo e mods da comunidade, é o simulador mais querido para quem busca relaxar ao som do trator.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/447020/header.jpg?t=1658488796",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/447020/header.jpg?t=1658488796",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/447020/ss_5ee730132ca9e9afad7b5970943a2431f319c2ec.1920x1080.jpg?t=1658488796",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/447020/ss_6449904e286d6159b4e176d58ee9f2560416afd5.1920x1080.jpg?t=1658488796",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/447020/ss_f5f704c23c0f951a16dce15f9ff598ae837e2be5.1920x1080.jpg?t=1658488796",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/447020/ss_a37f40e05bf659c323bd15dec70c3350bbdd87c1.1920x1080.jpg?t=1658488796",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/447020/ss_be2bf95447e476cb856d8b78e775f2b571db3435.1920x1080.jpg?t=1658488796"
    ],
    "link": "https://download2352.mediafire.com/ctegtuodjpeghREiO_8bR8oqx2zFuYj7beENtaqPH2Pizgm7gGg5cNVeU9lakR8-ZydCgUvVhszC8rxdxW8_9Ri2_IrV6-jkMwfJrRN1V43Ere3I2EtgD3GSdPbQLyQMm8DmjM3y1PU6yGMQAobiX-LLWEvG_WzmuDIUArQUQR-it6U/6duc1gyrxeauhah/Farming+Simulator+17+v1.5.3.1.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/qc5wPby_94s?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=qc5wPby_94s",
    "trailerId": "qc5wPby_94s",
    "preco": 40,
    "moedas": 40
  },
  {
    "id": "brotato",
    "nome": "Brotato",
    "categoria": "Ação",
    "tamanho": "300 MB",
    "desenvolvedor": "Blobfish",
    "ano": "2023",
    "descricao": "Sobreviva a hordas alienígenas com uma batata armada até os dentes. Roguelite top-down com builds insanas.",
    "historia": "Brotato é você: uma batata que é a única capaz de manejar 6 armas ao mesmo tempo enquanto naves alienígenas caem. Sobreviva a ondas de 20 segundos a 10 minutos, escolhendo entre 50+ armas e itens.\n\nCada run é uma build maluca: espingarda + desvio, lança-chamas + vida, ou batata pacifista que só corre. Com humor e progressão viciante, é Vampire Survivors com batata protagonista.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942280/f98281910016f8924be37cce3d4b119f5223a358/header.jpg?t=1789029155",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942280/f98281910016f8924be37cce3d4b119f5223a358/header.jpg?t=1789029155",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942280/ss_79be0eea0299da76bc50cef160fb669509f74e0b.1920x1080.jpg?t=1789029155",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942280/ss_61ad3d242282311207828c1a7d87c1c9d7b4d8bf.1920x1080.jpg?t=1789029155",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942280/ss_9d7d1532397e65d39a3b63e3b25bd3adf7a81b37.1920x1080.jpg?t=1789029155",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942280/ss_8d4467bb3278d7f50bf457337bbe76d0053ebd83.1920x1080.jpg?t=1789029155",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942280/ss_d4b4c0b552e655169719e35c964765bd27d05900.1920x1080.jpg?t=1789029155"
    ],
    "link": "https://download1501.mediafire.com/cahbk51cbevghZTOqsl212-qU07qvwRZ4MAaR7bYguIwa4VaiXDpYFpCkkTKQQCpPdmU3hBvc_YJ3iFF1D7aFxnKT5LkymDGl5yO7i7Ui8MaBd81Tg-5JxTLl6FqaOsclI7OCZrhuleTbiXDPtKu466toZJ4_3wg5sueHpXkv1pfrsg/1oiryioeoybr5wa/Brotato.Build.22162077.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/H1v7Xz03p6I?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=H1v7Xz03p6I",
    "trailerId": "H1v7Xz03p6I",
    "preco": 40,
    "moedas": 40
  },
  {
    "id": "limbo",
    "nome": "LIMBO",
    "categoria": "Aventura",
    "tamanho": "500 MB",
    "desenvolvedor": "Playdead",
    "ano": "2010",
    "descricao": "Um menino acorda numa floresta monocromática. Plataforma puzzle silencioso e macabro.",
    "historia": "LIMBO é uma jornada silenciosa em preto e branco. Um menino acorda na beira de uma floresta escura à procura de sua irmã. Sem tutoriais, você empurra caixas, desvia de armadilhas de urso e foge de uma aranha gigante.\n\nA atmosfera pesa com sombras e serras mortais. Cada puzzle mata em tentativas e erro, mas nunca parece injusto. O final ambíguo gerou teorias por anos — é purgatório, sonho ou morte?",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/48000/header.jpg?t=1761819450",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/48000/header.jpg?t=1761819450",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/48000/ss_d33513ed37acf1073ea92f182b76e165101bfdac.1920x1080.jpg?t=1761819450",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/48000/ss_402b32434e4bb1a8445397aa24b1b893fe3d257f.1920x1080.jpg?t=1761819450",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/48000/ss_a62bc173abb93fbc12dbb6b8d366524a43c1356f.1920x1080.jpg?t=1761819450",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/48000/ss_a9d219f68ed392daba5e848c55dd9814ee3483b2.1920x1080.jpg?t=1761819450",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/48000/ss_4fd6a8dfb40b1a061dec596bfafea10063e70ea0.1920x1080.jpg?t=1761819450"
    ],
    "link": "https://download1075.mediafire.com/czmmps9pamhgm1W5_gcRxiH1iZ670asMGXuWuZTOrfo-lKLJjqTSt5ftNd68zViqsEe6vRoLF3r9B64SABTzZpZ3Yp07zm56wol2OWgek4bRolVjqgm9cxddLC0o86XXypMM2lCGJqignxDddF7AfWdBRFF0dKQrCY3d6LB9Bl3B4Yk/4oqbiojyw4baa8p/LIMBO.v2025.09.12.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/tvg7wT0y11U?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=tvg7wT0y11U",
    "trailerId": "tvg7wT0y11U",
    "preco": 50,
    "moedas": 50
  },
  {
    "id": "unpacking",
    "nome": "Unpacking",
    "categoria": "Casual",
    "tamanho": "1 GB",
    "desenvolvedor": "Witch Beam",
    "ano": "2021",
    "descricao": "Conte uma vida desfazendo caixas. Zen, pixel art e storytelling ambiental tocante.",
    "historia": "Unpacking conta uma vida inteira sem palavras, só desfazendo mudanças. Da infância ao primeiro apartamento, quarto de universidade, amor, separação e novo lar, cada objeto tem lugar e memória.\n\nVocê aprende quem é a protagonista pelos livros na estante, pelos ursinhos que ficam ou vão, pelo espaço que um parceiro ocupa. É meditativo, premiado e como terapia arrumando gavetas.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1135690/header.jpg?t=1789426289",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1135690/header.jpg?t=1789426289",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1135690/ss_b32bfdd3f68e1f9e264bd37e10a464629ca034f8.1920x1080.jpg?t=1789426289",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1135690/ss_9b358510285a4b70e446237de5996bc434415c01.1920x1080.jpg?t=1789426289",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1135690/ss_8ad1858b98d2a04212a44b65ce2ae199e02a87cd.1920x1080.jpg?t=1789426289",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1135690/ss_e0be82259f402c277973c5d0c4f2a22d01d9b1c2.1920x1080.jpg?t=1789426289",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1135690/ss_e63c93af0d56632ed0c6ddb0e566725dbb0e9f3a.1920x1080.jpg?t=1789426289"
    ],
    "link": "https://download1077.mediafire.com/gw1jafrgj1kgWHSdyiAK4JvcGVzkFR3Nl6TgK1NeYYrUeDcMscYezY6vESw5GDn1U5sFxSix_zt0S2Hc_S4Cf-JZtPJnWKKH_kPTag0BGcRDPl86WEyDLLA9lGNDXLHy6waweV192VLbSUhrPXwSRACR1ORutpQU9ZVnlEM_e4gzups/wwakg2m0pz1r8nc/Unpacking.Build.8189788.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/SRGxfupep60?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=SRGxfupep60",
    "trailerId": "SRGxfupep60",
    "preco": 35,
    "moedas": 35
  },
  {
    "id": "farming-simulator-19",
    "nome": "Farming Simulator 19",
    "categoria": "Simulação",
    "tamanho": "8 GB",
    "desenvolvedor": "GIANTS Software",
    "ano": "2018",
    "descricao": "Gráficos renovados, John Deere e cavalos. Fazenda americana e europeia em mundo aberto.",
    "historia": "Farming Simulator 19 evolui tudo do 17: motor gráfico novo, efeito de solo, cavalos para cavalgar e fazendas em Ravenport (EUA) e Felsbrunn (Alemanha). Algodão e aveia entram na rotação.\n\nAlugue ou compre mais de 300 veículos reais, use GPS, crie estufas e venda em diferentes mercados. O loop de plantar-colher-investir segue viciante, agora mais bonito e cooperativo.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/787860/header.jpg?t=1786447399",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/787860/header.jpg?t=1786447399",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/787860/ss_76263e9a07621e454477c3ec715709fd06062c93.1920x1080.jpg?t=1786447399",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/787860/ss_fa32d926d8115d648588ffa8da2b5f61053b7b10.1920x1080.jpg?t=1786447399",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/787860/ss_81606c80db5fec103f5f88b24cc2e6832a1bc158.1920x1080.jpg?t=1786447399",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/787860/ss_409aca7beb98362696c7905a191fb39819c9e9c6.1920x1080.jpg?t=1786447399",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/787860/ss_acff97e497d75d34f4b13eacd32cbec6188f98a1.1920x1080.jpg?t=1786447399"
    ],
    "link": "https://download2284.mediafire.com/999q5yz2x32gSbKLg0GnYut3KacXFCa5c1A4XKBvSowUcUr-O69wbaqsJnRk7h1TeaOYSCk8M9RLXNXgnbJ6eipmv98reKn_-T5ChDZfzlHXQ5wd8ZEMWcHlLdmZYS-ZRFLgS5DNSb8vlNss908hPOH_kuSFPdhpcA8zAyx5Dir1WIE/iskhibdhlsre1du/Farming+Simulator+19+v1.7.1.0.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/gC-6p9qJ04g?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=gC-6p9qJ04g",
    "trailerId": "gC-6p9qJ04g",
    "preco": 45,
    "moedas": 45
  },
  {
    "id": "doom-3-bfg-edition",
    "nome": "DOOM 3: BFG Edition",
    "categoria": "Ação",
    "tamanho": "11 GB",
    "desenvolvedor": "id Software",
    "ano": "2012",
    "descricao": "O horror de Marte em BFG. Iluminação dinâmica, áudio 3D e expansão The Lost Mission.",
    "historia": "DOOM 3 BFG Edition é o capítulo mais sombrio da franquia. Na base UAC em Marte, o portal para o inferno se abre e você, um fuzileiro anônimo, atravessa corredores escuros onde cada sombra pode esconder um Imp.\n\nA BFG traz DOOM 3, Resurrection of Evil e The Lost Mission com texturas HD, 3D e checkpoint. Lanterna acoplada à arma e horror claustrofóbico diferenciam este DOOM dos novos de ação frenética.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208200/header.jpg?t=1664292843",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208200/header.jpg?t=1664292843",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208200/ss_69af57e45c0d66506b568d816ac95f6dd357f941.1920x1080.jpg?t=1664292843",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208200/ss_02d54960755f49731b246fc618c725b3cf9a039f.1920x1080.jpg?t=1664292843",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208200/ss_4ef531d962d08f1c60746cac733d6ff8415e6778.1920x1080.jpg?t=1664292843",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208200/ss_15559ce8d50ad32f959531815d21b10238fb7344.1920x1080.jpg?t=1664292843",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208200/ss_0c98b43f97733f3dad39cbddcdffbf957e30fd2b.1920x1080.jpg?t=1664292843"
    ],
    "link": "https://download939.mediafire.com/w9prodxn4uvgh-1EV7s836bDOmXTbCDJnyBeyNNFWONIDEM_bMNLkRcBj7AJgQ-920D7Yv_UQFIm4DQ1oPKVGI2rwcsMfjouoeRCf5sgAUpsjatOFFO8STYOKrazAvQ7zZQNHY9Gy4sgm4IJVPQic39Ty1rToK-YOekv8sZe98BW/4fq3qdyc97i9exx/Doom3BFGEditionTraduzido.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/QJm6-xT_Z8I?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=QJm6-xT_Z8I",
    "trailerId": "QJm6-xT_Z8I",
    "preco": 60,
    "moedas": 60
  },
  {
    "id": "portal",
    "nome": "Portal",
    "categoria": "Puzzle",
    "tamanho": "8 GB",
    "desenvolvedor": "Valve",
    "ano": "2007",
    "descricao": "A obra-prima da Valve. Portais, cubos companheiros e GLaDOS com humor negro.",
    "historia": "Portal é o puzzles em primeira pessoa mais elegante já feito. Presa nos laboratórios da Aperture Science, você testa a arma de portais sob a voz passivo-agressiva da IA GLaDOS, que promete bolo.\n\nCrie entradas e saídas, conserve momentum, desvie de torretas e descubra que o teste nunca acaba. Com roteiro genial de Erik Wolpaw e canção Still Alive, é curto, perfeito e inesquecível.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/400/header.jpg?t=1745368554",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/400/header.jpg?t=1745368554",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/400/0000002582.1920x1080.jpg?t=1745368554",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/400/0000002583.1920x1080.jpg?t=1745368554",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/400/0000002584.1920x1080.jpg?t=1745368554",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/400/0000002585.1920x1080.jpg?t=1745368554",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/400/0000002586.1920x1080.jpg?t=1745368554"
    ],
    "link": "https://download1581.mediafire.com/nwtwp75dgixgZ1Byx97Wgj9t07dsgI7MNUuFxQYGVtQp26Aim_zaq1DFD9O1pM_m98XVZgTGpWEJXIkkTnUEitaXl9vSzwwZUgDRnInPzSgD8QnK64vZ1AiLpwrURFKZvN8z2SaOK1CScHkZRWmUfTSdjSGKsrFxJymorWmV6m66Se4/a0oytbt79wbwqpy/Portal.v2025.02.13.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/tax4e4hBBZc?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=tax4e4hBBZc",
    "trailerId": "tax4e4hBBZc",
    "preco": 60,
    "moedas": 60
  },
  {
    "id": "bendy-and-the-ink-machine",
    "nome": "Bendy and the Ink Machine",
    "categoria": "Terror",
    "tamanho": "5 GB",
    "desenvolvedor": "Joey Drew Studios",
    "ano": "2017",
    "descricao": "Entre no estúdio abandonado de desenhos dos anos 30. Tinta viva, Bendy e segredos sombrios.",
    "historia": "Bendy and the Ink Machine leva Henry Stein de volta ao estúdio Joey Drew, 30 anos após criar Bendy. O convite diz 'venha ver', mas o estúdio está inundado de tinta viva e criaturas de celulose.\n\nExplore capítulos episódicos com puzzles, stealth e tinta que persegue. A estética borracha de 1930 contrasta com horror; cada áudio log revela ganância, ocultismo e o preço de dar vida a um desenho.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/622650/header.jpg?t=1784850256",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/622650/header.jpg?t=1784850256",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/622650/31876c3b562d5837a263b81dd505ae45c9dfce2e/ss_31876c3b562d5837a263b81dd505ae45c9dfce2e.1920x1080.jpg?t=1784850256",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/622650/06e9f7d9f6acb550afc423b2cde48160633db805/ss_06e9f7d9f6acb550afc423b2cde48160633db805.1920x1080.jpg?t=1784850256",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/622650/da64295055cc7247e8a2dbe631e0e9d134e718c9/ss_da64295055cc7247e8a2dbe631e0e9d134e718c9.1920x1080.jpg?t=1784850256",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/622650/76537725205ffebea38a5129c5c2f90bf85930be/ss_76537725205ffebea38a5129c5c2f90bf85930be.1920x1080.jpg?t=1784850256",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/622650/dd84e3cccc22cee167bb2729dec87c1fda0ca98c/ss_dd84e3cccc22cee167bb2729dec87c1fda0ca98c.1920x1080.jpg?t=1784850256"
    ],
    "link": "https://download1334.mediafire.com/4c9ivns0dcdg68JCzODS4QJc70UQ4Ghi1RIgXg8x2zHa4kPIVkgueG4ibGREw8Ck9E6oSrJ7n8sz73WuPkUfpWbNx27eGh3pzci00VUOFA0LZiRjwW9tEzQugw_iWIFgWPt8-y-1AQUlSlMKRg2QjcMqR15JIQ86WsI9-UoPUL3q/8dh4uzpqwois05v/Bendy+and+the+Ink+Machine.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/zS5-1k-XwQ0?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=zS5-1k-XwQ0",
    "trailerId": "zS5-1k-XwQ0",
    "preco": 55,
    "moedas": 55
  },
  {
    "id": "subnautica-below-zero",
    "nome": "Subnautica: Below Zero",
    "categoria": "Aventura",
    "tamanho": "8 GB",
    "desenvolvedor": "Unknown Worlds",
    "ano": "2021",
    "descricao": "Volte ao 4546B, agora no polo gelado. Construa bases, mergulhe e descubra a verdade sobre sua irmã.",
    "historia": "Subnautica: Below Zero é a sequência standalone no setor ártico do planeta alienígena. Como Robin Ayou, você caça respostas sobre a morte da irmã Sam, enquanto o planeta esconde Architects alienígenas.\n\nGerencie frio e oxigênio, pilote o exosuit, descubra cavernas geladas e criaturas como o Shadow Leviathan. Menor e mais dirigido que o original, mas com mesma tensão de mergulho profundo e construção.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/848450/header.jpg?t=1777456254",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/848450/header.jpg?t=1777456254",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/848450/ss_5011daad83f8494eda0826e4bbc91181239ad5d7.1920x1080.jpg?t=1777456254",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/848450/ss_69bdcf6ce29ba61650f0b2551a3494af67be09ac.1920x1080.jpg?t=1777456254",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/848450/ss_3c3403337b972d4913e3a6b4f34e0f47e484c042.1920x1080.jpg?t=1777456254",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/848450/ss_5bc21362aa200d08fe25203cbe50debedd8f11a3.1920x1080.jpg?t=1777456254",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/848450/ss_9e3d6ab0db5442f7bcbeb923da47d3a80023f50f.1920x1080.jpg?t=1777456254"
    ],
    "link": "https://download1338.mediafire.com/ezvyd03mvxpgCm0l6p6XOEEp_XtfX74DJ1UaJiNJtZM-hebZyK0FxqtZYKjP2gp5mXubS210-SLzR6D-mOqXP68uoMvWAru4dzcZNm_Gf8bfCE35sIP1YTE5VaNFYlrXMX4VgJ88cZOZBuulwuom6Ibl55EVyz3hws-0k2d1zcgHpkQ/lw475e1ouzgtyfy/SubnauticaBelow+Zero.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/z0k80a2N-gY?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=z0k80a2N-gY",
    "trailerId": "z0k80a2N-gY",
    "preco": 85,
    "moedas": 85
  },
  {
    "id": "gang-beasts",
    "nome": "Gang Beasts",
    "categoria": "Ação",
    "tamanho": "5 GB",
    "desenvolvedor": "Boneloaf",
    "ano": "2017",
    "descricao": "Bonecos gelatinosos dando socos em plataformas absurdas. Party game perfeito para gritaria.",
    "historia": "Gang Beasts é pastelão multiplayer: geleias humanas bêbadas lutam em Beef City. Socos, chutes de cabeça e arremessos em passarelas, moinhos e caminhões em movimento.\n\nFísica hilária garante que nunca há luta igual. Customize fantasias de dinossauro e lute até 8 jogadores. Ideal para festas, com risada garantida quando alguém cai agarrado.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/285900/header.jpg?t=1780410654",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/285900/header.jpg?t=1780410654",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/285900/ss_0476d6b0403313cb4fa727fd99146762eb80f611.1920x1080.jpg?t=1780410654",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/285900/ss_0e7190e5cee562fa851f23bfeb65b336550a6d18.1920x1080.jpg?t=1780410654",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/285900/ss_1778496dc8675159f7cb7ded7f6806ad4c1e2ccf.1920x1080.jpg?t=1780410654",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/285900/ss_d10fe0c8d1bcf4f69317121e2ba3dc23f052e352.1920x1080.jpg?t=1780410654",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/285900/ss_0717d70ae0ad852c0a17bd8eabb00c9d0159c6bc.1920x1080.jpg?t=1780410654"
    ],
    "link": "https://download1523.mediafire.com/r5dnc6l2ok0gJfIVK_8uaVFrh1et6yZBiKzHjKhFsrrrPbdR3fynBZbNDQGTCrgFh4ZNTkJiULBUJlb5kvds0CH6psSZ8hf8NTl2itYZoh3fnmZtvYuar-ACfvALtJR91CWWzM3F30tphy1Mcx_DBoeAf-sW0wZfceXEJci3l4r6Nyk/r9u6zfrm52u6vfn/Gang+Beasts+v1.26.1404.0.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/J2d_1w9lQ7E?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=J2d_1w9lQ7E",
    "trailerId": "J2d_1w9lQ7E",
    "preco": 45,
    "moedas": 45
  },
  {
    "id": "terraria",
    "nome": "Terraria",
    "categoria": "Aventura",
    "tamanho": "300 MB",
    "desenvolvedor": "Re-Logic",
    "ano": "2011",
    "descricao": "Minecraft 2D com chefes, biomas e loot infinito. Cave, lute e construa por 100h+.",
    "historia": "Terraria é o sandbox 2D definitivo. Cave do céu ao inferno, colete 500+ armas, invoque chefes como Eye of Cthulhu e Moon Lord, e personalize NPCs que vendem itens conforme você os abriga.\n\nCom atualizações gratuitas por 14 anos, classes, eventos e modo Master, é um RPG de ação com construção livre e progressão que nunca termina.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg?t=1769844435",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg?t=1769844435",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.1920x1080.jpg?t=1769844435",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_ae168a00ab08104ba266dc30232654d4b3c919e5.1920x1080.jpg?t=1769844435",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_9edd98caaf9357c2f40758f354475a56e356e8b0.1920x1080.jpg?t=1769844435",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_75ea9a7e39eb34b40efa1e6dfd2536098dc4734b.1920x1080.jpg?t=1769844435",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/ss_782374517c1792debd74d24856203b876eba3a5d.1920x1080.jpg?t=1769844435"
    ],
    "link": "https://download2265.mediafire.com/5zsxogxr0argGmEoGnUzYGvkJvanwyn39SrD-MnCG96WWY8uPLdjaz8RzGbpT-vq0YNBFtA_Wkc48Ljbi97aqCz8pqVuaAMpK2D0bV5GlG41kWGYhHZtW8-P4PbiiosNqN-smLMQMBXAGgYZKUWW7q8qPOoXIVzuFagN-V_XWV4D1FM/vp4jinip58epzs3/Terraria+v1.4.4.9.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/cV3Cfed4RBU?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=cV3Cfed4RBU",
    "trailerId": "cV3Cfed4RBU",
    "preco": 70,
    "moedas": 70
  },
  {
    "id": "super-meat-boy",
    "nome": "Super Meat Boy",
    "categoria": "Ação",
    "tamanho": "300 MB",
    "desenvolvedor": "Team Meat",
    "ano": "2010",
    "descricao": "Plataforma hardcore ultra preciso. Salve sua namorada Bandage Girl do Dr. Fetus.",
    "historia": "Super Meat Boy é o Dark Souls da plataforma 2D. Controle um cubo de carne que corre e pula em serras, sal e agulhas em 300+ fases projetadas para morrer e tentar de novo instantaneamente.\n\nReplays mostram todas as mortes simultâneas. Chefes, warp zones e personagens secretos (de Minecraft a Bit.Trip) expandem o caos. Difícil mas justo, é referência do indie.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/40800/header.jpg?t=1700669950",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/40800/header.jpg?t=1700669950",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/40800/ss_2482dad154fa38c32195a5301891ec7d9cefa7da.1920x1080.jpg?t=1700669950",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/40800/ss_652092068cc0d5e75fe3f199ad1bbc395806c1f2.1920x1080.jpg?t=1700669950",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/40800/ss_71f114e451550394500613d8ec8082ae3eac44e5.1920x1080.jpg?t=1700669950",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/40800/ss_d158c2843c714bf2294376e03d9c4d6c7cd96397.1920x1080.jpg?t=1700669950",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/40800/ss_8579adfaa58c863497e71df1b36331d37e51aeab.1920x1080.jpg?t=1700669950"
    ],
    "link": "https://download1590.mediafire.com/v8ede2qdalgg33O_DwT53CmF0We23pDsCUdFoamwH_bPFaoHYx9dkDffheDokcfoAIgw2uPKxSzMfpSEFAD9ooIqAQOACBe8gCLiKuMum14AKmj_Zzeiq6stxysWmWZ_bySOPXGBOExs4O0nJCDHOWmhpsVBsHlJDULKEwHMXpqVQj0/o6sfhvw8b0zqanu/Super.Meat.Boy.v3241924.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/z1-C_-pPq-g?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=z1-C_-pPq-g",
    "trailerId": "z1-C_-pPq-g",
    "preco": 40,
    "moedas": 40
  },
  {
    "id": "celeste",
    "nome": "Celeste",
    "categoria": "Aventura",
    "tamanho": "1 GB",
    "desenvolvedor": "Maddy Makes Games",
    "ano": "2018",
    "descricao": "Escale a montanha Celeste. Plataforma assistida e história tocante sobre ansiedade.",
    "historia": "Celeste é sobre Madeline escalando a Montanha Celeste para provar algo a si mesma. Cada capítulo introduz mecânicas — dash, penas, vento — e reflete seu conflito interno com Badeline, sua parte ansiosa.\n\nCom controles extremamente precisos, 700+ telas e lados B/C brutais, Celeste é difícil mas sempre acessível com modo assistido. A trilha de Lena Raine embala uma narrativa sobre saúde mental, perseverança e auto-compaixão.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg?t=1714089525",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg?t=1714089525",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_1ad297c2044cdcf450ee83e56350cafb590da755.1920x1080.jpg?t=1714089525",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_03bfe6bd5ddac7f747c8d2aa1a4f82cfd53c6dcb.1920x1080.jpg?t=1714089525",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_4b0f0222341b64a37114033aca9994551f27c161.1920x1080.jpg?t=1714089525",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_1012b11ad364ad6c138a25a654108de28de56c5f.1920x1080.jpg?t=1714089525",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_832ef0f27c3d6efdaa4b5d1cc896dce0999bc9e8.1920x1080.jpg?t=1714089525"
    ],
    "link": "https://download2291.mediafire.com/n552po70a7ngq0AxYSCMvbWMjHh8v0HkYlj9hG-NRKB7Uy4ej4l-Lv3A6mgT0MrIeQAHvyqlRfDMZSGsDGsHw88X0hrmr2E5Kk_4cKt8e--LI9o4YcAnJ0dv_mmuhgbyuo4HeHne95HSXOThcSbdKnzXfizabtCZRllgUIzpI5FiVOw/ln04r4vd5kyqxwn/Celeste+v6458966.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/_H1P-9P1M5i4?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=_H1P-9P1M5i4",
    "trailerId": "_H1P-9P1M5i4",
    "preco": 65,
    "moedas": 65
  },
  {
    "id": "dead-cells",
    "nome": "Dead Cells",
    "categoria": "Ação",
    "tamanho": "2 GB",
    "desenvolvedor": "Motion Twin",
    "ano": "2018",
    "descricao": "Roguelike metroidvania com combate 2D afiado. Morra, evolua e volte mais forte.",
    "historia": "Dead Cells é o roguelite que mistura Castlevania e Dark Souls. Você é uma célula presa que possui corpos decapitados, atravessando uma ilha que muda a cada morte com caminhos ramificados.\n\nArmas, mutações e biomas se desbloqueiam progressivamente; chefes e DLCs expandem o castelo. Com 60fps cravados e feedback perfeito, cada run ensina e vicia.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/header.jpg?t=1779086887",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/header.jpg?t=1779086887",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/ss_ac28000ade40cc2fe5c128f32ac98ba33c008a7a.1920x1080.jpg?t=1779086887",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/ss_7bde51ea6c8f6289e85ea1d8c1c941e1f8bfee91.1920x1080.jpg?t=1779086887",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/ss_e87e72a247918d8493892e035d5e1b4b84470d2f.1920x1080.jpg?t=1779086887",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/ss_a099416b9f3e09d47c42f87667e6ad6f394ba652.1920x1080.jpg?t=1779086887",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/ss_a8b0439ad7750cab1bdec86ecef0daa280e9f93f.1920x1080.jpg?t=1779086887"
    ],
    "link": "https://download2298.mediafire.com/ci8l72qkxzugNEl0q3JCFLEubpTZc3r459W0j8HaJ9PWexN7KLyynSt_1YZc-XAIeryFrceq7t3S-EhWzY6LJrDUMc30SVV3cTVObsCdhWO0clyeNDVBBDL5NKrhBA2L7BJOJD8gCyHAuVFu1WtjLRTwehjiz1o38C54BRjm-BgCNwo/6mcges6n7rmyryr/Dead.Cells.v35.7.zip",
    "trailer": "https://www.youtube-nocookie.com/embed/h8h6Jp60f-s?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=h8h6Jp60f-s",
    "trailerId": "h8h6Jp60f-s",
    "preco": 75,
    "moedas": 75
  },
  {
    "id": "inside",
    "nome": "INSIDE",
    "categoria": "Aventura",
    "tamanho": "3 GB",
    "desenvolvedor": "Playdead",
    "ano": "2016",
    "descricao": "Sucessor espiritual de LIMBO. Menino, distopia, controle mental e um final perturbador.",
    "historia": "INSIDE começa com um menino escorregando por uma floresta enquanto guardas e cães caçam crianças. Sem palavras, você passa por fazenda de controle mental, instalações subaquáticas e laboratórios.\n\nO jogo é puzzles ambientais com atmosfera opressora e direção de arte minimalista. O terceiro ato muda tudo: você se torna a massa e o final secreto exige caça obsessiva. É uma alegoria sobre conformidade e liberdade.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/304430/header.jpg?t=1761819581",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/304430/header.jpg?t=1761819581",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/304430/ss_d23769199f1e3d498f8293892f0456696458c717.1920x1080.jpg?t=1761819581",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/304430/ss_b15d0a5c037198b5b9db6a82fedf5018f1b43de5.1920x1080.jpg?t=1761819581",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/304430/ss_ebeba62a8d2141b4fd36760500529fb2d9a29190.1920x1080.jpg?t=1761819581",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/304430/ss_8b67b9a40e620c7316df60cb5a783820f77b935c.1920x1080.jpg?t=1761819581",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/304430/ss_82584c66b8ff7d935481e753596ab36d9b5e9fb7.1920x1080.jpg?t=1761819581"
    ],
    "link": "https://download1588.mediafire.com/ugrwjg05esogx_UxpuXTSqQYLsSnTy0loCOqHqPiFvgAoSesZl_wQWNAA_EMzC1gnUYM4eXbCjVfcB33O_FPLRuHZCjp23lzOzX8exvioX3CXGelaMCBTQWe77lA3n0O8brt3rb9LstkblTV9wmh3quAp3oCsBE9bH_W_zyz9nh_GX4/kx82s3jg59recfi/INSIDE.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/yG8aotllST8?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=yG8aotllST8",
    "trailerId": "yG8aotllST8",
    "preco": 55,
    "moedas": 55
  },
  {
    "id": "geometry-dash",
    "nome": "Geometry Dash",
    "categoria": "Ação",
    "tamanho": "200 MB",
    "desenvolvedor": "RobTop Games",
    "ano": "2013",
    "descricao": "Plataforma rítmica onde cada salto é na batida. Crie e jogue níveis impossíveis da comunidade.",
    "historia": "Geometry Dash é simples: um clique, um salto, sincronizado à música eletrônica. Mas por trás, está o criador de níveis mais poderoso do gênero, com milhões de fases da comunidade, de auto a demons extremos.\n\nProgressão desbloqueia ícones e naves; prática previne rage. Com editor, música custom e precisão milimétrica, é um fenômeno que vive da criação coletiva.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322170/header.jpg?t=1775300400",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322170/header.jpg?t=1775300400",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322170/ss_05cb182b93131a5faf0516232a7ad27c83f2c0e8.1920x1080.jpg?t=1775300400",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322170/ss_5aa7c52b6f29b138712c0e89c7f9f2791ec289a9.1920x1080.jpg?t=1775300400",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322170/ss_267a8eff67ed643e4f1d49054da5102a07b7ffae.1920x1080.jpg?t=1775300400",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322170/ss_0e841fa6622be28851d8aa9624bb0d727c533029.1920x1080.jpg?t=1775300400",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322170/ss_1e5328e6955e4037c4e1dfbe761dbb34f3d293da.1920x1080.jpg?t=1775300400"
    ],
    "link": "https://download1527.mediafire.com/7xegwv1bvo1gcKmCm0kQmBr9jr9XQn5CqC1cela2wtMpIBmjbYm3EqSah2ZQ9zBop7h8gYWwqDBq5UMtQBDi7Rz97Emll38MvjKMB1bN8x78_IhgqhTVNajnMLSwG474nXB56E29dpqkPt_repsXNv8dpfyVxtegYy95mFciicHf-ao/dwfy6ra6ywoobp0/Geometry+Dash+v2.206a.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/k90y6PIzIaE?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=k90y6PIzIaE",
    "trailerId": "k90y6PIzIaE",
    "preco": 25,
    "moedas": 25
  },
  {
    "id": "slime-rancher",
    "nome": "Slime Rancher",
    "categoria": "Simulação",
    "tamanho": "2 GB",
    "desenvolvedor": "Monomi Park",
    "ano": "2017",
    "descricao": "Faça fazenda de slimes fofos a 1000 anos-luz da Terra. Explore, aspire e lucre.",
    "historia": "Slime Rancher é Beatrix LeBeau trocando escritório por um rancho no planeta Far, Far Range. Aspire slimes rosas, tabby e caçadores, alimente com galinhas e frutas, colete plorts e expanda currais.\n\nOásis, cavernas e slimes Tarr instáveis ameaçam. Com economia, upgrades a jato e segredos da antiga civilização slime, é Stardew fofo com baba colorida.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/433340/header.jpg?t=1758651509",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/433340/header.jpg?t=1758651509",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/433340/ss_5339a74c4563d40a1d8a5638db2a9ed59c5b883b.1920x1080.jpg?t=1758651509",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/433340/ss_d0e6a30325a9f7ff4fb3d6ba344c4131bb5f98cb.1920x1080.jpg?t=1758651509",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/433340/ss_58bea16c1d3147c47b0b36cef82008b949c18d97.1920x1080.jpg?t=1758651509",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/433340/ss_e03a3526536a7da15dc1b89dc4e6285a87e8e2db.1920x1080.jpg?t=1758651509",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/433340/ss_d923566424cee1c6d82ccde7336b02057d3409fc.1920x1080.jpg?t=1758651509"
    ],
    "link": "https://download1638.mediafire.com/kzvgf1t25lcgwQSoMm4BIdlIrG3rkFX5gr4y_Nu4_k4zX4P_h01Ydsg8Swx414pRVQMm_FQD-JNcA5AMNaVdtvBvwOZLF_ks2zNtB0Zu-9-9S4HBToGQbP3joyHlw1H5jKwdJFH9eNDPKSmQNrMWxSrfRrc7ARjwZHleboJtNw7nDxg/n89tstsumli8m37/Slime+Rancher+MP+v1488.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/gSoDoSPAChM?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=gSoDoSPAChM",
    "trailerId": "gSoDoSPAChM",
    "preco": 55,
    "moedas": 55
  },
  {
    "id": "nine-sols",
    "nome": "Nine Sols",
    "categoria": "Ação",
    "tamanho": "10 GB",
    "desenvolvedor": "Red Candle Games",
    "ano": "2024",
    "descricao": "Metroidvania com Sekiro + anime. Yi, herói gato, busca vingança contra os 9 Sóis.",
    "historia": "Nine Sols é um metroidvania desenhado à mão com combate de parry preciso à la Sekiro. Você é Yi, ex-guardião traído pelos 9 Sóis de New Kunlun, uma cidade taopunk onde deuses-ciência governam.\n\nExplore palácios, fábricas e cogumelos gigantes, desvie com dash, reflita talismãs e absorva 'Qi' para executar. Com lore profondo sobre transcendência e corte preciso, é um dos indies mais elogiados de 2024.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1809540/header.jpg?t=1782464830",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1809540/header.jpg?t=1782464830",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1809540/ss_514e766f27fcfccf375c85a842099d53e9542258.1920x1080.jpg?t=1782464830",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1809540/ss_a48f85ae073148d13332b1a7741a764a046f83be.1920x1080.jpg?t=1782464830",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1809540/ss_75017574e6cac5233b32492509fe47825dc530bf.1920x1080.jpg?t=1782464830",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1809540/ss_bf5096e3682d7d2fb1d3fa7cccb5398fb934144a.1920x1080.jpg?t=1782464830",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1809540/ss_4be552cc9f6b03f0918e55b17145d3f5cbd36065.1920x1080.jpg?t=1782464830"
    ],
    "link": "https://download2293.mediafire.com/wcqjtk6q46bgbH1EHnnduXh2ek3vkWaLjA7kzNFfsMx0PDyDV3zO2WWKY5Co7mTtzMBMvQlJL75GiQNTp2WR2lqUMzgEnQ8fWJXJ-j8b16wfkv8RfR9RhYull6BxHXye5DmN_7I8a0deGjGQMlXgbAG2DLevIq3qyabtWP7vlBudZfA/1hlq2yw8yi4c9kd/Nine.Sols.v202502181-P2P.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/nYH4nTVUcM4?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=nYH4nTVUcM4",
    "trailerId": "nYH4nTVUcM4",
    "preco": 75,
    "moedas": 75
  },
  {
    "id": "the-stanley-parable",
    "nome": "The Stanley Parable",
    "categoria": "Aventura",
    "tamanho": "3 GB",
    "desenvolvedor": "Galactic Cafe",
    "ano": "2013",
    "descricao": "Stanley só apertava botões até o narrador enlouquecer. Walking sim sobre livre-arbítrio.",
    "historia": "The Stanley Parable começa com Stanley no escritório 427, onde todos sumiram. Um narrador britânico onisciente descreve o que você deve fazer. Você pode obedecer ou desobedecer, e o narrador reage.\n\nSão 19 finais, de liberdade a loop infinito e museu. A Ultra Deluxe adiciona conteúdo absurdo e critica remakes. É filosofia interativa sobre escolha, autoridade e jogos.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/221910/header.jpg?t=1781207122",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/221910/header.jpg?t=1781207122",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/221910/ss_49e682563292992309e3047f30128f3dba4c39ce.1920x1080.jpg?t=1781207122",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/221910/ss_7b119bfff7ebfbcd86c1af1210bdac8666ab4ae8.1920x1080.jpg?t=1781207122",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/221910/ss_523aa042385c6b1c8f6c9870ecffef18627d9064.1920x1080.jpg?t=1781207122",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/221910/ss_0411c36ac2bdc3f22d642ec09d9f417e6902044d.1920x1080.jpg?t=1781207122",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/221910/ss_8905426b3f0ec7efd3c07f053d0276ced38a1f8f.1920x1080.jpg?t=1781207122"
    ],
    "link": "https://download844.mediafire.com/dtvornvzqijgu54UqECt22nEWDZ5XwmEm7dY6RHKzmZ4-7ORJX6nfGDN32pLVY-oC-yt1EIxPsIlsfTVQoZU3ox6RNjFYbsD57KqLLBwQxxUIEcn_DDTLgM0uW3Y3FDU1Wl2NIJQNBTHaKwuEC0Iy3pHuEM4h1qJc0mPVKDGRNRr2x0/diriys8wvz8ygj4/The.Stanley.Parable.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/P8eHb9uIYUM?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=P8eHb9uIYUM",
    "trailerId": "P8eHb9uIYUM",
    "preco": 35,
    "moedas": 35
  },
  {
    "id": "meccha-chameleon",
    "nome": "Meccha Chameleon",
    "categoria": "Ação",
    "tamanho": "1 GB",
    "desenvolvedor": "Mia Blais-Côté",
    "ano": "2024",
    "descricao": "Quebra-cabeça de cor e camuflagem. Seja o camaleão mecânico que muda de cor para se esconder.",
    "historia": "Meccha Chameleon é um puzzle-platform onde seu camaleão robô precisa atravessar fábricas mudando de cor para se camuflar de sensores e predadores. Cada fase é um teste de lógica cromática.\n\nMistura stealth fofo com mecânicas de tinta e luz, narrativa leve e design minimalista. Perfeito para cérebro e olhos.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2427000/header.jpg?t=1740674800",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2427000/header.jpg?t=1740674800",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2427000/ss_910a4b9fa3b62908637262a3d7c59487d0dc5fda.1920x1080.jpg?t=1740674800",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2427000/ss_4448aa8ae7bdddf88b99ec7068bfdeb2f5912e51.1920x1080.jpg?t=1740674800",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2427000/ss_3dd724b8223160adcc1c1c0e79fedf0dc103844d.1920x1080.jpg?t=1740674800",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2427000/ss_0b1fa7681042a1840d91a1fc255f6d4328eb388b.1920x1080.jpg?t=1740674800",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2427000/ss_f9b323f9c0308de24e83863baff90accafe3330a.1920x1080.jpg?t=1740674800"
    ],
    "link": "https://download1514.mediafire.com/lmuspc4mn5zgRturtjzdvuP7iedRmgXdURCsUjP7B50TL4D4EqNMeteELsGfRPLKC8zHcq8wKZnbUb79MPgQmoFh8nrJs0MdVrf-NpZb21c_Bj1wi7Fym1eGnvpVtEax7oCm9JxiqgGqCf-2tw-NyDz9AF0UmdydaXJ4G52a-IAblPg/kfelm6xikzp2rro/MECCHA+CHAMELEON+v1.2.2.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/EmDYz30fAkw?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=EmDYz30fAkw",
    "trailerId": "EmDYz30fAkw",
    "preco": 25,
    "moedas": 25
  },
  {
    "id": "rayman-legends",
    "nome": "Rayman Legends",
    "categoria": "Aventura",
    "tamanho": "5 GB",
    "desenvolvedor": "Ubisoft Montpellier",
    "ano": "2013",
    "descricao": "Plataforma pintado à mão, o mais lindo da Ubisoft. Co-op, música e Kung Foot.",
    "historia": "Rayman Legends desperta Rayman de um sono de 100 anos para salvar o Claro dos pesadelos. Cada mundo é uma pintura viva: castelo medieval, cozinha louca, deserto de chili e fases musicais onde pular é tocar.\n\nCom Murfy no touch, co-op de 4 e Invasões brutais, é plataforma perfeito, fluido e criativo, considerado um dos melhores já feitos.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242550/header.jpg?t=1782234498",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242550/header.jpg?t=1782234498",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242550/ss_1cafba7ad3969275e87b409d3256a59428b1fd14.1920x1080.jpg?t=1782234498",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242550/ss_b6f7d056f850e7a41d993a06196b00d1bed1b71b.1920x1080.jpg?t=1782234498",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242550/ss_318dc1c278b1d7c3670df0333d1d93f43b19066d.1920x1080.jpg?t=1782234498",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242550/ss_6c308ff50f6433f40008d15b5e1ed6156f898aa3.1920x1080.jpg?t=1782234498",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242550/ss_205a260cca108e6507f23187272e92caacd38606.1920x1080.jpg?t=1782234498"
    ],
    "link": "https://download2294.mediafire.com/9goxnlevkdwgcHy6KVOOhbJ6OFVh0vU9HHBHGsrZq7cWCG4HG02F7OfpKuDjVQvvZVmKrMTgu7YjdVJRRc4sKQaQ7xV66PI54XAhZE15oN8TxG_IVQhDbrsmh3wOs-ncFPpwIjoNuymuD8hPudf4quloHnfkYNTHGQWovBZ62xSdDow/92iqykvoruekaao/%5BR.G.+Mechanics%5D+Rayman+Legends.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/w0L-6Y5D_m8?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=w0L-6Y5D_m8",
    "trailerId": "w0L-6Y5D_m8",
    "preco": 60,
    "moedas": 60
  },
  {
    "id": "spider-man-web-of-shadows",
    "nome": "Spider-Man: Web of Shadows",
    "categoria": "Ação",
    "tamanho": "6 GB",
    "desenvolvedor": "Treyarch / Beenox",
    "ano": "2008",
    "descricao": "Nova York em mundo aberto com simbionte. Alterne traje vermelho e preto, decisões mudam o fim.",
    "historia": "Spider-Man: Web of Shadows infecta Manhattan com o simbionte. Venom domina e a cidade cai em caos com civis simbiontes. Você alterna na hora entre traje vermelho (ágil) e preto (brutal) com combos distintos.\n\nFaça alianças com Heróis ou Vilões, lute contra Wolverine, Luke Cage e Rei do Crime, e decida fatos que levam a múltiplos finais. Combate aéreo e teia nunca foram tão livres.",
    "imagem": "https://cdn.cloudflare.steamstatic.com/steam/apps/238800/header.jpg",
    "galeria": [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/238800/header.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/238800/ss_1.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/238800/ss_2.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/238800/ss_3.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/238800/capsule_616x353.jpg"
    ],
    "link": "https://download2264.mediafire.com/bj9a035wrnmgyieLDeQwtXrIwF-dod5nHEGvcUL55ZBSqSZfpa_LrRLjYiTPHUERNSwBDZuvlt1JITdvK3FC82uBUAnAugNviMtILsA7nr60-3Y3INthzHLN7RxiYF54b2EegzIsStaKPZx3bkBC4it57TSJMAvjjAqBb4i3S5C-lI0/c2sv7el4b03ux9k/Spider-Man+Web+of+Shadows+-+%5BDODI+Repack%5D.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/Lp-qS4yA_YQ?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=Lp-qS4yA_YQ",
    "trailerId": "Lp-qS4yA_YQ",
    "preco": 55,
    "moedas": 55
  },
  {
    "id": "another-crab-s-treasure",
    "nome": "Another Crab's Treasure",
    "categoria": "Aventura",
    "tamanho": "4 GB",
    "desenvolvedor": "Aggro Crab",
    "ano": "2024",
    "descricao": "Soulslike de caranguejo. Kril precisa recuperar sua concha em oceano poluído e hilário.",
    "historia": "Another Crab's Treasure é Dark Souls com caranguejo eremita. Kril tem sua concha confiscada por tubarão agiota e precisa atravessar recifes, abismos e poluição humana usando lixo como armadura — tampas, latas e copos.\n\nParry, esquiva e conchas com poderes, mas com acessibilidade e humor. Crítica ambiental com chefes gigantes e coração enorme.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1887840/header.jpg?t=1785949147",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1887840/header.jpg?t=1785949147",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1887840/ss_e1010f650543b2e53249ff3ab43f04dbdbfef7ea.1920x1080.jpg?t=1785949147",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1887840/ss_10836c42549d86386bdae21c997a58630137d603.1920x1080.jpg?t=1785949147",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1887840/ss_c29cfaabd50ec6bd33e1da10ff8a74ca7be3a9f4.1920x1080.jpg?t=1785949147",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1887840/ss_cd81b479b5c56b671376d13bbbf8d56dbb7d1f36.1920x1080.jpg?t=1785949147",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1887840/ss_3e0889a2a47a73ca3437d9b945785468eb3119bb.1920x1080.jpg?t=1785949147"
    ],
    "link": "https://download1349.mediafire.com/osqut240gbzg4UKRMielr9hGFcmfzwLAsZCe62uo_rniGaUS_yf8nQTUuCSjQbgrAw23ZPAmDmtpH0fhu51LEUERFb9l10zxG-XSh9EW3tu3kcZYhI9BVQai60Pjr9z7mboj5AjKj7biJANhAoo1GChO6di5up7WAj3uOC25UyuU4Ck/wm1ddw1dmkh6f92/Another.Crabs.Treasure.v2.0.000.5-P2P.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/l_lR8Rbqbq0?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=l_lR8Rbqbq0",
    "trailerId": "l_lR8Rbqbq0",
    "preco": 65,
    "moedas": 65
  },
  {
    "id": "doom-doom-ii-enhanced",
    "nome": "DOOM + DOOM II Enhanced",
    "categoria": "Ação",
    "tamanho": "2 GB",
    "desenvolvedor": "id Software / Nightdive",
    "ano": "2024",
    "descricao": "DOOM I + II remasterizados com 60fps, multiplayer e novo episódio Legacy of Rust.",
    "historia": "DOOM + DOOM II Enhanced reúne os clássicos de 1993/94 com engine KEX, widescreen, crossplay deathmatch e co-op, trilha remasterizada e mod support.\n\nInclui episódios Sigil de Romero e o novo Legacy of Rust com armas e demônios inéditos. É a forma definitiva de jogar o FPS que inventou o gênero, preservado e expandido.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2280/header.jpg?t=1750785073",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2280/header.jpg?t=1750785073",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2280/ss_46a3e04b262d419a970733d95d1e561fed81a04d.1920x1080.jpg?t=1750785073",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2280/ss_e46818d3d16bdb6d8f07d0ca23c1dc05d0073b93.1920x1080.jpg?t=1750785073",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2280/ss_806877de2ec13666c33ec2eed02055585543f23f.1920x1080.jpg?t=1750785073",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2280/ss_75eb1d7b9d343c47fa352bc66a065b006b1b2002.1920x1080.jpg?t=1750785073",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2280/ss_a5e57e91c054298a6c86ac49148225f936101a45.1920x1080.jpg?t=1750785073"
    ],
    "link": "https://download1075.mediafire.com/6l3naryn5hdg_sUqbOWtXElDiYONdmEpI0s0vNntzh0q1r984sCUpdu5QgoyqeFVj_90Ygv7wM48WN0NQCaJ5wxJDDL1sGi02IkeXVOnJAsN3zUlu19G5--kARG4GuSsX61_a8YPDeplFZ2GEuIy9ACaMESwOMqEp2_c7ToCWrRfGcU/8e819kd63g48x0l/DOOM+plus+DOOM+II+Enhanced.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/S2Wn2c22L30?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=S2Wn2c22L30",
    "trailerId": "S2Wn2c22L30",
    "preco": 70,
    "moedas": 70
  },
  {
    "id": "hello-neighbor",
    "nome": "Hello Neighbor",
    "categoria": "Terror",
    "tamanho": "4 GB",
    "desenvolvedor": "Dynamic Pixels",
    "ano": "2017",
    "descricao": "Seu vizinho esconde algo no porão. Stealth horror com IA que aprende suas rotas.",
    "historia": "Hello Neighbor é stealth horror onde seu vizinho bigodudo esconde algo no porão trancado. Você invade a casa, mas a IA aprende: se você entra pela janela, ele coloca armadilhas lá.\n\nQuebre caixas, use visões e descubra o subsolo com parque temático. O jogo mistura puzzle físico e creepypasta, com atos que mudam perspectiva e lore triste sobre perda.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/521890/header.jpg?t=1789402399",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/521890/header.jpg?t=1789402399",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/521890/ss_f4bf74bcbf51a0d3b5b7a0497018e824f2ec092c.1920x1080.jpg?t=1789402399",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/521890/ss_ac219a7c078de280a6ab21c39d925d3f1c8bb4a8.1920x1080.jpg?t=1789402399",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/521890/ss_462735bb24790570cadc9f6ed9fa5d456c2f8035.1920x1080.jpg?t=1789402399",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/521890/ss_dbd1c56e58f628d7978b2ef8f7f6b7106512366e.1920x1080.jpg?t=1789402399",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/521890/ss_b0df68f6289fe4c8d16b826821c08f8fa6c1fd2b.1920x1080.jpg?t=1789402399"
    ],
    "link": "https://download848.mediafire.com/teccs7euczigb8pknRIUtWIvw1lClYLCwUMPeWK8CgFgo4-WcbBccVAiyY76W4LyMyt8wLEMotg_RgfrSB5mBwdfWA663RyhVV84us6t817vjQJ7Qn1wqdz8i-P7qizb79bf6xBjOpVL9csOtN64cSQZeBoipQbdnJpaQarEbMD06WA/9aesjq3q3868f38/Hello+Neighbor.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/vvB2wiDUDdA?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=vvB2wiDUDdA",
    "trailerId": "vvB2wiDUDdA",
    "preco": 45,
    "moedas": 45
  },
  {
    "id": "the-binding-of-isaac-rebirth",
    "nome": "The Binding of Isaac: Rebirth",
    "categoria": "Ação",
    "tamanho": "800 MB",
    "desenvolvedor": "Edmund McMillen",
    "ano": "2014",
    "descricao": "Roguelike comIsaac chorando lágrimas que matam. 700+ itens, 500h de segredos.",
    "historia": "The Binding of Isaac: Rebirth reimagina o biblical horror onde Isaac foge da mãe que ouviu voz de Deus pedindo sacrifício. No porão, lágrimas viram projéteis contra moscas, cocôs e irmãos.\n\nCada run gera masmorra, itens sinergizam em builds absurdas e segredos exigem 200h. Com trilha de Ridiculon e humor negro, é roguelike que inventou o gênero moderno.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250900/header.jpg?t=1731977365",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250900/header.jpg?t=1731977365",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250900/ss_25a4a446a433218d41a7e87e35b60c297e68e7a4.1920x1080.jpg?t=1731977365",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250900/ss_19ef624e8d97136ba6f928d389b85f7b8130c37a.1920x1080.jpg?t=1731977365",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250900/ss_9fa4199fa93cb8b1edd8780fa6ce9e80d2bfb503.1920x1080.jpg?t=1731977365",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250900/ss_008a76bd0ab314c8140dd1a7ec61090c122d1779.1920x1080.jpg?t=1731977365",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250900/ss_b146a76ac5348e1cf958c3d01834e13b33c4e561.1920x1080.jpg?t=1731977365"
    ],
    "link": "https://download2392.mediafire.com/pllzb8jxbghgS1hpEOZGAbCY-wuM_Q-b_60FJawSNb0pnPl61EPehqve7DMyzndU2aES2yLst6TmGDjVGtSc2ET7dF80sO4olNabuj8FSI1KiXwzi11QF0o7nkgku8MH6ZY4XMrBS76kRpu1zN39Y8dwlwTZon9Q0xWu_QM9SYLolQU/fcykt73dmidlwkb/The+Binding+of+Isaac+Rebirth+v1.9.7.15.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/rS6gMCE_TJQ?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=rS6gMCE_TJQ",
    "trailerId": "rS6gMCE_TJQ",
    "preco": 60,
    "moedas": 60
  },
  {
    "id": "lego-batman-the-videogame",
    "nome": "LEGO Batman: The Videogame",
    "categoria": "Aventura",
    "tamanho": "3 GB",
    "desenvolvedor": "Traveller's Tales",
    "ano": "2008",
    "descricao": "Batman em LEGO com tela dividida. Vilões de Gotham e Batcaverna para construir.",
    "historia": "LEGO Batman é co-op clássico onde Batman e Robin impedem fugas do Arkham: Charada, Coringa e Pinguim espalham caos em Gotham em 3 capítulos cada.\n\nQuebre peças, construa veículos e jogue como vilões no modo história inverso. Humor slapstick e colecionáveis tornam Gotham divertida para todas as idades.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21000/header.jpg?t=1780596843",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21000/header.jpg?t=1780596843",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21000/0000005467.1920x1080.jpg?t=1780596843",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21000/0000005468.1920x1080.jpg?t=1780596843",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21000/0000005473.1920x1080.jpg?t=1780596843",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21000/0000005472.1920x1080.jpg?t=1780596843",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21000/0000005474.1920x1080.jpg?t=1780596843"
    ],
    "link": "https://download2281.mediafire.com/y281lny40nlgPKWnaJ_GaRH-i8cjtNDTVagVSI8T2zjkdzjmYsgIZB_qKkU0xX8X-apQpzImtmdxbOnAcVzfIh9TJZ_cnj1UA0nnQC09kFTnrvCQ90QKD_Ulbo1Kda5HQoba2sWVDdcHCqACG4Jew6rAxmoIoCdmB9kD23HE59K-leQ/d89db273or53vas/LEGO+Batman+The+Videogame+Build+19129138.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/K3v1N_N8b3U?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=K3v1N_N8b3U",
    "trailerId": "K3v1N_N8b3U",
    "preco": 35,
    "moedas": 35
  },
  {
    "id": "dredge",
    "nome": "DREDGE",
    "categoria": "Terror",
    "tamanho": "2 GB",
    "desenvolvedor": "Black Salt Games",
    "ano": "2023",
    "descricao": "Pesque de dia, tema a névoa à noite. Horror cósmico lovecraftiano em arquipélago amaldiçoado.",
    "historia": "DREDGE você é pescador em arquipélago onde pescar à noite atrai névoa e olhos vermelhos. Venda peixes mutantes, melhore barco e drague destroços enquanto o pânico sobe.\n\nCada ilha tem quest de habitantes e segredo eldritch. De dia é acolhedor, de noite é terror psicológico com criaturas abissais e livro de relíquias que altera sanidade.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1562430/header.jpg?t=1780479732",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1562430/header.jpg?t=1780479732",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1562430/ss_70f88014423ed93eaa111c0d0daca2c500f76908.1920x1080.jpg?t=1780479732",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1562430/ss_d4d4b14c5cd071307e27b4e9737f23f28b096248.1920x1080.jpg?t=1780479732",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1562430/ss_9529104cde1af2ffbb715cab42bbb3012fb9b7d8.1920x1080.jpg?t=1780479732",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1562430/ss_b60f2ff50997c5da29fcd783770053263aac26c0.1920x1080.jpg?t=1780479732",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1562430/ss_e964290b6a6a6941e299ba5be00fd3d98aec6d06.1920x1080.jpg?t=1780479732"
    ],
    "link": "https://download848.mediafire.com/drhdtk0w3hdgaq3DgBu-eHZ06lgo6I7cqPx8JGm_J8t8JTgXk35U0zKNaACD5wvRyX54oAV8ybij1wJzM39cIX-qvgfYZS1vke3L0OXDsBI3VnK4Tk8wI8EgstlmWWqs0QrTjQjypZ-OJLq-YrbmFLNQI5bwEKzlbzGjenYyYLH5Of0/nyltc6dgd6w2ha3/DREDGE.Complete.Edition.v1.5.3.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/v3_558sC8_s?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=v3_558sC8_s",
    "trailerId": "v3_558sC8_s",
    "preco": 65,
    "moedas": 65
  },
  {
    "id": "granny",
    "nome": "Granny",
    "categoria": "Terror",
    "tamanho": "300 MB",
    "desenvolvedor": "DVloper",
    "ano": "2017",
    "descricao": "Granny ouve tudo. Fuja da casa em 5 dias sem fazer barulho ou ela te pega.",
    "historia": "Granny tranca você em sua casa decrépita. Você tem 5 dias para escapar: esconda-se em armários, largue objetos sem fazer barulho, encontre chaves e queime retratos. Cada barulho atrai Granny mancando.\n\nCom modos Prática e Extremo e easter eggs de Slendrina, é o horror mobile que virou febre de streamers pela tensão e jumpscares.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/962780/header.jpg?t=1782962949",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/962780/header.jpg?t=1782962949",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/962780/ss_c10834a3f1f128b3c321d573d4686a41cfce7c65.1920x1080.jpg?t=1782962949",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/962780/ss_0cf80b43465711dbf1a474f40f4e068f076fd5d8.1920x1080.jpg?t=1782962949",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/962780/ss_e584f9f7d23b9fe10536650d605680a81f770a02.1920x1080.jpg?t=1782962949",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/962780/ss_31723f114453ad38bd3f9ebfc58c0fb81b322af5.1920x1080.jpg?t=1782962949",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/962780/ss_012273eec281272c8efbe8276c0835a35ecab39f.1920x1080.jpg?t=1782962949"
    ],
    "link": "https://download1321.mediafire.com/a8c01fupw8ggXXHLLhUcX7nwjqfagEGdWpHDvDQG707_FLnVI-FCx5VFVO8DGHxfKIa0ITdIFgD-Q9HRddXqodrVaK9EsfQ_4TFjO12GQG96QnCNxEQNnULnLr9dITYHy3s3RkVKGzYN4TXHaZrUEDiD4009bHs0E-B5Md9SWvqI1mw/72tm7a0v1bmqxty/Granny.Build.20640998.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/v2c8d23y394?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=v2c8d23y394",
    "trailerId": "v2c8d23y394",
    "preco": 25,
    "moedas": 25
  },
  {
    "id": "last-report",
    "nome": "Last Report",
    "categoria": "Terror",
    "tamanho": "2 GB",
    "desenvolvedor": "Unknown",
    "ano": "2024",
    "descricao": "Anomalia horror em estação. Observe câmeras e reporte diferenças antes que ela te note.",
    "historia": "Last Report é sucessor de Exit 8: você observa corredores e escritórios em loop procurando anomalias — quadro torto, sombra a mais, rosto no monitor. Reporte ou siga, mas errar custa sanidade.\n\nCom estética found footage e áudio binaural, cada anomalia é sutil. O jogo pune pressa e recompensa atenção, com múltiplos finais conforme você percebe o padrão.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2823080/237f2443665c1e1c5722f7f68b65113b86fb2890/header.jpg?t=1784130518",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2823080/237f2443665c1e1c5722f7f68b65113b86fb2890/header.jpg?t=1784130518",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2823080/feef976c7d86e380e4389f5f3b102543fe27f618/ss_feef976c7d86e380e4389f5f3b102543fe27f618.1920x1080.jpg?t=1784130518",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2823080/1fab5d891904a4ef89a101b0b57f4d98cdef8e20/ss_1fab5d891904a4ef89a101b0b57f4d98cdef8e20.1920x1080.jpg?t=1784130518",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2823080/c96545b0d24391f58fda7540ce8cca05ce156791/ss_c96545b0d24391f58fda7540ce8cca05ce156791.1920x1080.jpg?t=1784130518",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2823080/3de118992771bf813b39bc482f1837a1ef4c6a1d/ss_3de118992771bf813b39bc482f1837a1ef4c6a1d.1920x1080.jpg?t=1784130518",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2823080/9ed234201e392512eecc1832c5cbe00d8c0253ec/ss_9ed234201e392512eecc1832c5cbe00d8c0253ec.1920x1080.jpg?t=1784130518"
    ],
    "link": "https://download937.mediafire.com/gkeeoaslhhzgDe6Xkw4bcd7Jz6PO4UtWr3AC0j3Px1n_rGwikXtBtDCjDt9CJrpTspqtNufcIcs-_dE1J8id8iYbHXFxsketIzupngd-YkGHjgAvoR1sVkmwLORgq9TO_aKX5lWkh-T_O1yEwSG4VoeejtZx8gGrenUFX9LJLqjIz3g/9fk3l9qk5d35qtw/Last+Report+Build+19331946.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/V7Aeu41Wdz4?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=V7Aeu41Wdz4",
    "trailerId": "V7Aeu41Wdz4",
    "preco": 25,
    "moedas": 25
  },
  {
    "id": "rain-world",
    "nome": "Rain World",
    "categoria": "Aventura",
    "tamanho": "2 GB",
    "desenvolvedor": "VideoCult",
    "ano": "2017",
    "descricao": "Sobreviva como slugcat em ecossistema brutal. Física, chuva mortal e IA de predadores.",
    "historia": "Rain World é sobrevivência hardcore onde você é um slugcat separado da família, atravessando ruínas industriais antes que a chuva ácida te mate. Sem tutorial, você aprende a caçar morcegos com lanças e a evitar lagartos camuflados.\n\nEcossistema simulado: criaturas caçam entre si, ciclos de hibernação e karma gating. É difícil, lindo e recompensa paciência com lore de iteradores roboticos que falam sobre transcendência.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/312520/dc5bd100e86dbdb088e7ff17cdb601e7eb2e00bc/header.jpg?t=1786047879",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/312520/dc5bd100e86dbdb088e7ff17cdb601e7eb2e00bc/header.jpg?t=1786047879",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/312520/ss_cbd4e647d6b3bb3b311cb68fdf0cd8835d5919d7.1920x1080.jpg?t=1786047879",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/312520/ss_628274c84b196e270733f540139062f2787c4423.1920x1080.jpg?t=1786047879",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/312520/ss_d551eee41e60ba8f5f2005b3de41c5f2c27cb444.1920x1080.jpg?t=1786047879",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/312520/ss_5c8c0413e98f3521e3df370d4ad7018b771ce353.1920x1080.jpg?t=1786047879",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/312520/ss_becb0959f6479d07e05f2c14f48980a15b5e5192.1920x1080.jpg?t=1786047879"
    ],
    "link": "https://download938.mediafire.com/v5095i2404xghr6fqeIZOghU8slpp_xrZ1sT47z8JD4qAEJKIQed0YLX9b2gTXeFzhrYGi-xPramOPmRvBa0Yj6x47OXfiodBW3Xywt2npEC5-wUm-jYewiYesMAbBzaqgq8nQkJHs15X3-V7vYDNkP42mHdvgOQvXBKoM9JUmHWLqk/dg2rr3irq9wv5ax/Rain.World.v1.11.5.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/0bTu4-ZJiSM?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=0bTu4-ZJiSM",
    "trailerId": "0bTu4-ZJiSM",
    "preco": 55,
    "moedas": 55
  },
  {
    "id": "green-hell",
    "nome": "Green Hell",
    "categoria": "Sobrevivência",
    "tamanho": "8 GB",
    "desenvolvedor": "Creepy Jar",
    "ano": "2018",
    "descricao": "Sobrevivência realista na Amazônia. Feridas, alucinações e sanidade na selva.",
    "historia": "Green Hell te larga na Amazônia sem nada após ligação pedindo ajuda. Jake precisa achar a esposa Mia enquanto lida com feridas infeccionadas, sanguessugas, cobras e alucinações psicológicas.\n\nConstrua abrigo, faça fogo com atrito, cuide de macros nutricionais e da mente. História e co-op mostram que a selva é o maior inimigo — e dentro da cabeça também.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/815370/header.jpg?t=1783077147",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/815370/header.jpg?t=1783077147",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/815370/ss_5acf01bcbf6f17e2fbeb9378f9e604f03d60e81b.1920x1080.jpg?t=1783077147",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/815370/ss_d87e2a79e9ac8de98c69a38b8447607d7ad3a4b5.1920x1080.jpg?t=1783077147",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/815370/ss_138caa0409f2a2afd94f2f38a7362f7c63169423.1920x1080.jpg?t=1783077147",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/815370/ss_a350eb858d655890495ba116fe641266d23315c0.1920x1080.jpg?t=1783077147",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/815370/ss_9c5e649f1c5774db50db4368b762015ae8207b43.1920x1080.jpg?t=1783077147"
    ],
    "link": "https://download937.mediafire.com/fgxuav2tsn8gHalCrgTe4hipRHjk-k5AthYTZUbPB7Q1tNqpo0uG2mtx8R0wAysCHhS-DRpXyEXzJrdVE7Wt4L5QdFtbCW6iibkbBJRjJrJmCI3_UMBRPUWFn1-Wjg2w_zbpEr52935NmZNLf8I67jCVAfb_2um0-yZAY5X2JQVx/q6pbyhcvnu2sp9q/Green+Hell+Build+11252025.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/QB4SuLAn6B8?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=QB4SuLAn6B8",
    "trailerId": "QB4SuLAn6B8",
    "preco": 60,
    "moedas": 60
  },
  {
    "id": "cult-of-the-lamb",
    "nome": "Cult of the Lamb",
    "categoria": "Aventura",
    "tamanho": "1 GB",
    "desenvolvedor": "Massive Monster",
    "ano": "2022",
    "descricao": "Cordeiro messias e gerente de culto. Roguelite + Animal Crossing demoníaco.",
    "historia": "Cult of the Lamb: você é cordeiro sacrificado que é ressuscitado por Aquele Que Espera e deve criar um culto em seu nome. Saia em cruzadas roguelite, converta seguidores e os leve à base.\n\nConstrua, pregue sermões, extraia fé ou sacrifique. Decida ser líder benevolente ou tirano que casa fiéis. Com arte fofa e humor blasfemo, é vício puro.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/19f32bb477a6e9d058e05193b4e282149bd70644/header.jpg?t=1786554901",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/19f32bb477a6e9d058e05193b4e282149bd70644/header.jpg?t=1786554901",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/ss_3bda2c2e740660fcde8c42eafab4cb7574ab54e6.1920x1080.jpg?t=1786554901",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/ss_805babf3c8dec217798c836daea48a63b47c192b.1920x1080.jpg?t=1786554901",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/ss_b26625d6f64a739ed1ddf832a5d26b665ab0619f.1920x1080.jpg?t=1786554901",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/ss_90f238e89ab4c4500d3baee273419bd23f8e5f84.1920x1080.jpg?t=1786554901",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/ss_f4ca3fd0416c3f41c57bc3809bb45f8f20e684ec.1920x1080.jpg?t=1786554901"
    ],
    "link": "https://download1588.mediafire.com/7hvdrepvlzxgxOdNebm58Bizy1XHvlebbogmI6FQSfA0CQcW4ZyqVLQQft0-YLqE0UFQzo6-Oubjl2Z7wJUE2letRKx4IKPm2RJ3OfICvYcvIPY4SIjaygX728NXWAMz09tLobNEwbFFVmsjTU0TB3YmWW5Sb37Yh5zdVYQMfNdi/e4vyeiax74v8p2n/Cult+of+the+Lamb.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/Qj4G8T6B-wA?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=Qj4G8T6B-wA",
    "trailerId": "Qj4G8T6B-wA",
    "preco": 70,
    "moedas": 70
  },
  {
    "id": "forager",
    "nome": "Forager",
    "categoria": "Simulação",
    "tamanho": "300 MB",
    "desenvolvedor": "HopFrog",
    "ano": "2019",
    "descricao": "Idle + Zelda + Stardew. Minere, fabrique e expanda ilhas num loop viciante.",
    "historia": "Forager começa com você sozinho numa ilha batendo em árvore e, 10 horas depois, você tem fábricas, arqueologia, pesca e masmorras. Tudo é grind recompensador: compre terras, desbloqueie habilidades e automatize.\n\nCom puzzles, chefes e segredos, é o jogo de números subindo que nunca fica chato — perfeito para relaxar farmando.",
    "imagem": "https://cdn.cloudflare.steamstatic.com/steam/apps/704780/header.jpg",
    "galeria": [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/704780/header.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/704780/ss_1.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/704780/ss_2.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/704780/ss_3.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/704780/capsule_616x353.jpg"
    ],
    "link": "https://download1334.mediafire.com/wtkhe5ruhjugMaYI5AGijxudylp3QR9LIgRXPtMQ01u5Xlg9aibrz84eN9LNEbuP2nXdy-EIwWRUrDbaO8UOBVF-3zcuTUDxBgHwup0dpEdoS7HrSdzOJfESVsTl1sNZEoYwEVEx4R54zO85Cn0adPP9AuIyorRqIbaQIKlVX9AJ/b1uq6afkgsir5rh/Forager+v5.0.0.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/gJzOq3K-o1o?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=gJzOq3K-o1o",
    "trailerId": "gJzOq3K-o1o",
    "preco": 35,
    "moedas": 35
  },
  {
    "id": "supermarket-simulator",
    "nome": "Supermarket Simulator",
    "categoria": "Simulação",
    "tamanho": "4 GB",
    "desenvolvedor": "Nokta Games",
    "ano": "2024",
    "descricao": "Seja dono de mercado. Compre estoque, precifique e atenda — com mods brasileiros inclusos.",
    "historia": "Supermarket Simulator te dá uma loja vazia e 500 reais. Compre prateleiras, geladeiras, estoque cereais e leite, defina preços, passe no caixa e expanda.\n\nContrate caixas, lide com ladrões e faça pedidos. A versão com Mods Brasileiros traz produtos nacionais e humor local. É simulador relaxante e meme que virou hit.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2670630/267eef055b0e5d45cb1c874f816a31dded4bb88e/header.jpg?t=1787758631",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2670630/267eef055b0e5d45cb1c874f816a31dded4bb88e/header.jpg?t=1787758631",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2670630/b40f7ee28a8429e9ad7c6f016cf4e29cfcf6ba8d/ss_b40f7ee28a8429e9ad7c6f016cf4e29cfcf6ba8d.1920x1080.jpg?t=1787758631",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2670630/d7a5a9f57ed36a5552e2892fffda6aa171f9fe95/ss_d7a5a9f57ed36a5552e2892fffda6aa171f9fe95.1920x1080.jpg?t=1787758631",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2670630/b0a62c37675c711c85c050bc8e5f96c7ff29b1a4/ss_b0a62c37675c711c85c050bc8e5f96c7ff29b1a4.1920x1080.jpg?t=1787758631",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2670630/3e702a80da12cb9b50816e296f8ebf29757b680d/ss_3e702a80da12cb9b50816e296f8ebf29757b680d.1920x1080.jpg?t=1787758631",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2670630/2d87683322acd4433c97a18a3196326e1862e1fb/ss_2d87683322acd4433c97a18a3196326e1862e1fb.1920x1080.jpg?t=1787758631"
    ],
    "link": "https://download1475.mediafire.com/in5dz5a2xkhgcQQKGrQO3b7sOwMrT1RlbO7jcNEqu9QumjiV6rfLCwYr10EbOVw7JgQnWzW09HnutUSdVO_OT4b4IIv8kZ5PgZsvDZq_FopueFBLLYJmROwuQKF1HGUlNjzK8njdUJYsKXHPyhappHADdBw8p-qDb13e1qd-NIwpvFc/0tqq1cw5mwfd4tg/Supermarket.Simulator.v1.2.4+%28Mods+Brasileiros%29.rar",
    "trailer": "https://www.youtube-nocookie.com/embed/K8wM1nLz7tQ?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=K8wM1nLz7tQ",
    "trailerId": "K8wM1nLz7tQ",
    "preco": 35,
    "moedas": 35
  },
  {
    "id": "deadpool-2013",
    "nome": "Deadpool (2013)",
    "categoria": "Ação",
    "tamanho": "7 GB",
    "desenvolvedor": "High Moon Studios",
    "ano": "2013",
    "descricao": "O mercenário tagarela quebra a quarta parede. Hack & slash com Nolan North no auge.",
    "historia": "Deadpool 2013 é o jogo que entende Deadpool. Wade chama Nolan North para se ditar, sequestra roteirista da High Moon, e explode tudo com katanas e piadas. A campanha é metalinguagem total.\n\nLute contra Sinistro, Chance e clones, misturando tiro, espada e teleporte, com QTEs e upgrades. É bagunçado, ultraviolento e hilário — exatamente como Wade quer.",
    "imagem": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/215280/header.jpg?t=1728917535",
    "galeria": [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/215280/header.jpg?t=1728917535",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/215280/ss_9767031b87110cd072d33b9ef37ef3b0e7178840.1920x1080.jpg?t=1728917535",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/215280/ss_af801037eb1e336756a4f15a0b9577b041befc78.1920x1080.jpg?t=1728917535",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/215280/ss_08cc65e5819e6c01e70b1ec19fd9b96fd2c535be.1920x1080.jpg?t=1728917535",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/215280/ss_eeb5b8dcad445a5361a2e006a5f95233c4387774.1920x1080.jpg?t=1728917535",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/215280/ss_a75e51b6365d2381d62a27b0740a95c06475d7a4.1920x1080.jpg?t=1728917535"
    ],
    "link": "https://archive.org/download/deadpool.-7z/Deadpool.7z",
    "trailer": "https://www.youtube-nocookie.com/embed/A_l5r711-20?rel=0&modestbranding=1&playsinline=1",
    "trailerWatch": "https://www.youtube.com/watch?v=A_l5r711-20",
    "trailerId": "A_l5r711-20",
    "preco": 60,
    "moedas": 60
  }
];

let todosJogos = [...JOGOS];
let categoriaAtual = 'Todas';

// ===== SISTEMA DE MOEDAS MR PLOCK =====
const COUPONS = {
  'MRPLOCK10': 100,
  'BEMVINDO50': 50,
  'BEMVINDO': 50,
  'WORLDSECRET': 200,
  'NFSNITRO': 150,
  'GOLDENFREDDY': 500,
  'PL0CK2026': 300,
  'FNAFLOVER': 120
};
const PACKS = [
  { id:'p40', moedas:40, preco:'R$ 3,90', bonus:0 },
  { id:'p100', moedas:100, preco:'R$ 9,90', bonus:15, destaque:true },
  { id:'p200', moedas:200, preco:'R$ 17,90', bonus:35 },
  { id:'p400', moedas:400, preco:'R$ 29,90', bonus:80, destaque:true },
  { id:'p800', moedas:800, preco:'R$ 59,90', bonus:180 },
  { id:'p1700', moedas:1700, preco:'R$ 99,90', bonus:400 }
];
function getCoins(){ return parseInt(localStorage.getItem('mrplock_coins')||'0'); }
function setCoins(v){ localStorage.setItem('mrplock_coins', String(v)); updateCoinsDisplay(); }
function addCoins(v){ setCoins(getCoins()+v); }
function getUnlocked(){ try{ return JSON.parse(localStorage.getItem('mrplock_unlocked')||'[]'); }catch(e){return [];} }
function isUnlocked(id){ return getUnlocked().includes(id); }
function unlockGame(id){
  const list=getUnlocked();
  if(!list.includes(id)){ list.push(id); localStorage.setItem('mrplock_unlocked', JSON.stringify(list)); }
}
function getUsedCoupons(){ try{ return JSON.parse(localStorage.getItem('mrplock_used_coupons')||'[]'); }catch(e){return [];} }
function isCouponUsed(c){ return getUsedCoupons().includes(c.toUpperCase()); }
function markCouponUsed(c){ const u=getUsedCoupons(); u.push(c.toUpperCase()); localStorage.setItem('mrplock_used_coupons', JSON.stringify(u)); }
function updateCoinsDisplay(){
  const el=document.getElementById('coins-valor');
  if(el) el.textContent = getCoins();
}
function showToast(msg, tipo='ok'){
  const cont=document.getElementById('toast-container');
  if(!cont) return;
  const t=document.createElement('div');
  t.className='toast '+tipo;
  t.textContent=msg;
  cont.appendChild(t);
  setTimeout(()=>{ t.remove(); }, 3000);
}
function comprarJogo(id){
  if(!isLoggedIn()){ requireLogin(); return; }
  const jogo=todosJogos.find(j=>j.id===id);
  if(!jogo) return;
  const preco=jogo.preco||jogo.moedas||150;
  if(isUnlocked(id)){
    showToast('✅ Jogo já desbloqueado! Download liberado.', 'ok');
    window.open(jogo.link, '_blank');
    return;
  }
  const moedas=getCoins();
  if(moedas < preco){
    showToast(`❌ Moedas insuficientes! Precisa de ${preco} 🪙 (você tem ${moedas})`, 'erro');
    abrirLoja();
    return;
  }
  // confirmar compra
  abrirModalCompra(jogo);
}
function triggerPurchaseAnimation(jogo, preco){
  const overlay=document.getElementById('purchase-animation');
  const title=document.getElementById('purchase-title');
  const desc=document.getElementById('purchase-desc');
  const coinsEl=document.getElementById('purchase-coins-val');
  const confettiBox=document.getElementById('purchase-confetti');
  if(!overlay) return;
  if(title) title.textContent=jogo.nome||'Jogo Desbloqueado!';
  if(desc) desc.textContent=`Desbloqueado por ${preco} 🪙 • Na sua biblioteca para sempre`;
  if(coinsEl) coinsEl.textContent=`-${preco}`;
  // confetti
  if(confettiBox){
    confettiBox.innerHTML='';
    const colors=['#facc15','#8b5cf6','#06ffa5','#ff0033','#ff8c00','#06b6d4'];
    for(let i=0;i<28;i++){
      const p=document.createElement('div');
      p.className='confetti-piece';
      p.style.left=(Math.random()*100)+'%';
      p.style.background=colors[Math.floor(Math.random()*colors.length)];
      p.style.setProperty('--drift', (Math.random()*120-60)+'px');
      p.style.animationDuration=(0.9+Math.random()*0.8)+'s';
      p.style.animationDelay=(Math.random()*0.25)+'s';
      p.style.transform=`rotate(${Math.random()*360}deg)`;
      confettiBox.appendChild(p);
    }
  }
  overlay.hidden=false;
  // pulse coins header
  const coinsDisp=document.getElementById('coins-display');
  if(coinsDisp){ coinsDisp.classList.remove('pulse'); void coinsDisp.offsetWidth; coinsDisp.classList.add('pulse'); }
  // pulse card if visible
  document.querySelectorAll('.card').forEach(c=>{
    if(c.textContent.includes(jogo.nome)){
      c.classList.add('purchasing');
      setTimeout(()=>c.classList.remove('purchasing'),800);
    }
  });
  // haptics
  if(navigator.vibrate) navigator.vibrate([40,30,60]);
  // auto close
  setTimeout(()=>{ overlay.hidden=true; if(confettiBox) confettiBox.innerHTML=''; }, 2600);
  overlay.onclick=()=>{ overlay.hidden=true; if(confettiBox) confettiBox.innerHTML=''; };
}

function confirmarCompra(id){
  const jogo=todosJogos.find(j=>j.id===id);
  if(!jogo) return;
  const preco=jogo.preco||150;
  if(getCoins() < preco){ showToast('Moedas insuficientes', 'erro'); return; }
  setCoins(getCoins()-preco);
  unlockGame(id);
  showToast(`✅ ${jogo.nome} desbloqueado por ${preco} 🪙!`, 'ok');
  fecharModal('modal-compra');
  renderizarCatalogo(document.getElementById('busca')?.value||'');
  atualizarBibliotecaCount();
  renderizarBiblioteca();
  // se estiver na página de detalhes, atualizar
  if(location.hash.includes(id)) exibirDetalhes(jogo);
  triggerPurchaseAnimation(jogo, preco);
}
function resgatarCupom(codigo){
  if(!isLoggedIn()){ requireLogin(); return; }
  const c=codigo.trim().toUpperCase();
  const msgEl=document.getElementById('cupom-msg');
  if(!c){ if(msgEl){msgEl.textContent='Digite um código!'; msgEl.className='cupom-msg erro';} return; }
  if(isCouponUsed(c)){ if(msgEl){msgEl.textContent='❌ Cupom já usado!'; msgEl.className='cupom-msg erro';} showToast('Cupom já resgatado', 'erro'); return; }
  const valor=COUPONS[c];
  if(!valor){ if(msgEl){msgEl.textContent='❌ Código inválido!'; msgEl.className='cupom-msg erro';} showToast('Código inválido', 'erro'); return; }
  addCoins(valor);
  markCouponUsed(c);
  if(msgEl){msgEl.textContent=`✅ +${valor} moedas! Novo saldo: ${getCoins()} 🪙`; msgEl.className='cupom-msg ok';}
  showToast(`🎟️ Cupom ${c} resgatado! +${valor} 🪙`, 'ok');
  document.getElementById('cupom-input').value='';
}
function iniciarDownloadDireto(jogoId){
  const jogo=todosJogos.find(j=>j.id===jogoId);
  if(!jogo) return;
  if(!isLoggedIn()){ requireLogin(); return; }
  if(!isUnlocked(jogoId)){
    showToast('🔒 Compre o jogo primeiro por '+ (jogo.preco||150) +' 🪙', 'erro');
    comprarJogo(jogoId);
    return;
  }
  const link=jogo.link;
  if(!link || link==='#'){ showToast('Link indisponível', 'erro'); return; }
  showToast('⬇ Baixando '+jogo.nome+' direto...', 'ok');
  // Download direto sem abrir outra página: usa âncora com download + iframe oculto para MediaFire
  try{
    const a=document.createElement('a');
    a.href=link;
    // Para links diretos (download*.mediafire.com ou mesmo origem), o atributo download força download sem navegação
    // Para links de página, o navegador vai baixar o arquivo direto se for .rar
    a.setAttribute('download','');
    a.style.display='none';
    document.body.appendChild(a);
    a.click();
    setTimeout(()=>{ try{ a.remove(); }catch(e){} }, 1500);
    // Fallback para MediaFire: se o link for página e o download não iniciar, usar iframe oculto
    // O iframe mantém o usuário na mesma página enquanto o download inicia em segundo plano
    if(link.includes('mediafire.com/file/')){
      setTimeout(()=>{
        const iframe=document.createElement('iframe');
        iframe.style.display='none';
        iframe.src=link;
        document.body.appendChild(iframe);
        setTimeout(()=>{ try{ iframe.remove(); }catch(e){} }, 30000);
      }, 800);
    }
  }catch(e){
    // último fallback
    window.location.href=link;
  }
}

function comprarPack(packId){
  if(!isLoggedIn()){ requireLogin(); return; }
  const pack=PACKS.find(p=>p.id===packId);
  if(!pack) return;
  const total=pack.moedas + (pack.bonus||0);
  // simulação de pagamento com dinheiro real
  showToast(`💳 Pagamento simulado: ${pack.preco} → +${total} 🪙 creditadas!`, 'ok');
  addCoins(total);
  showToast(`💎 +${total} moedas! Saldo: ${getCoins()}`, 'ok');
}
function abrirModal(id){ const m=document.getElementById(id); if(m) m.hidden=false; }
function fecharModal(id){ const m=document.getElementById(id); if(m) m.hidden=true; }
function abrirCupom(){ abrirModal('modal-cupom'); }
function abrirLoja(){ renderLoja(); abrirModal('modal-loja'); }
function abrirModalCompra(jogo){
  const modal=document.getElementById('modal-compra');
  const titulo=document.getElementById('modal-compra-titulo');
  const conteudo=document.getElementById('modal-compra-conteudo');
  if(!modal||!titulo||!conteudo) return;
  const preco=jogo.preco||150;
  const saldo=getCoins();
  titulo.textContent=`🪙 Comprar ${jogo.nome}`;
  const confirmarId = `confirmar-${jogo.id}-${Date.now()}`;
  conteudo.innerHTML=`
    <div style="text-align:center; padding:10px;">
      <img src="${jogo.imagem}" alt="${jogo.nome}" style="width:100%; max-width:320px; border-radius:12px; border:1px solid rgba(255,255,255,0.08); margin-bottom:14px;">
      <p style="color:var(--text-muted); margin-bottom:12px;">Desbloqueie o download por <strong style="color:#fde68a;">${preco} 🪙</strong></p>
      <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.06); border-radius:10px; padding:12px; margin-bottom:14px; display:flex; justify-content:space-between; font-weight:700;">
        <span>Seu saldo:</span><span>${saldo} 🪙</span>
      </div>
      <label style="display:flex; align-items:center; gap:8px; background:rgba(250,204,21,0.08); border:1px solid rgba(250,204,21,0.25); border-radius:8px; padding:10px; margin-bottom:14px; cursor:pointer; font-size:0.88rem; text-align:left;">
        <input type="checkbox" id="${confirmarId}" style="accent-color:#facc15; width:18px; height:18px;">
        <span>Confirmo que quero comprar <strong>${jogo.nome}</strong> por <strong>${preco} 🪙</strong> e entendo que as moedas serão debitadas.</span>
      </label>
      <div style="display:flex; gap:10px;">
        <button class="btn btn-secundario" onclick="fecharModal('modal-compra')" style="flex:1;">Cancelar</button>
        <button class="btn btn-comprar" id="btn-confirmar-compra" disabled style="flex:1; opacity:0.5; cursor:not-allowed;" onclick="confirmarCompra('${jogo.id}')">✅ Confirmar por ${preco} 🪙</button>
      </div>
      ${saldo < preco ? `<p style="color:#fecdd3; font-size:0.82rem; margin-top:10px;">⚠️ Saldo insuficiente. <a href="#" onclick="fecharModal('modal-compra'); abrirLoja(); return false;" style="color:#facc15;">Recarregar moedas</a> (dinheiro real)</p>` : ''}
    </div>
  `;
  setTimeout(()=>{
    const chk=document.getElementById(confirmarId);
    const btn=document.getElementById('btn-confirmar-compra');
    if(chk && btn){
      chk.addEventListener('change', ()=>{
        btn.disabled=!chk.checked;
        btn.style.opacity=chk.checked?'1':'0.5';
        btn.style.cursor=chk.checked?'pointer':'not-allowed';
      });
    }
  },100);
  modal.hidden=false;
}
function renderLoja(){
  const grid=document.getElementById('loja-grid');
  if(!grid) return;
  grid.innerHTML='';
  PACKS.forEach(p=>{
    const total=p.moedas + (p.bonus||0);
    const card=document.createElement('div');
    card.className='pack-card'+(p.destaque?' destaque':'');
    card.innerHTML=`
      <div class="pack-valor">${p.moedas} <small>🪙</small></div>
      ${p.bonus? `<div class="pack-bonus">+${p.bonus} bônus</div>` : '<div class="pack-bonus" style="opacity:0;">.</div>'}
      <div style="font-size:0.82rem; color:var(--text-muted);">Total: <strong style="color:#fff;">${total} 🪙</strong></div>
      <div class="pack-preco">${p.preco}</div>
      <button class="btn-pack" onclick="comprarPack('${p.id}')">💳 Comprar</button>
      <div style="font-size:0.70rem; color:var(--text-muted); margin-top:6px;">Dinheiro real (simulado)</div>
    `;
    grid.appendChild(card);
  });
}

function atualizarBibliotecaCount(){
  const count=getUnlocked().length;
  const badge=document.getElementById('biblioteca-count');
  if(badge) badge.textContent=count;
  const stats=document.getElementById('biblioteca-stats');
  if(stats){
    const total=todosJogos.length;
    const pct= total? Math.round(count/total*100):0;
    stats.innerHTML=`<span class="stat">📚 <strong>${count}</strong> de <strong>${total}</strong> jogos</span><span class="stat">🪙 Saldo: <strong>${getCoins()}</strong></span><span class="stat">✅ ${pct}% completo</span>`;
  }
}

function renderizarBiblioteca(){
  const grade=document.getElementById('grade-biblioteca');
  const vazio=document.getElementById('vazio-biblioteca');
  if(!grade) return;
  const desbloqueados=todosJogos.filter(j=> isUnlocked(j.id));
  grade.innerHTML='';
  if(vazio) vazio.hidden=desbloqueados.length>0;
  atualizarBibliotecaCount();
  if(desbloqueados.length===0){
    grade.innerHTML='';
    return;
  }
  desbloqueados.forEach(j=>{
    const gameId=j.id;
    const card=document.createElement('div');
    card.className='card';
    const cl=(j.categoria||'').toLowerCase();
    let catClass='cat-simulacao';
    if(cl.includes('terror')) catClass='cat-terror'; else if(cl.includes('corrida')) catClass='cat-corrida'; else if(cl.includes('simula')) catClass='cat-simulacao';
    card.innerHTML=`
      <div class="card-img-wrap">
        <img src="${j.imagem||''}" alt="${j.nome}" onerror="this.src='https://placehold.co/460x215/151b24/ffffff?text=Sem+Imagem'" />
        <span class="price-badge" style="background:#065f46; color:#6ee7b7;">✅ Seu</span>
        <span class="card-category-accent ${catClass}">${j.categoria||'Outros'}</span>
        <span class="card-overlay-badge">📚 Na sua biblioteca</span>
      </div>
      <div class="card-body">
        <h3>${j.nome}</h3>
        <div class="meta"><span>${j.categoria||'Outros'}</span><span>${j.tamanho||''}</span></div>
        <p class="desc">${j.descricao||''}</p>
        <div class="card-actions">
          <a class="btn btn-secundario" href="#jogo/${gameId}">📖 Ver</a>
          <button class="btn btn-desbloqueado" onclick="iniciarDownloadDireto('${gameId}')">⬇ Baixar novamente</button>
        </div>
      </div>`;
    card.onclick=(e)=>{ if(e.target.tagName!=='A' && !e.target.closest('a')) window.location.hash=`#jogo/${gameId}`; };
    grade.appendChild(card);
  });
}

function exibirBiblioteca(){
  document.getElementById('view-catalogo').hidden=true;
  document.getElementById('view-detalhes').hidden=true;
  const bib=document.getElementById('view-biblioteca');
  if(bib) bib.hidden=false;
  document.getElementById('search-wrap').style.display='none';
  limparTema();
  // esconder trailer
  const ts=document.getElementById('trailer-section');
  const ti=document.getElementById('trailer-iframe');
  const tf=document.getElementById('trailer-fallback');
  if(ts) ts.hidden=true;
  if(ti){ ti.src=''; ti.style.display='block'; }
  if(tf) tf.hidden=true;
  // nav
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  const nb=document.getElementById('nav-biblioteca');
  if(nb) nb.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
  if(!isLoggedIn()){ requireLogin(); return; }
  renderizarBiblioteca();
}

function exibirHome(){
  document.getElementById('view-biblioteca').hidden=true;
  document.getElementById('view-catalogo').hidden=false;
  document.getElementById('view-detalhes').hidden=true;
  document.getElementById('search-wrap').style.display='block';
  limparTema();
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  const nh=document.getElementById('nav-home');
  if(nh) nh.classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
  renderizarCatalogo(document.getElementById('busca')?.value||'');
}

// ===== SISTEMA DE AUTENTICAÇÃO COM VERIFICAÇÃO REAL DE E-MAIL (Firebase) =====
// Para e-mail REAL, crie um projeto em https://console.firebase.google.com
// Ative Authentication > Sign-in method > E-mail/senha > Ativado
// Copie a config (Project settings > General > Your apps > Config) e cole abaixo.
// Se FIREBASE_CONFIG ficar null, o sistema funciona em MODO DEMO (simula envio e mostra código no console).
const FIREBASE_CONFIG = null; // EXEMPLO: { apiKey:"...", authDomain:"...", projectId:"...", appId:"..." }

let auth = null;
let currentUser = null;
let isFirebaseReady = false;

function initFirebase(){
  if (typeof firebase === 'undefined') {
    console.log('Firebase SDK não carregado - modo demo');
    return;
  }
  if (!FIREBASE_CONFIG || !FIREBASE_CONFIG.apiKey) {
    console.log('FIREBASE_CONFIG não configurado - modo demo. Para e-mail REAL, configure em script.js. Instruções no console.');
    console.log('1. Acesse https://console.firebase.google.com > Criar projeto > Authentication > Email/Password Ativado');
    console.log('2. Project Settings > General > Config > copie e cole em FIREBASE_CONFIG');
    console.log('3. O e-mail de verificação real será enviado de noreply@SEU-PROJETO.firebaseapp.com');
    return;
  }
  try {
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    auth = firebase.auth();
    isFirebaseReady = true;
    console.log('Firebase Auth pronto - e-mails REAIS serão enviados');
    auth.onAuthStateChanged(handleAuthState);
  } catch(e){
    console.error('Erro Firebase', e);
  }
}

function handleAuthState(user){
  currentUser = user;
  const loginScreen=document.getElementById('login-screen');
  if (loginScreen) loginScreen.hidden=true;
  document.body.style.overflow='';
  const userMenu=document.getElementById('user-menu');
  if (userMenu) userMenu.hidden=true;
  // atualizar cadeados
  if (typeof renderizarCatalogo==='function' && document.getElementById('grade')) {
    try{ renderizarCatalogo(document.getElementById('busca')?.value||''); }catch(e){}
  }
}

function isLoggedIn(){
  return true;
}

function requireLogin(){
  // login removido - sempre liberado
  return true;
}

// Registro com e-mail real
async function handleRegister(){
  const emailEl=document.getElementById('reg-email');
  const p1El=document.getElementById('reg-password');
  const p2El=document.getElementById('reg-password2');
  const msgEl=document.getElementById('register-msg');
  const email=emailEl?.value.trim();
  const p1=p1El?.value;
  const p2=p2El?.value;
  if (!email || !p1 || !p2){ if(msgEl){msgEl.textContent='Preencha todos os campos!'; msgEl.className='login-msg erro';} return; }
  if (p1!==p2){ if(msgEl){msgEl.textContent='Senhas não conferem!'; msgEl.className='login-msg erro';} return; }
  if (p1.length<6){ if(msgEl){msgEl.textContent='Senha precisa de 6+ caracteres!'; msgEl.className='login-msg erro';} return; }
  if(msgEl){msgEl.textContent='Criando conta...'; msgEl.className='login-msg ok';}
  if (isFirebaseReady && auth) {
    try{
      const cred=await auth.createUserWithEmailAndPassword(email, p1);
      await cred.user.sendEmailVerification();
      if(msgEl){msgEl.textContent='✅ Conta criada! E-mail de verificação REAL enviado.'; msgEl.className='login-msg ok';}
      showToast('📧 E-mail de verificação enviado! Verifique sua caixa (e spam)', 'ok');
      handleAuthState(cred.user);
    }catch(e){
      let m=e.message;
      if(e.code==='auth/email-already-in-use') m='E-mail já cadastrado!';
      else if(e.code==='auth/invalid-email') m='E-mail inválido!';
      if(msgEl){msgEl.textContent='❌ '+m; msgEl.className='login-msg erro';}
      showToast(m, 'erro');
    }
  } else {
    // MODO DEMO - simula envio real mas mostra código no console e na tela
    const code=Math.floor(100000+Math.random()*900000).toString();
    const demoUsers=JSON.parse(localStorage.getItem('mrplock_demo_users')||'{}');
    demoUsers[email]={ password:p1, code:code, verified:false, created:Date.now() };
    localStorage.setItem('mrplock_demo_users', JSON.stringify(demoUsers));
    localStorage.setItem('mrplock_demo_pending', email);
    if(msgEl){msgEl.textContent='✅ Conta demo criada! Código enviado (simulado).'; msgEl.className='login-msg ok';}
    const demoEl=document.getElementById('verify-demo');
    if(demoEl){
      demoEl.hidden=false;
      demoEl.textContent=`🔧 MODO DEMO (sem Firebase): Código de verificação para ${email} é ${code} — copie e use no botão "Já verifiquei" (digite o código no console se necessário). Para e-mail REAL configure FIREBASE_CONFIG.`;
    }
    console.log(`[DEMO] Código de verificação para ${email}: ${code} — Para testar, clique em "Já verifiquei" e digite ${code} quando solicitado`);
    showToast(`📧 Código demo: ${code} (veja console)`, 'ok');
    // mostrar tela de verificação
    const ve=document.getElementById('verify-email');
    const vb=document.getElementById('verify-box');
    const rf=document.getElementById('register-form');
    if(ve) ve.textContent=email;
    if(vb) vb.hidden=false;
    if(rf) rf.hidden=true;
    document.getElementById('login-form').hidden=true;
    // também tentar enviar via FormSubmit como fallback real (opcional)
    try{
      // tentativa de envio real via um serviço livre (pode falhar sem config, mas não bloqueia)
      fetch(`https://formsubmit.co/ajax/${encodeURIComponent(email)}`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ subject:'MR PLOCK - Código de verificação', message:`Seu código é ${code}. Use para verificar sua conta.` })
      }).catch(()=>{});
    }catch(e){}
  }
}

async function handleLogin(){
  const emailEl=document.getElementById('login-email');
  const passEl=document.getElementById('login-password');
  const msgEl=document.getElementById('login-msg');
  const email=emailEl?.value.trim();
  const pass=passEl?.value;
  if(!email||!pass){ if(msgEl){msgEl.textContent='Preencha e-mail e senha!'; msgEl.className='login-msg erro';} return; }
  if(msgEl){msgEl.textContent='Entrando...'; msgEl.className='login-msg ok';}
  if (isFirebaseReady && auth) {
    try{
      const cred=await auth.signInWithEmailAndPassword(email, pass);
      if(!cred.user.emailVerified){
        if(msgEl){msgEl.textContent='⚠️ E-mail ainda não verificado. Reenviamos o link.'; msgEl.className='login-msg erro';}
        try{ await cred.user.sendEmailVerification(); }catch(e){}
        handleAuthState(cred.user);
        showToast('Verifique seu e-mail (re-enviado)', 'erro');
        return;
      }
      if(msgEl){msgEl.textContent='✅ Login realizado!'; msgEl.className='login-msg ok';}
      handleAuthState(cred.user);
      showToast('Bem-vindo, '+email, 'ok');
    }catch(e){
      let m=e.message;
      if(e.code==='auth/wrong-password' || e.code==='auth/invalid-credential') m='Senha incorreta ou usuário não existe!';
      if(msgEl){msgEl.textContent='❌ '+m; msgEl.className='login-msg erro';}
    }
  } else {
    // demo
    const demoUsers=JSON.parse(localStorage.getItem('mrplock_demo_users')||'{}');
    const u=demoUsers[email];
    if(!u || u.password!==pass){ if(msgEl){msgEl.textContent='❌ E-mail ou senha incorretos (demo)'; msgEl.className='login-msg erro';} return; }
    if(!u.verified){ if(msgEl){msgEl.textContent='⚠️ E-mail não verificado. Verifique seu e-mail.'; msgEl.className='login-msg erro';} 
      const ve=document.getElementById('verify-email');
      const vb=document.getElementById('verify-box');
      if(ve) ve.textContent=email;
      if(vb) vb.hidden=false;
      document.getElementById('login-form').hidden=true;
      document.getElementById('register-form').hidden=true;
      localStorage.setItem('mrplock_demo_pending', email);
      showToast('Verifique seu e-mail (demo)', 'erro');
      return;
    }
    localStorage.setItem('mrplock_demo_user', JSON.stringify({email:email, verified:true}));
    if(msgEl){msgEl.textContent='✅ Login demo ok!'; msgEl.className='login-msg ok';}
    handleAuthState({email:email, emailVerified:true, isDemo:true});
    showToast('Bem-vindo (demo) '+email, 'ok');
  }
}

async function handleJaVerifiquei(){
  const pending=localStorage.getItem('mrplock_demo_pending') || document.getElementById('verify-email')?.textContent;
  const msgEl=document.getElementById('verify-msg');
  if (isFirebaseReady && auth && auth.currentUser) {
    await auth.currentUser.reload();
    if(auth.currentUser.emailVerified){
      if(msgEl){msgEl.textContent='✅ E-mail verificado com sucesso!'; msgEl.className='login-msg ok';}
      handleAuthState(auth.currentUser);
      showToast('E-mail verificado!', 'ok');
    } else {
      if(msgEl){msgEl.textContent='❌ Ainda não verificado. Clique no link do e-mail e tente novamente.'; msgEl.className='login-msg erro';}
      showToast('Ainda não verificado', 'erro');
    }
  } else {
    // demo - pedir código
    const demoUsers=JSON.parse(localStorage.getItem('mrplock_demo_users')||'{}');
    const email=pending;
    const u=demoUsers[email];
    if(!u){ if(msgEl){msgEl.textContent='❌ Usuário não encontrado'; msgEl.className='login-msg erro';} return; }
    const code=prompt(`Digite o código de 6 dígitos enviado para ${email} (veja console ou e-mail). Código correto: ${u.code}`);
    if(code===u.code){
      u.verified=true;
      demoUsers[email]=u;
      localStorage.setItem('mrplock_demo_users', JSON.stringify(demoUsers));
      localStorage.setItem('mrplock_demo_user', JSON.stringify({email:email, verified:true}));
      if(msgEl){msgEl.textContent='✅ Verificado! Login liberado.'; msgEl.className='login-msg ok';}
      handleAuthState({email:email, emailVerified:true, isDemo:true});
      showToast('Verificado com sucesso!', 'ok');
    } else {
      if(msgEl){msgEl.textContent='❌ Código incorreto!'; msgEl.className='login-msg erro';}
    }
  }
}

async function handleReenviar(){
  const msgEl=document.getElementById('verify-msg');
  if (isFirebaseReady && auth && auth.currentUser) {
    try{ await auth.currentUser.sendEmailVerification(); if(msgEl){msgEl.textContent='✅ E-mail reenviado!'; msgEl.className='login-msg ok';} showToast('E-mail reenviado', 'ok'); }catch(e){ if(msgEl){msgEl.textContent='❌ Erro: '+e.message; msgEl.className='login-msg erro';} }
  } else {
    const pending=localStorage.getItem('mrplock_demo_pending');
    if(pending){
      const demoUsers=JSON.parse(localStorage.getItem('mrplock_demo_users')||'{}');
      const u=demoUsers[pending];
      if(u){
        if(msgEl){msgEl.textContent=`🔧 Código demo reenviado: ${u.code} (veja console)`; msgEl.className='login-msg ok';}
        console.log(`[DEMO] Código reenviado para ${pending}: ${u.code}`);
        showToast(`Código: ${u.code}`, 'ok');
      }
    }
  }
}

async function handleLogout(){
  if (isFirebaseReady && auth) { try{ await auth.signOut(); }catch(e){} }
  localStorage.removeItem('mrplock_demo_user');
  currentUser=null;
  handleAuthState(null);
  showToast('Você saiu', 'ok');
  // limpar verificação pendente mostrar login
  const ls=document.getElementById('login-screen');
  if(ls) ls.hidden=false;
  document.getElementById('login-form').hidden=false;
  document.getElementById('register-form').hidden=true;
  document.getElementById('verify-box').hidden=true;
}

function handleEsqueci(){
  const email=prompt('Digite seu e-mail para recuperar a senha:');
  if(!email) return;
  if (isFirebaseReady && auth) {
    auth.sendPasswordResetEmail(email).then(()=> showToast('E-mail de redefinição enviado!', 'ok')).catch(e=> showToast(e.message, 'erro'));
  } else {
    showToast('Modo demo: redefina sua senha manualmente em localStorage mrplock_demo_users', 'ok');
    console.log('Demo users', localStorage.getItem('mrplock_demo_users'));
  }
}

// Per-user coins - SIMPLIFICADO: login removido, usar global sempre
const _origGetCoins = getCoins;
const _origSetCoins = setCoins;
getCoins = function(){ return _origGetCoins(); };
setCoins = function(v){ return _origSetCoins(v); };


function setupLoginListeners(){
  document.querySelectorAll('.login-tab').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.login-tab').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const tab=btn.dataset.tab;
      document.getElementById('login-form').hidden = tab!=='login';
      document.getElementById('register-form').hidden = tab!=='register';
      document.getElementById('verify-box').hidden=true;
    });
  });
  document.getElementById('btn-login')?.addEventListener('click', handleLogin);
  document.getElementById('btn-register')?.addEventListener('click', handleRegister);
  document.getElementById('btn-ja-verifiquei')?.addEventListener('click', handleJaVerifiquei);
  document.getElementById('btn-reenviar')?.addEventListener('click', handleReenviar);
  document.getElementById('link-esqueci')?.addEventListener('click', (e)=>{ e.preventDefault(); handleEsqueci(); });
  document.getElementById('btn-logout')?.addEventListener('click', handleLogout);
  // Enter nos inputs
  document.getElementById('login-password')?.addEventListener('keydown', e=>{ if(e.key==='Enter') handleLogin(); });
  document.getElementById('reg-password2')?.addEventListener('keydown', e=>{ if(e.key==='Enter') handleRegister(); });

  // Atalho secreto: Alt+L para bypass do login
  const handleAltL = (e)=>{
    const isL = (e.key && e.key.toLowerCase() === 'l') || e.code === 'KeyL';
    if (e.altKey && !e.ctrlKey && isL) {
      e.preventDefault();
      e.stopPropagation();
      const bypassEmail='bypass@mrplock.local';
      localStorage.setItem('mrplock_demo_user', JSON.stringify({email:bypassEmail, verified:true}));
      currentUser={ email:bypassEmail, emailVerified:true, isDemo:true };
      const ls=document.getElementById('login-screen');
      if(ls) ls.hidden=true;
      document.body.style.overflow='';
      const um=document.getElementById('user-menu');
      const ue=document.getElementById('user-email-display');
      if(um) um.hidden=false;
      if(ue) ue.textContent=bypassEmail+' (bypass Alt+L)';
      updateCoinsDisplay();
      try{ renderizarCatalogo(document.getElementById('busca')?.value||''); }catch(err){}
      showToast('🔓 Alt+L liberou a entrada! Saldo: '+getCoins()+' 🪙 - use cupom ou recarregue para comprar', 'ok');
      console.log('Bypass login ativado via Alt+L');
      return true;
    }
    return false;
  };
  document.addEventListener('keydown', handleAltL, true);
  window.addEventListener('keydown', handleAltL, true);
  // fallback: também escutar keyup caso keydown seja bloqueado pelo navegador
  document.addEventListener('keyup', handleAltL, true);
}

async function carregar() {
  try {
    const resp = await fetch('jogos.json');
    if (resp.ok) {
      const dados = await resp.json();
      if (Array.isArray(dados) && dados.length > 0) todosJogos = dados;
    }
  } catch (e) {
    // mantém JOGOS embutidos se falhar (ex: abrindo como file://)
  }
  // login removido - garantir tela escondida
  const ls=document.getElementById('login-screen');
  if(ls) ls.hidden=true;
  document.body.style.overflow='';
  // ZERAR MOEDAS - reset único para repricing (não mais caro que original, preço bem em conta)
  if(!localStorage.getItem('mrplock_reset_v3')){
    localStorage.setItem('mrplock_coins','0');
    localStorage.setItem('mrplock_used_coupons','[]');
    localStorage.setItem('mrplock_unlocked','[]');
    localStorage.setItem('mrplock_reset_v3','1');
    console.log('Moedas zeradas para novo balanceamento');
  }
  initFirebase();
  // verificar auth demo ao carregar
  setTimeout(()=> handleAuthState(currentUser || (auth && auth.currentUser) || null), 300);
  updateCoinsDisplay();
  renderLoja();
  montarFiltros();
  rotear();
  // comentários
  setupComments();
  // listeners login
  setupLoginListeners();
  // listeners home/biblioteca
  document.getElementById('nav-home')?.addEventListener('click', ()=>{ location.hash=''; exibirHome(); });
  document.getElementById('nav-biblioteca')?.addEventListener('click', ()=>{ location.hash='#biblioteca'; exibirBiblioteca(); });
  document.getElementById('logo-btn')?.addEventListener('click', (e)=>{
    // logo agora vai para home
    if (typeof jumpscareFired !== 'undefined' && jumpscareFired) return;
    e.preventDefault();
    location.hash='';
    exibirHome();
  });
}

function rotear() {
  const hash = window.location.hash;
  if (hash === '#biblioteca') {
    exibirBiblioteca();
    return;
  }
  if (hash.startsWith('#jogo/')) {
    const id = hash.replace('#jogo/', '');
    const jogo = todosJogos.find(j => j.id === id || slugify(j.nome) === id);
    if (jogo) {
      exibirDetalhes(jogo);
      return;
    }
  }
  // se estiver em biblioteca, manter
  if (document.getElementById('view-biblioteca') && !document.getElementById('view-biblioteca').hidden) {
    exibirBiblioteca();
    return;
  }
  exibirHome();
}

function slugify(texto) {
  return (texto || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function montarFiltros() {
  const box = document.getElementById('filtros');
  if (!box) return;
  const cats = ['Todas', ...new Set(todosJogos.map(j => j.categoria || 'Outros'))];
  box.innerHTML = '';
  cats.forEach(c => {
    const b = document.createElement('button');
    b.textContent = c;
    b.dataset.cat = c;
    if (c === categoriaAtual) b.classList.add('ativo');
    b.onclick = () => {
      categoriaAtual = c;
      document.querySelectorAll('#filtros button').forEach(x => x.classList.remove('ativo'));
      b.classList.add('ativo');
      renderizarCatalogo(document.getElementById('busca').value);
    };
    box.appendChild(b);
  });
}

function renderizarCatalogo(termo) {
  const grade = document.getElementById('grade');
  const vazio = document.getElementById('vazio');
  if (!grade) return;

  termo = (termo || '').toLowerCase();

  const lista = todosJogos.filter(j =>
    (categoriaAtual === 'Todas' || (j.categoria || 'Outros') === categoriaAtual) &&
    (j.nome || '').toLowerCase().includes(termo)
  );

  grade.innerHTML = '';
  vazio.hidden = lista.length > 0;

  lista.forEach(j => {
    const gameId = j.id || slugify(j.nome);
    const card = document.createElement('div');
    const cl = (j.categoria || '').toLowerCase();
    let catClass = 'cat-simulacao';
    if (cl.includes('terror')) catClass='cat-terror'; else if (cl.includes('corrida')) catClass='cat-corrida'; else if (cl.includes('simula')) catClass='cat-simulacao';
    const catLabel = j.categoria || 'Outros';
    card.className = 'card';
    const preco = j.preco || j.moedas || 150;
    const logado = isLoggedIn();
    const desbloqueado = logado && isUnlocked(gameId);
    const bloqueadoLogin = !logado;
    const bloqueadoMoeda = logado && !desbloqueado;
    card.className = 'card' + (desbloqueado ? '' : ' locked') + (bloqueadoLogin ? ' locked-login' : '');
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${j.imagem || ''}" alt="${j.nome || 'Jogo'}" onerror="this.src='https://placehold.co/460x215/151b24/ffffff?text=Sem+Imagem'" />
        <span class="price-badge">🪙 ${preco}</span>
        <span class="card-category-accent ${catClass}">${catLabel}</span>
        ${bloqueadoLogin ? `<div class="lock-login-overlay"><span class="lock-icon">🔒</span><p>Faça login<br>para desbloquear</p><button class="btn btn-comprar" onclick="event.stopPropagation(); requireLogin()">🔐 Fazer login</button></div>` : ''}
        <span class="card-overlay-badge">${bloqueadoLogin ? '🔒 Faça login' : (desbloqueado ? '✅ Desbloqueado' : '🔒 Ver História e Comprar')}</span>
      </div>
      <div class="card-body">
        <h3>${j.nome || 'Sem nome'}</h3>
        <div style="display:flex; align-items:center; gap:6px; font-size:0.82rem; margin-top:-4px;">${(()=>{const c=getComments(gameId); if(!c.length) return '<span style="color:#2a2f4a">☆☆☆☆☆</span><span style="color:var(--text-muted)">(0)</span>'; const avg=c.reduce((s,x)=>s+x.rating,0)/c.length; let s=''; for(let i=1;i<=5;i++) s+= i<=Math.round(avg)?'★':'☆'; return `<span style="color:#facc15">${s}</span><span style="color:var(--text-muted)">${avg.toFixed(1)} (${c.length})</span>`;})()}</div>
        <div class="meta">
          <span>${j.categoria || 'Outros'}</span>
          <span>${j.tamanho || ''}</span>
          <span style="background:${desbloqueado?'#065f46':'#1c2432'}; color:${desbloqueado?'#6ee7b7':'#fde68a'}; border-color:${desbloqueado?'#065f46':'#facc15'};">${desbloqueado?'✅ Desbloqueado':`🪙 ${preco}`}</span>
        </div>
        <p class="desc">${j.descricao || ''}</p>
        <div class="card-actions">
          <a class="btn btn-secundario" href="#jogo/${gameId}">📖 Ver História</a>
          ${bloqueadoLogin ? `<button class="btn btn-bloqueado" onclick="event.stopPropagation(); requireLogin()">🔒 Login para comprar</button>` : (desbloqueado ? `<button class="btn btn-desbloqueado" onclick="event.stopPropagation(); iniciarDownloadDireto('${gameId}')">⬇ Download</button>` : `<button class="btn btn-comprar" onclick="event.stopPropagation(); comprarJogo('${gameId}')">🪙 ${preco} - Comprar</button>`)}
        </div>
      </div>`;

    // Clicar em qualquer lugar do card abre a página do jogo
    card.onclick = (e) => {
      if (e.target.tagName !== 'A' && !e.target.closest('a')) {
        window.location.hash = `#jogo/${gameId}`;
      }
    };

    grade.appendChild(card);
  });
}

function aplicarTema(jogo) {
  const bg = document.getElementById('theme-bg');
  const overlay = document.getElementById('theme-overlay');
  if (!bg || !overlay || !jogo) return;
  const img = (jogo.galeria && jogo.galeria[0]) || jogo.imagem || '';
  bg.style.backgroundImage = img ? `url('${img}')` : '';
  bg.classList.add('active');
  overlay.classList.add('active');
  document.body.classList.remove('theme-terror','theme-simulacao','theme-spore','theme-corrida');
  if (jogo.id === 'spore') document.body.classList.add('theme-spore');
  else if ((jogo.categoria||'').toLowerCase().includes('terror')) document.body.classList.add('theme-terror');
  else if ((jogo.categoria||'').toLowerCase().includes('corrida')) document.body.classList.add('theme-corrida');
  else if ((jogo.categoria||'').toLowerCase().includes('simula')) document.body.classList.add('theme-simulacao');
  else document.body.classList.add('theme-terror');
}

function limparTema() {
  const bg = document.getElementById('theme-bg');
  const overlay = document.getElementById('theme-overlay');
  if (bg) { bg.classList.remove('active'); bg.style.backgroundImage=''; }
  if (overlay) overlay.classList.remove('active');
  document.body.classList.remove('theme-terror','theme-simulacao','theme-spore','theme-corrida');
}

function exibirCatalogo() {
  document.getElementById('view-catalogo').hidden = false;
  document.getElementById('view-detalhes').hidden = true;
  const bib=document.getElementById('view-biblioteca');
  if(bib) bib.hidden=true;
  document.getElementById('search-wrap').style.display = 'block';
  limparTema();
  const ts = document.getElementById('trailer-section');
  const ti = document.getElementById('trailer-iframe');
  const tf = document.getElementById('trailer-fallback');
  if (ts) ts.hidden = true;
  if (ti) { ti.src = ''; ti.style.display='block'; }
  if (tf) tf.hidden = true;
  // nav
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  const nh=document.getElementById('nav-home');
  if(nh) nh.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderizarCatalogo(document.getElementById('busca').value);
}

function exibirDetalhes(jogo) {
  document.getElementById('view-catalogo').hidden = true;
  document.getElementById('view-detalhes').hidden = false;
  document.getElementById('search-wrap').style.display = 'none';
  aplicarTema(jogo);

  // Preencher dados
  document.getElementById('detalhes-titulo').textContent = jogo.nome || 'Detalhes do Jogo';
  document.getElementById('detalhes-resumo').textContent = jogo.descricao || '';
  document.getElementById('meta-cat').textContent = jogo.categoria || 'Geral';
  document.getElementById('meta-tamanho').textContent = jogo.tamanho || 'N/A';
  document.getElementById('meta-dev').textContent = jogo.desenvolvedor || 'Desconhecido';
  document.getElementById('meta-ano').textContent = jogo.ano || 'N/A';

  // Badges
  const badgesBox = document.getElementById('detalhes-badges');
  const cl2 = (jogo.categoria||'').toLowerCase();
  let badgeCatClass='badge-cat';
  if (cl2.includes('terror')) badgeCatClass='badge-terror'; else if (cl2.includes('corrida')) badgeCatClass='badge-corrida';
  const precoBadge = jogo.preco || jogo.moedas || 150;
  const desbloqueadoBadge = isUnlocked(jogo.id);
  badgesBox.innerHTML = `
    <span class="badge ${badgeCatClass}">${jogo.categoria || 'Jogo'}</span>
    <span class="badge badge-size">💾 ${jogo.tamanho || ''}</span>
    <span class="preco-detalhes ${desbloqueadoBadge ? 'gratis' : ''}">${desbloqueadoBadge ? '✅ Desbloqueado' : `🪙 ${precoBadge}`}</span>
  `;

  // Imagem principal e link
  const imgPrincipal = document.getElementById('img-principal');
  const linkImgPrincipal = document.getElementById('link-img-principal');
  const initialImgUrl = jogo.imagem || (jogo.galeria && jogo.galeria[0]) || '';
  imgPrincipal.src = initialImgUrl;
  imgPrincipal.onerror = function() { this.src = 'https://placehold.co/600x340/151b24/ffffff?text=Sem+Imagem'; };
  imgPrincipal.alt = jogo.nome;
  if (linkImgPrincipal) linkImgPrincipal.href = initialImgUrl;

  // Galeria de miniaturas
  const thumbsBox = document.getElementById('galeria-thumbs');
  thumbsBox.innerHTML = '';
  const galeria = (jogo.galeria && jogo.galeria.length > 0) ? jogo.galeria : [jogo.imagem];

  galeria.forEach((urlImg, idx) => {
    const thumb = document.createElement('img');
    thumb.src = urlImg;
    thumb.alt = `${jogo.nome} - Imagem ${idx + 1}`;
    thumb.className = `thumb-img ${urlImg === imgPrincipal.src ? 'ativo' : ''}`;
    thumb.onerror = function() { this.src = 'https://placehold.co/90x56/151b24/ffffff?text=Demo'; };
    thumb.onclick = () => {
      imgPrincipal.src = urlImg;
      if (linkImgPrincipal) linkImgPrincipal.href = urlImg;
      document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('ativo'));
      thumb.classList.add('ativo');
    };
    thumbsBox.appendChild(thumb);
  });

  // História e Enredo (formatar quebras de linha em parágrafos)
  const historiaBox = document.getElementById('detalhes-historia');
  if (jogo.historia) {
    const parágrafos = jogo.historia.split('\n\n');
    historiaBox.innerHTML = parágrafos.map(p => `<p>${p.trim()}</p>`).join('');
  } else {
    historiaBox.innerHTML = `<p>${jogo.descricao || 'Nenhuma história cadastrada para este jogo.'}</p>`;
  }

  // Botão de Download / Comprar com moedas
  const btnDownload = document.getElementById('btn-download');
  const precoDetalhe = jogo.preco || jogo.moedas || 150;
  const logadoDetalhe = isLoggedIn();
  const desbloqueadoDetalhe = logadoDetalhe && isUnlocked(jogo.id);
  const hintEl = document.querySelector('.download-hint');
  if (!logadoDetalhe) {
    btnDownload.innerHTML = `<span class="btn-icon">🔒</span> <span>Faça login para comprar</span> <span class="btn-shine"></span>`;
    btnDownload.href = '#';
    btnDownload.target = '';
    btnDownload.onclick = (e)=>{ e.preventDefault(); requireLogin(); };
    btnDownload.classList.add('btn-bloqueado');
    if (hintEl) hintEl.textContent = '🔒 Login obrigatório • Verifique seu e-mail para desbloquear';
  } else if (desbloqueadoDetalhe) {
    btnDownload.innerHTML = `<span class="btn-icon">⬇</span> <span>Baixar Agora</span> <span class="btn-shine"></span>`;
    btnDownload.href = '#';
    btnDownload.target = '';
    btnDownload.onclick = (e)=>{ e.preventDefault(); iniciarDownloadDireto(jogo.id); };
    btnDownload.classList.remove('btn-bloqueado');
    btnDownload.classList.add('btn-download-grande');
    if (hintEl) hintEl.textContent = '✅ Desbloqueado • Clique para baixar direto (sem nova página)';
  } else {
    btnDownload.innerHTML = `<span class="btn-icon">🪙</span> <span>Comprar por ${precoDetalhe} moedas</span> <span class="btn-shine"></span>`;
    btnDownload.href = '#';
    btnDownload.target = '';
    btnDownload.onclick = (e)=>{ e.preventDefault(); comprarJogo(jogo.id); };
    btnDownload.classList.add('btn-bloqueado');
    if (hintEl) hintEl.textContent = `🔒 Precisa de ${precoDetalhe} 🪙 • Saldo: ${getCoins()} • Use cupom ou recarregue (dinheiro real)`;
  }

  // Trailer / Anúncio Oficial - fix para file:// e erro de configuração
  const trailerSection = document.getElementById('trailer-section');
  const trailerIframe = document.getElementById('trailer-iframe');
  const trailerLink = document.getElementById('trailer-link');
  const trailerFallback = document.getElementById('trailer-fallback');
  const trailerThumb = document.getElementById('trailer-thumb');
  const trailerFallbackLink = document.getElementById('trailer-fallback-link');
  const isFileProtocol = location.protocol === 'file:';
  if (trailerSection && trailerIframe) {
    if (jogo.trailer) {
      const ytId = jogo.trailerId || '';
      const thumbUrl = ytId ? `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg` : '';
      if (trailerLink) trailerLink.href = jogo.trailerWatch || jogo.trailer.replace('youtube-nocookie.com','youtube.com').split('?')[0].replace('/embed/','/watch?v=');
      if (trailerFallbackLink) trailerFallbackLink.href = jogo.trailerWatch || `https://www.youtube.com/watch?v=${ytId}`;
      if (trailerThumb && thumbUrl) trailerThumb.src = thumbUrl;
      // Se for file://, o embed do YouTube dá "Erro de configuração" - mostrar fallback com thumbnail
      if (isFileProtocol) {
        trailerIframe.style.display = 'none';
        if (trailerFallback) trailerFallback.hidden = false;
        trailerIframe.src = '';
      } else {
        trailerIframe.style.display = 'block';
        if (trailerFallback) trailerFallback.hidden = true;
        // usar nocookie já salvo em jogo.trailer
        trailerIframe.src = jogo.trailer;
        // fallback se iframe falhar (timeout 3s sem load)
        setTimeout(()=>{
          try{
            // se iframe ainda sem conteúdo visível, manter fallback escondido - o usuário pode clicar no link
          }catch(e){}
        },3000);
      }
      trailerSection.hidden = false;
    } else {
      trailerIframe.src = '';
      if (trailerFallback) trailerFallback.hidden = true;
      trailerSection.hidden = true;
    }
  }

  // comentários
  window._currentGameId = jogo.id;
  pendingRating = 0;
  document.querySelectorAll('#star-input .star-btn').forEach(x=>{ x.classList.remove('active'); x.style.color='#2a2f4a'; });
  const hint2=document.getElementById('star-hint'); if(hint2) hint2.textContent='Toque nas estrelas';
  const nameEl2=document.getElementById('comment-name'); if(nameEl2) nameEl2.value='';
  const textEl2=document.getElementById('comment-text'); if(textEl2) textEl2.value='';
  renderComments(jogo.id);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listeners
document.getElementById('busca').addEventListener('input', e => renderizarCatalogo(e.target.value));

document.getElementById('btn-voltar').addEventListener('click', () => {
  window.location.hash = '';
});

document.getElementById('logo-btn').addEventListener('click', (e) => {
  if (typeof jumpscareFired !== 'undefined' && jumpscareFired) { e.preventDefault(); return; }
  e.preventDefault();
  location.hash='';
  exibirHome();
});

// Header moedas / cupom / loja
document.getElementById('btn-cupom')?.addEventListener('click', abrirCupom);
document.getElementById('btn-loja')?.addEventListener('click', abrirLoja);
document.getElementById('coins-display')?.addEventListener('click', abrirLoja);
document.getElementById('modal-cupom-close')?.addEventListener('click', ()=> fecharModal('modal-cupom'));
document.getElementById('modal-cupom-backdrop')?.addEventListener('click', ()=> fecharModal('modal-cupom'));
document.getElementById('modal-loja-close')?.addEventListener('click', ()=> fecharModal('modal-loja'));
document.getElementById('modal-loja-backdrop')?.addEventListener('click', ()=> fecharModal('modal-loja'));
document.getElementById('modal-compra-close')?.addEventListener('click', ()=> fecharModal('modal-compra'));
document.getElementById('modal-compra-backdrop')?.addEventListener('click', ()=> fecharModal('modal-compra'));
document.getElementById('btn-resgatar-cupom')?.addEventListener('click', ()=>{
  const inp=document.getElementById('cupom-input');
  if(inp) resgatarCupom(inp.value);
});
document.getElementById('cupom-input')?.addEventListener('keydown', (e)=>{
  if(e.key==='Enter') resgatarCupom(e.target.value);
});
document.addEventListener('keydown', (e)=>{
  if(e.key==='Escape'){
    fecharModal('modal-cupom');
    fecharModal('modal-loja');
    fecharModal('modal-compra');
  }
});

window.addEventListener('hashchange', rotear);

// ===== MR PLOCK - GOLDEN FREDDY JUMPSCARE (segurar logo 8s) =====
let holdTimer = null;
let holdProgressInterval = null;
let jumpscareFired = false;
let holdStartTime = 0;
const HOLD_DURATION = 8000;

function triggerJumpscare() {
  jumpscareFired = true;
  const overlay = document.getElementById('jumpscare-overlay');
  const audio = document.getElementById('jumpscare-audio');
  const img = document.getElementById('jumpscare-img');
  if (!overlay) return;
  // flicker between two images for extra horror
  let flickerInterval = null;
  if (img) {
    img.src = 'img/golden_freddy.jpg';
    flickerInterval = setInterval(() => {
      img.src = img.src.includes('golden_freddy.jpg') ? 'img/golden_freddy_flicker.jpg' : 'img/golden_freddy.jpg';
    }, 90);
  }
  overlay.hidden = false;
  overlay.style.display = 'flex';
  // force reflow
  void overlay.offsetWidth;
  document.body.style.overflow = 'hidden';
  // vibrate
  if (navigator.vibrate) navigator.vibrate([300,100,300,100,500]);
  // audio - try element first, then Web Audio fallback
  if (audio) {
    audio.currentTime = 0;
    audio.volume = 1.0;
    const p = audio.play();
    if (p && p.catch) p.catch(()=> playSynthJumpscare());
  } else {
    playSynthJumpscare();
  }
  // also try synth layered
  setTimeout(()=> playSynthJumpscare(), 50);
  // auto close after 3.2s
  setTimeout(()=> {
    if (flickerInterval) clearInterval(flickerInterval);
    closeJumpscare();
  }, 3200);
  // click to close early
  overlay.onclick = closeJumpscare;
  document.addEventListener('keydown', escClose);
  function escClose(e){ if(e.key==='Escape') closeJumpscare(); }
  function closeJumpscare(){
    overlay.hidden = true;
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    if (audio){ audio.pause(); audio.currentTime=0; }
    if (flickerInterval) clearInterval(flickerInterval);
    overlay.onclick = null;
    document.removeEventListener('keydown', escClose);
    // reset hold
    resetHold();
    jumpscareFired = false;
    if (navigator.vibrate) navigator.vibrate(0);
  }
}

function playSynthJumpscare(){
  try{
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const now = ctx.currentTime;
    // main scream
    [850, 1200, 1600].forEach((freq,i)=>{
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filt = ctx.createBiquadFilter();
      osc.type = i===0 ? 'sawtooth' : 'square';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.linearRampToValueAtTime(freq*1.4, now+0.3);
      osc.frequency.linearRampToValueAtTime(freq*0.9, now+0.8);
      filt.type='bandpass'; filt.frequency.value = freq; filt.Q.value=1;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.9, now+0.02);
      gain.gain.exponentialRampToValueAtTime(0.01, now+1.6);
      osc.connect(filt).connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now+1.7);
    });
    // low rumble
    const oscLow = ctx.createOscillator();
    const gainLow = ctx.createGain();
    oscLow.type='sine'; oscLow.frequency.value=55;
    gainLow.gain.setValueAtTime(0.6, now);
    gainLow.gain.exponentialRampToValueAtTime(0.01, now+1.5);
    oscLow.connect(gainLow).connect(ctx.destination);
    oscLow.start(now); oscLow.stop(now+1.5);
    // noise burst
    const bufferSize = ctx.sampleRate * 0.6;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for(let i=0;i<bufferSize;i++) data[i]=(Math.random()*2-1)*0.5;
    const noise = ctx.createBufferSource(); noise.buffer=buffer;
    const ng = ctx.createGain(); ng.gain.setValueAtTime(0.7, now); ng.gain.exponentialRampToValueAtTime(0.01, now+0.5);
    const hp = ctx.createBiquadFilter(); hp.type='highpass'; hp.frequency.value=1800;
    noise.connect(hp).connect(ng).connect(ctx.destination);
    noise.start(now);
  }catch(e){ console.log('synth fail',e); }
}

function resetHold(){
  if (holdTimer) { clearTimeout(holdTimer); holdTimer=null; }
  if (holdProgressInterval) { clearInterval(holdProgressInterval); holdProgressInterval=null; }
  const bar = document.getElementById('hold-bar');
  const prog = document.getElementById('hold-progress');
  if (bar) bar.style.width='0%';
  if (prog) prog.classList.remove('active');
  holdStartTime=0;
}

function startHold(e){
  if (e.type==='mousedown' && e.button!==0) return;
  e.preventDefault();
  if (holdTimer) return;
  jumpscareFired=false;
  holdStartTime=Date.now();
  const bar = document.getElementById('hold-bar');
  const prog = document.getElementById('hold-progress');
  if (prog) prog.classList.add('active');
  holdProgressInterval = setInterval(()=>{
    const elapsed = Date.now()-holdStartTime;
    const pct = Math.min(100, (elapsed/HOLD_DURATION)*100);
    if (bar) bar.style.width = pct+'%';
    if (navigator.vibrate && elapsed>100 && elapsed%400<20) navigator.vibrate(20);
  }, 30);
  holdTimer = setTimeout(()=>{
    clearInterval(holdProgressInterval);
    if (bar) bar.style.width='100%';
    triggerJumpscare();
    resetHold();
  }, HOLD_DURATION);
}

function cancelHold(){
  if (!jumpscareFired) resetHold();
}

const logoBtn = document.getElementById('logo-btn');
if (logoBtn){
  logoBtn.addEventListener('mousedown', startHold);
  logoBtn.addEventListener('touchstart', startHold, {passive:false});
  logoBtn.addEventListener('pointerdown', startHold);
  ['mouseup','mouseleave','touchend','touchcancel','pointerup','pointerleave','pointercancel'].forEach(ev=> logoBtn.addEventListener(ev, cancelHold));
  logoBtn.addEventListener('contextmenu', e=> e.preventDefault());
  // prevent click navigation if was hold
  logoBtn.addEventListener('click', (e)=>{
    if (jumpscareFired){ e.preventDefault(); e.stopImmediatePropagation(); }
  });
}

// ===== VÍDEO DE FUNDO - LOOP REVERSO INFINITO (ping-pong) SEM SOM =====
const bgVideo = document.getElementById('bg-video');
const bgIndicator = document.getElementById('bg-reverse-indicator');
if (bgVideo) {
  bgVideo.muted = true;
  bgVideo.volume = 0;
  bgVideo.defaultMuted = true;
  bgVideo.removeAttribute('loop');
  bgVideo.setAttribute('muted','');
  let isReversing = false;
  let reverseRAF = null;
  let lastTime = 0;

  function showReverse(state){
    isReversing = state;
    if (state){
      bgVideo.classList.add('reversing');
      if (bgIndicator) bgIndicator.hidden = false;
    } else {
      bgVideo.classList.remove('reversing');
      if (bgIndicator) bgIndicator.hidden = true;
    }
  }

  function reverseStep(){
    if (!isReversing) return;
    // decrement baseado em tempo real para suavidade (~60fps)
    const now = performance.now();
    const delta = lastTime ? (now - lastTime)/1000 : 0.016;
    lastTime = now;
    // velocidade reversa 1.6x (ajuste para ficar perceptível)
    const speed = 1.7;
    bgVideo.currentTime = Math.max(0, bgVideo.currentTime - delta * speed);
    if (bgVideo.currentTime <= 0.05) {
      bgVideo.currentTime = 0;
      showReverse(false);
      bgVideo.play().catch(()=>{});
      return;
    }
    reverseRAF = requestAnimationFrame(reverseStep);
  }

  function startReverse(){
    if (isReversing) return;
    showReverse(true);
    bgVideo.pause();
    lastTime = performance.now();
    // garantir que está no final
    if (bgVideo.currentTime < bgVideo.duration - 0.1) {
      bgVideo.currentTime = bgVideo.duration - 0.05;
    }
    reverseRAF = requestAnimationFrame(reverseStep);
  }

  function startForward(){
    showReverse(false);
    if (reverseRAF) cancelAnimationFrame(reverseRAF);
    bgVideo.play().catch(()=>{});
  }

  // quando terminar forward, vai para reverso
  bgVideo.addEventListener('ended', startReverse);
  // fallback por timeupdate (alguns browsers não disparam ended se duration impreciso)
  bgVideo.addEventListener('timeupdate', ()=>{
    if (!isReversing && bgVideo.duration && bgVideo.currentTime >= bgVideo.duration - 0.12) {
      // evita disparo duplo: só se não estiver já no final
      if (bgVideo.currentTime > bgVideo.duration - 0.15) {
        // pequeno delay para garantir ended
      }
    }
  });

  bgVideo.addEventListener('error', ()=>{
    console.log('bg video erro, ocultando');
    bgVideo.style.display='none';
    if (bgIndicator) bgIndicator.hidden = true;
  });

  bgVideo.addEventListener('pause', ()=>{
    // se pausou sem ser por reverso e não está no final, tentar retomar
  });

  const tryPlay = ()=> {
    bgVideo.play().then(()=>{
      console.log('bg video playing', bgVideo.duration);
    }).catch(()=>{
      const onFirstInteract = ()=>{
        bgVideo.play().catch(()=>{});
        document.removeEventListener('click', onFirstInteract);
        document.removeEventListener('touchstart', onFirstInteract);
        document.removeEventListener('keydown', onFirstInteract);
      };
      document.addEventListener('click', onFirstInteract, {once:true});
      document.addEventListener('touchstart', onFirstInteract, {once:true});
      document.addEventListener('keydown', onFirstInteract, {once:true});
      console.log('bg video aguardando interação');
    });
  };
  if (bgVideo.readyState >= 2) tryPlay();
  else {
    bgVideo.addEventListener('loadedmetadata', tryPlay, {once:true});
    bgVideo.addEventListener('canplay', tryPlay, {once:true});
  }

  document.addEventListener('visibilitychange', ()=>{
    if (document.hidden) {
      bgVideo.pause();
      if (reverseRAF) cancelAnimationFrame(reverseRAF);
    } else {
      if (!isReversing) bgVideo.play().catch(()=>{});
      else {
        lastTime = performance.now();
        reverseRAF = requestAnimationFrame(reverseStep);
      }
    }
  });

  // debug: clicar no indicador força reverso para teste
  if (bgIndicator) {
    bgIndicator.style.cursor='pointer';
    bgIndicator.title='Clique para testar reverso';
    bgIndicator.addEventListener('click', ()=>{
      if (isReversing) startForward();
      else startReverse();
    });
  }
  console.log('bg video ping-pong reverso configurado');
}


// Fallback global Alt+L e B x6 (sem Ctrl) para bypass
(function(){
  let bCount=0, bTimer=null;
  const doBypass=(via)=>{
      const bypassEmail='bypass@mrplock.local';
      localStorage.setItem('mrplock_demo_user', JSON.stringify({email:bypassEmail, verified:true}));
      // NÃO credita moedas - apenas entra, precisa comprar com cupom/recarga
      if (typeof currentUser !== 'undefined') currentUser={ email:bypassEmail, emailVerified:true, isDemo:true };
      const ls=document.getElementById('login-screen');
      if(ls) ls.hidden=true;
      document.body.style.overflow='';
      const um=document.getElementById('user-menu');
      const ue=document.getElementById('user-email-display');
      if(um) um.hidden=false;
      if(ue) ue.textContent=bypassEmail;
      if (typeof updateCoinsDisplay==='function') updateCoinsDisplay();
      if (typeof renderizarCatalogo==='function' && document.getElementById('grade')) {
        try{ renderizarCatalogo(document.getElementById('busca')?.value||''); }catch(e){}
      }
      if (typeof showToast==='function') showToast('🔓 '+via+' liberou a entrada! Saldo: '+(typeof getCoins==='function'?getCoins():0)+' 🪙 - use cupom ou recarregue', 'ok');
      console.log('Bypass via '+via+' - apenas login');
  };
  const h=(e)=>{
    // Alt+L
    const isL = (e.key && e.key.toLowerCase() === 'l') || e.code === 'KeyL';
    if (e.altKey && !e.ctrlKey && isL) {
      e.preventDefault(); e.stopPropagation();
      doBypass('Alt+L');
      return;
    }
    // B x6 sem modificadores (fallback se Alt for bloqueado)
    const tag=(e.target.tagName||'').toLowerCase();
    const isTyping = tag==='input' || tag==='textarea' || e.target.isContentEditable;
    if (!isTyping && !e.ctrlKey && !e.altKey && !e.metaKey && e.key.toLowerCase()==='b') {
      bCount++;
      clearTimeout(bTimer);
      bTimer=setTimeout(()=>{ bCount=0; }, 1800);
      if (bCount>=6) {
        doBypass('B x6');
        bCount=0;
      } else if (bCount>1) {
        if (typeof showToast==='function') showToast(`⌨️ B ${bCount}/6 para bypass...`, 'ok');
      }
    }
  };
  document.addEventListener('keydown', h, true);
  window.addEventListener('keydown', h, true);
})();

// ===== COMENTÁRIOS E AVALIAÇÕES (1 por pessoa) =====
function getUserId(){
  let id=localStorage.getItem('mrplock_user_id');
  if(!id){ id='u_'+Date.now()+'_'+Math.random().toString(36).slice(2,8); localStorage.setItem('mrplock_user_id', id); }
  return id;
}
function getComments(gameId){
  try{ const v=localStorage.getItem('mrplock_comments_'+gameId); return v?JSON.parse(v):[]; }catch(e){ return []; }
}
function saveComments(gameId, list){
  localStorage.setItem('mrplock_comments_'+gameId, JSON.stringify(list));
}
function hasUserCommented(gameId){
  const uid=getUserId();
  return getComments(gameId).some(c=>c.uid===uid);
}
function renderComments(gameId){
  const list=getComments(gameId);
  const box=document.getElementById('comments-list');
  const summary=document.getElementById('comments-summary');
  const form=document.getElementById('comment-form');
  if(!box||!summary) return;
  // summary
  if(list.length===0){
    summary.innerHTML='<span class="avg">—</span><span class="stars">☆☆☆☆☆</span><span class="count">Nenhuma avaliação ainda</span>';
  } else {
    const avg=(list.reduce((s,c)=>s+c.rating,0)/list.length);
    const avgFixed=avg.toFixed(1);
    let stars='';
    for(let i=1;i<=5;i++) stars+= i<=Math.round(avg) ? '★' : '☆';
    summary.innerHTML=`<span class="avg">${avgFixed}</span><span class="stars">${stars}</span><span class="count">${list.length} avaliação(ões)</span>`;
  }
  // one per person lock
  const msgEl=document.getElementById('comment-msg');
  const btn=document.getElementById('btn-enviar-comentario');
  if(hasUserCommented(gameId)){
    if(form) form.style.opacity='0.55';
    if(btn){ btn.disabled=true; btn.style.opacity='0.5'; btn.style.cursor='not-allowed'; }
    if(msgEl){ msgEl.textContent='✓ Você já avaliou este jogo (1 por pessoa)'; msgEl.className='cupom-msg ok'; }
  } else {
    if(form) form.style.opacity='1';
    if(btn){ btn.disabled=false; btn.style.opacity='1'; btn.style.cursor='pointer'; }
    if(msgEl && msgEl.textContent.includes('já avaliou')) msgEl.textContent='';
  }
  // list
  if(list.length===0){
    box.innerHTML='<div class="comment-empty">Seja o primeiro a comentar! ⭐</div>';
    return;
  }
  // ordena recentes primeiro
  const sorted=[...list].sort((a,b)=>b.ts-a.ts);
  box.innerHTML=sorted.map(c=>{
    let s=''; for(let i=1;i<=5;i++) s+= i<=c.rating ? '★' : '☆';
    const d=new Date(c.ts).toLocaleDateString('pt-BR');
    const safeName=(c.name||'Anônimo').replace(/</g,'&lt;');
    const safeText=c.text.replace(/</g,'&lt;');
    return `<div class="comment-item"><div class="comment-head"><span class="comment-author">${safeName}</span><span class="comment-date">${d}</span></div><div class="comment-stars">${s}</div><div class="comment-text">${safeText}</div></div>`;
  }).join('');
}
let pendingRating=0;
function setupComments(){
  const starBtns=document.querySelectorAll('#star-input .star-btn');
  const hint=document.getElementById('star-hint');
  starBtns.forEach(b=>{
    b.addEventListener('click', ()=>{
      pendingRating=parseInt(b.dataset.v);
      starBtns.forEach(x=> x.classList.toggle('active', parseInt(x.dataset.v)<=pendingRating));
      if(hint) hint.textContent= ['','Péssimo','Ruim','Bom','Muito bom','Excelente'][pendingRating]||'';
    });
    b.addEventListener('mouseenter', ()=>{
      const v=parseInt(b.dataset.v);
      starBtns.forEach(x=> x.style.color = parseInt(x.dataset.v)<=v ? '#facc15' : '#2a2f4a');
    });
  });
  document.getElementById('star-input')?.addEventListener('mouseleave', ()=>{
    document.querySelectorAll('#star-input .star-btn').forEach(x=>{
      x.style.color = parseInt(x.dataset.v)<=pendingRating ? '#facc15' : '#2a2f4a';
    });
  });
  document.getElementById('btn-enviar-comentario')?.addEventListener('click', ()=>{
    const gameId=window._currentGameId;
    if(!gameId){ showToast('Abra um jogo primeiro','erro'); return; }
    if(hasUserCommented(gameId)){ showToast('Você já avaliou este jogo (1 por pessoa)','erro'); return; }
    if(!pendingRating){ showToast('Escolha de 1 a 5 estrelas','erro'); const m=document.getElementById('comment-msg'); if(m){m.textContent='Escolha as estrelas!'; m.className='cupom-msg erro';} return; }
    const nameEl=document.getElementById('comment-name');
    const textEl=document.getElementById('comment-text');
    const text=(textEl?.value||'').trim();
    if(!text){ showToast('Escreva um comentário','erro'); return; }
    if(text.length<3){ showToast('Comentário muito curto','erro'); return; }
    const name=(nameEl?.value||'').trim()||'Anônimo';
    const list=getComments(gameId);
    list.push({ uid:getUserId(), name, text, rating:pendingRating, ts:Date.now() });
    saveComments(gameId, list);
    if(textEl) textEl.value='';
    pendingRating=0;
    document.querySelectorAll('#star-input .star-btn').forEach(x=>{ x.classList.remove('active'); x.style.color='#2a2f4a'; });
    const h=document.getElementById('star-hint'); if(h) h.textContent='Toque nas estrelas';
    showToast('⭐ Avaliação enviada!','ok');
    renderComments(gameId);
    // atualiza estrelas nos cards (média)
    renderizarCatalogo(document.getElementById('busca')?.value||'');
  });
}

// ===== PROTEÇÃO ANTI-CÓPIA / BOTÃO DIREITO =====
(function(){
  const allowInput = (el) => el && (el.tagName==='INPUT' || el.tagName==='TEXTAREA' || el.isContentEditable);
  document.addEventListener('contextmenu', (e)=>{
    if(!allowInput(e.target)) e.preventDefault();
  }, true);
  document.addEventListener('selectstart', (e)=>{
    if(!allowInput(e.target)) e.preventDefault();
  }, true);
  document.addEventListener('dragstart', (e)=>{
    if(!allowInput(e.target)) e.preventDefault();
  }, true);
  ['copy','cut','paste'].forEach(evt=>{
    document.addEventListener(evt, (e)=>{
      if(!allowInput(e.target)) e.preventDefault();
    }, true);
  });
  document.addEventListener('keydown', (e)=>{
    if(allowInput(e.target)) return;
    const k = e.key.toLowerCase();
    // bloqueia Ctrl+C / Ctrl+V / Ctrl+X / Ctrl+A / Ctrl+S / Ctrl+U / Ctrl+P / Ctrl+Shift+I
    if((e.ctrlKey || e.metaKey) && ['c','v','x','a','s','u','p','i','j'].includes(k)){
      e.preventDefault();
    }
    // bloqueia F12 e PrintScreen
    if(k==='f12' || e.key==='PrintScreen'){
      e.preventDefault();
    }
  }, true);
})();

carregar();