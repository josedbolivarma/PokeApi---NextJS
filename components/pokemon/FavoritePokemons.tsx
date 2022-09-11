import { Grid } from "@nextui-org/react"
import { FavoriteCardPokemon } from "./";

interface Props {
    pokemons: number[];
}

export const FavoritePokemons = ({ pokemons }: Props ) => {
  return (
    <Grid.Container gap={ 2 } direction="row" justify="flex-start">
        {
            pokemons.map( ( id: number ) => (
                <FavoriteCardPokemon 
                key={ id }
                pokemonId={ id } 
                />
              ))
            }
    </Grid.Container>
  )
}