import Head from "next/head"
import { CSSProperties, FC } from "react"
import { Navbar } from '../ui';

type PropsWithChildren = {
    children: React.ReactElement,
    title: string;
}

const styles: CSSProperties = {
    padding: '0px 20px'
}

const origin = ( typeof window == undefined ) ? '' : window.location.origin;

export const Layout: FC<PropsWithChildren> = ({ children, title }) => {
  
return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="Jose David Bolivar"/>
            <meta name="description" content={ `Informacion sobre el pokemon ${ title }`}/>
            <meta name="keywords" content={`${ title }, pokemon, pokedex`}/>
            <meta property="og:title" content={`Pagina de ${ title }`}/>
            <meta property="og:description" content={`Informacion de ${ title }`}/>
            <meta property="og:image" content={`${ origin }/img/pokemon.jpg`} />
        </Head>

        <Navbar />

        <main>
            {
                children
            }
        </main>
    </>
  )
}
