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
    "imagem": "https://cdn.cloudflare.steamstatic.com/steam/apps/17390/header.jpg",
    "galeria": [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/17390/header.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/17390/ss_49e394b918b958ce786a347b590e8c4e09fa8db3.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/17390/ss_f73ad4ff3fa4e1eb5eb843118cf5d5c64c8d506d.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/17390/ss_4e5ff01ff209ceadbf7fbb978d38072049d5bd33.600x338.jpg"
    ],
    "link": "https://www.mediafire.com/file/bows34oelk7i6ix/Spore.Complete.Edition.Multi-RU.Repack.by.z10yded.rar/file"
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
    "imagem": "https://cdn.cloudflare.steamstatic.com/steam/apps/319510/header.jpg",
    "galeria": [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/319510/header.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/319510/ss_bf5f7f985b9b8b8095b54a3e20bfd8d6dbfa0974.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/319510/ss_41f7e02b704c7d0dcd46777db6f849bc5efd2dfb.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/319510/ss_40cf6e35eb0daef1ee435bbca471dfc889f5bcdd.600x338.jpg"
    ],
    "link": "https://www.mediafire.com/file/zfz5l9odnpxmnip/FNAF_1.rar/file"
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
    "imagem": "https://cdn.cloudflare.steamstatic.com/steam/apps/332800/header.jpg",
    "galeria": [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/332800/header.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/332800/ss_3ce6ef4f9bf6e1eeb805eb3bcdd1aeddfecbbf09.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/332800/ss_37a1f563bfbc0b533e46c7ad7255be55ca964a78.600x338.jpg"
    ],
    "link": "https://www.mediafire.com/file/qjfrhac11g4g947/FNAF_2.rar/file"
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
    "imagem": "https://cdn.cloudflare.steamstatic.com/steam/apps/354140/header.jpg",
    "galeria": [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/354140/header.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/354140/ss_5974a6225b6a38bc16db9a6a80df30a3b04c86cb.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/354140/ss_679900c7ee9e4b6c38ee22efbc34cf8cfc1bc2be.600x338.jpg"
    ],
    "link": "https://www.mediafire.com/file/uewnf5hht0fldl2/FNAF_3.rar/file"
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
    "imagem": "https://cdn.cloudflare.steamstatic.com/steam/apps/388090/header.jpg",
    "galeria": [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/388090/header.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/388090/ss_6c003dc152e90c58e1c6aa2cfab7fbcbc1ddaa7f.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/388090/ss_db8bb3dafe5ca833b3a97bd6eb15ee6b2a0fb0cf.600x338.jpg"
    ],
    "link": "https://www.mediafire.com/file/pes8b90hoidtkwp/FNAF_4.rar/file"
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
    "imagem": "https://cdn.cloudflare.steamstatic.com/steam/apps/506610/header.jpg",
    "galeria": [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/506610/header.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/506610/ss_d4432130b91d2938fdfcb79622d109f6e6371cb7.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/506610/ss_ea2daecbd6bf0d4b4a1fbfdb6e64ecbc453bf4d8.600x338.jpg"
    ],
    "link": "https://www.mediafire.com/file/renc6yqr1na6gef/FNAF_SISTER_LOCATION.rar/file"
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
    "imagem": "https://cdn.cloudflare.steamstatic.com/steam/apps/738060/header.jpg",
    "galeria": [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/738060/header.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/738060/ss_26eefb8765faedfb21c568ec5d1b7ddcbf2fcf55.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/738060/ss_49fb3dfa539eb855877f6b9074d28437a34614e5.600x338.jpg"
    ],
    "link": "https://www.mediafire.com/file/kdzik31qpyst4s5/FNAF_6.rar/file"
  }
];

let todosJogos = [...JOGOS];
let categoriaAtual = 'Todas';

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
  montarFiltros();
  rotear();
}

function rotear() {
  const hash = window.location.hash;
  if (hash.startsWith('#jogo/')) {
    const id = hash.replace('#jogo/', '');
    const jogo = todosJogos.find(j => j.id === id || slugify(j.nome) === id);
    if (jogo) {
      exibirDetalhes(jogo);
      return;
    }
  }
  exibirCatalogo();
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
    card.className = 'card';
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${j.imagem || ''}" alt="${j.nome || 'Jogo'}" onerror="this.src='https://via.placeholder.com/460x215?text=Sem+Imagem'" />
        <span class="card-overlay-badge">🔍 Ver História e Imagens</span>
      </div>
      <div class="card-body">
        <h3>${j.nome || 'Sem nome'}</h3>
        <div class="meta">
          <span>${j.categoria || 'Outros'}</span>
          <span>${j.tamanho || ''}</span>
        </div>
        <p class="desc">${j.descricao || ''}</p>
        <div class="card-actions">
          <a class="btn btn-secundario" href="#jogo/${gameId}">📖 Ver História</a>
          <a class="btn btn-download-quick" href="${j.link || '#'}" target="_blank" rel="noopener" onclick="event.stopPropagation()">⬇ Download</a>
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

function exibirCatalogo() {
  document.getElementById('view-catalogo').hidden = false;
  document.getElementById('view-detalhes').hidden = true;
  document.getElementById('search-wrap').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderizarCatalogo(document.getElementById('busca').value);
}

function exibirDetalhes(jogo) {
  document.getElementById('view-catalogo').hidden = true;
  document.getElementById('view-detalhes').hidden = false;
  document.getElementById('search-wrap').style.display = 'none';

  // Preencher dados
  document.getElementById('detalhes-titulo').textContent = jogo.nome || 'Detalhes do Jogo';
  document.getElementById('detalhes-resumo').textContent = jogo.descricao || '';
  document.getElementById('meta-cat').textContent = jogo.categoria || 'Geral';
  document.getElementById('meta-tamanho').textContent = jogo.tamanho || 'N/A';
  document.getElementById('meta-dev').textContent = jogo.desenvolvedor || 'Desconhecido';
  document.getElementById('meta-ano').textContent = jogo.ano || 'N/A';

  // Badges
  const badgesBox = document.getElementById('detalhes-badges');
  badgesBox.innerHTML = `
    <span class="badge badge-cat">${jogo.categoria || 'Jogo'}</span>
    <span class="badge badge-size">💾 ${jogo.tamanho || ''}</span>
  `;

  // Imagem principal e link
  const imgPrincipal = document.getElementById('img-principal');
  const linkImgPrincipal = document.getElementById('link-img-principal');
  const initialImgUrl = jogo.imagem || (jogo.galeria && jogo.galeria[0]) || '';
  imgPrincipal.src = initialImgUrl;
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

  // Botão de Download
  const btnDownload = document.getElementById('btn-download');
  btnDownload.href = jogo.link || '#';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listeners
document.getElementById('busca').addEventListener('input', e => renderizarCatalogo(e.target.value));

document.getElementById('btn-voltar').addEventListener('click', () => {
  window.location.hash = '';
});

document.getElementById('logo-btn').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.hash = '';
});

window.addEventListener('hashchange', rotear);

carregar();
