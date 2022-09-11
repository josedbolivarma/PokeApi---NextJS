import { Container, Text, Image } from "@nextui-org/react"

export const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc( 100vh - 100px )',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      }}>
        <Text h1>
          No hay favoritos
        </Text>
        <Image 
        src="https://c.tenor.com/4VqyxVX44UMAAAAC/pikachu-triste.gif"
        alt='No Found'
        width={ 250 }
        height={ 250 }
        css={{
          opacity: 0.8
        }}
        />
      </Container>
  )
}
