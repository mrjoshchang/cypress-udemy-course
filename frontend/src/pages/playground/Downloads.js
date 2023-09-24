import DownloadImage from "../../components/DownloadImage";
import BackButton from "../../components/common/BackButton";

const DownloadsPage = () => {
  const ogStarterPokemon = [
    {
      imageUrl: "/images/bulbasaur.jpg",
      fileName: "bulbasaur.jpg",
      imgName: "Bulbasaur",
    },
    {
      imageUrl: "/images/charmander.jpg",
      fileName: "charmander.jpg",
      imgName: "Charmander",
    },
    {
      imageUrl: "/images/pikachu.jpg",
      fileName: "pikachu.jpg",
      imgName: "Pikachu",
    },
    {
      imageUrl: "/images/squirtle.jpg",
      fileName: "squirtle.jpg",
      imgName: "Squirtle",
    },
  ];

  return (
    <div>
      <BackButton />
      <h2 style={{ textDecoration: "underline" }}>Downloads Page</h2>
      {ogStarterPokemon.map((pokemon) => {
        return (
          <DownloadImage
            imageUrl={pokemon.imageUrl}
            fileName={pokemon.fileName}
            imgName={pokemon.imgName}
          />
        );
      })}
    </div>
  );
};

export default DownloadsPage;
