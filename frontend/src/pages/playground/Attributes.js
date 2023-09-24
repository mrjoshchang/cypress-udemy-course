import BackButton from '../../components/common/BackButton';

function AttributesPage() {
  const colors = ['red', 'blue', 'green', 'orange', 'purple'];

  return (
    <>
      <BackButton />

      <h2 title="page header" style={{ textDecoration: 'underline' }}>
        Attributes Page
      </h2>
      <div>
        <h1>Colorful Paragraphs</h1>
        {colors.map((color, index) => (
          <p
            title={`${color} title`}
            data-cy={color}
            key={index}
            style={{ color }}
          >
            This paragraph has a different color: {color}.
          </p>
        ))}
      </div>
      <div>
        <a
          href="http://localhost:3000/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </div>
      <div>
        <a
          href="https://www.pokemon.com/us"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pokemon (US)
        </a>
      </div>
      <div>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
          alt="squirtle"
          width="475"
          height="475"
        />
        <p style={{ textDecoration: 'underline' }}>Squirtle</p>
      </div>
    </>
  );
}

export default AttributesPage;
