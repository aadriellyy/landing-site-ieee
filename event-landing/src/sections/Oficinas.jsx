import { useState } from 'react';
import './Oficinas.css';

const fotosOficina1 = Object.values(
  import.meta.glob('../assets/oficinas/robotica/*.{jpg,png,jpeg,webp}', {
    eager: true,
    import: 'default'
  })
);

const fotosOficina2 = Object.values(
  import.meta.glob('../assets/oficinas/ia/*.{jpg,png,jpeg,webp}', {
    eager: true,
    import: 'default'
  })
);

const fotosOficina3 = Object.values(
  import.meta.glob('../assets/oficinas/seguranca/*.{jpg,png,jpeg,webp}', {
    eager: true,
    import: 'default'
  })
);

const fotosOficina4 = Object.values(
  import.meta.glob('../assets/oficinas/programacao/*.{jpg,png,jpeg,webp}', {
    eager: true,
    import: 'default'
  })
);

const fotosOficina5 = Object.values(
  import.meta.glob('../assets/oficinas/palestras/*.{jpg,png,jpeg,webp}', {
    eager: true,
    import: 'default'
  })
);

const fotosOficina6 = Object.values(
  import.meta.glob('../assets/oficinas/mostra/*.{jpg,png,jpeg,webp}', {
    eager: true,
    import: 'default'
  })
);

const dadosOficinas = [
  {
    id: 1,
    titulo: "Oficina de Robótica",
    subtitulo: "As alunas aprenderam conceitos de programação e eletrônica utilizando a Ardunina, uma robô feminina impressa em 3D e equipada com Arduino. As participantes montaram os circuitos, programaram os movimentos e deram “vida” à robô, explorando de forma prática o potencial criativo da robótica.",
    fotos: fotosOficina1
  },
  {
    id: 2,
    titulo: "Oficina de Inteligência Artificial",
    subtitulo: "A atividade “Ensinando Inteligência Artificial para Meninas” introduziu conceitos de IA, como chatbots, NLP, Machine Learning e ética. Em grupos, as alunas treinaram um modelo supervisionado no Machine Learning for Kids para ensinar o computador a jogar Pedra, Papel e Tesoura por reconhecimento de gestos usando webcam.",
    fotos: fotosOficina2
  },
  {
    id: 3,
    titulo: "Oficina de Segurança",
    subtitulo: "A oficina apresentou noções essenciais de segurança digital, destacando riscos que afetam especialmente meninas e mulheres. As participantes discutiram boas práticas online, conheceram exemplos de ataques comuns e responderam a um quiz interativo sobre segurança na internet.",
    fotos: fotosOficina3
  },
  {
    id: 4,
    titulo: "Oficina de Programação",
    subtitulo: "Após uma introdução inicial à linguagem, as estudantes resolveram desafios de programação e participaram de uma pequena competição no Codeforces. Cada problema resolvido rendia um balão, garantindo um clima leve e motivador. Todas as participantes conquistaram pelo menos um balão.",
    fotos: fotosOficina4
  },
  {
    id: 5,
    titulo: "Palestras",
    subtitulo: "Durante as palestras, as participantes puderam conhecer melhor o projeto Meninas.Comp e também foram apresentadas às organizadoras, voluntárias e apoiadores do evento. A primeira palestra apresentou os cursos relacionados à área de computação oferecidos pela Universidade de Brasília. Já a segunda abordou a presença das mulheres no mercado de trabalho, trazendo uma visão tanto nacional quanto internacional.",
    fotos: fotosOficina5
  },
  {
    id: 6,
    titulo: "Amostras de projetos",
    subtitulo: "As alunas também tiveram a oportunidade de explorar os projetos desenvolvidos pelas escolas parceiras, em um momento dedicado a conhecer melhor o trabalho produzido por suas colegas.",
    fotos: fotosOficina6
  }
];

const CartaoOficina = ({ oficina }) => (
  <section className="cartao-oficina">
    <h3 className="titulo-oficina">{oficina.titulo}</h3>
    <p className="subtitulo-oficina">{oficina.subtitulo}</p>

    <div className="fotos-container">
      {oficina.fotos.map((fotoUrl, index) => (
        <img
          key={index}
          src={fotoUrl}
          alt={`Foto ${index + 1}`}
          className="foto-momento"
        />
      ))}
    </div>
  </section>
);

const Oficinas = () => {
  const [oficinas] = useState(dadosOficinas);

  return (
    <div className="oficinas-container">
      <h1 className="titulo-principal">📸 Galeria do Evento</h1>
      <p className="descricao">
        Reviva os melhores momentos de aprendizado.
      </p>

      <div className="oficinas-grid">
        {oficinas.map(oficina => (
          <CartaoOficina key={oficina.id} oficina={oficina} />
        ))}
      </div>
    </div>
  );
};

export default Oficinas;
