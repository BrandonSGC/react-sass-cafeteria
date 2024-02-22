import { CoffeeProcess } from "../components"
import { Footer, Header } from "../layout"

export const Process = () => {
  return (
    <>
      <Header page="proceso" title='Los verdaderos expertos del café' />
      <main className="contenedor contenido-principal">
        <CoffeeProcess image='1' title='Granos de Café' />
        <CoffeeProcess image='2' title='Tostar el Café' />
        <CoffeeProcess image='3' title='Empacar el Café' />
        <CoffeeProcess image='4' title='Moler granos de Café' />
        <CoffeeProcess image='5' title='Disfruta una taza' />

      </main>
      <Footer />
    </>
  )
}
