import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/ui"
import { useState, useEffect } from 'react';
import { localFavorites } from "../../utils";
import { FavoritePokemons } from "../../components/pokemon";

const Favorites = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons() );
  }, []);
  
  return (
    <Layout title="Pokemon - Favoritos">
        {
          favoritePokemons.length === 0
          ? ( <NoFavorites /> )
          : (
            <FavoritePokemons pokemons={ favoritePokemons } />
          )
        }        
    </Layout>
  )
}

export default Favorites