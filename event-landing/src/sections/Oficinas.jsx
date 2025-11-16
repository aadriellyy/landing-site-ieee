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

const dadosOficinas = [
  {
    id: 1,
    titulo: "Oficina de Robótica",
    subtitulo: "",
    fotos: fotosOficina1
  },
  {
    id: 2,
    titulo: "Oficina de Inteligência Artificial",
    subtitulo: "",
    fotos: fotosOficina2
  },
  {
    id: 3,
    titulo: "Oficina de Segurança",
    subtitulo: "",
    fotos: fotosOficina3
  },
  {
    id: 4,
    titulo: "Oficina de Programação",
    subtitulo: "",
    fotos: fotosOficina4
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
      <h1 className="titulo-principal">📸 Galeria de Oficinas do Evento</h1>
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
