const emoji_map = {
  "1 person": "👤",
  "2 pessoas": "👥",
  "3 pessoas": "👥",
  "4 pessoas": "👥",
  "5 pessoas": "👥",
  "6 pessoas": "👥",
  "7 pessoas": "👥",
  "bebê": "🍼",
  "praia": "🏖",
  "barba": "👴",
  "cama": "🛏",
  "bicicleta": "🚲",
  "camera": "📷",
  "carro": "🚗",
  "gato": "😺",
  "criança": "👦",
  "arvore de natal": "🎄",
  "close-up": "👀",
  "closeup": "👀",
  "nuvem": "☁️",
  "show": "🎤",
  "multidão": "👥",
  "dançando": "💃",
  "deserto": "🍰",
  "cachorro": "🐶",
  "bebida": "🍹",
  "comendo": "🍽",
  "óculos": "👓",
  "fogos de artifício": "🎆",
  "flor": "🌻",
  "food": "🍎",
  "copos": "🕶",
  "golf": "🏌️‍",
  "grama": "🍃",
  "chapéu": "👒",
  "área interna": "🏠",
  "sala de estar": "🏠",
  "meme": "👍",
  "montanha": "🌋",
  "natureza": "🏞",
  "noite": "🌃",
  "oceano": "🌊",
  "escritório": "💼",
  "uma ou mais pessoas": "👥",
  "ao ar livre": "🚵",
  "pessoas comendo": "🍽",
  "pessoas no palco": "🎤",
  "pessoas tocando instrumentos musical": "🎸",
  "pessoas jovando": "🏀",
  "pessoas sentadas": "⑁",
  "pessoas sorrindo": "😂",
  "pessoas em pé": "🕴",
  "telefone": "📱",
  "planta": "🌿",
  "tocando um instrumento musical": "🎸",
  "selfie": "🤳",
  "sapatos": "👡",
  "sentado": "⑁",
  "céu": "☀️",
  "arranha-céu": "🏙",
  "dormindo": "😴",
  "sorriso": "😋",
  "neve": "❄️",
  "em pé": "🕴",
  "listras": "📶",
  "terno": "🕴",
  "óculos de sol": "🕶",
  "nadando": "🏊",
  "mesa": "🍽",
  "texto": "🔠",
  "árvore": "🌴",
  "crepúsculo": "🌃",
  "água": "💧",
  "casamento": "💒"
}

const show_facebook_cv_tags = function() {
  const TAG_PREFIX = "A imagem pode conter:";
  const images = [...document.getElementsByTagName('img')];

  images.forEach(function(el) {
    if (el.hasAttribute("data-prev-alt") && el.getAttribute("data-prev-alt") === el.getAttribute("alt"))
      return;

    el.setAttribute("data-prev-alt", el.alt);

    const altText = el.alt;
    const isCVTag = altText.startsWith(TAG_PREFIX);

    if (isCVTag) {
      const tags = altText.slice(TAG_PREFIX.length).split(/, | e /);
      let html = "<ul style='position:absolute;top:10px;right:10px;padding:5px;font-size:12px;line-height:1.8;background-color:rgba(0,0,0,0.7);color:#fff;border-radius:5px'>";

      tags.forEach(function(tag){
        let prefix = "∙";

        if (tag in emoji_map)
          prefix = emoji_map[tag];

        html += `<li>${prefix} ${tag}</li>`;
      });

      html += "</ul>";

      el.style.position = 'relative';
      el.insertAdjacentHTML('afterend', html);
    }
  });
};

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        show_facebook_cv_tags();
    });
});

const config = { attributes: true, childList: true, characterData: false }

observer.observe(document.body, config);

show_facebook_cv_tags();
