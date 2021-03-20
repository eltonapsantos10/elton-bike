import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Carousel} from "react-bootstrap"
import { CarouselItem, Jumbotron, Container, Button, Nav, Navbar } from "react-bootstrap"


import slide01 from  "../images/slide01.jpeg"
import slide04 from  "../images/slide04.jpeg"
import slide03 from  "../images/slide03.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Elton Santos" />
    <br></br><br></br><br></br><br></br><br></br><br></br>

    <Carousel>
      <CarouselItem>
      <img src={slide01}/>

      </CarouselItem>
      
      <CarouselItem>
      <img src={slide04}/>

      </CarouselItem>

      <CarouselItem>
      <img src={slide03}/>

      </CarouselItem>
    </Carousel>
    

    <Jumbotron fluid className="jumb-geral">
  <Container id="jumb1">
    <section id="jumb">
    <h1 id="texto1">Seja um parceiro nosso!</h1>
    <p id="text2">
      Temos tradição e know-how neste segmento de esportes... . <br></br>
      <Button variant="outline-warning">Aqui!</Button>
    </p>
    </section>
  </Container>
</Jumbotron>

<Jumbotron fluid className="jumb-geral2">
  <Container>
    <section>
    <h1 id="texto1">Por que andar de Bike?!</h1>
    <p id="text2">
    Veja os inúmeros benefícios ao pedalar apenas 20min... <br></br>
    <Button variant="outline-warning"> <a href="https://www.youtube.com/watch?v=LMGr1oIeNH8" target="_blank">Aqui!</a></Button>
    </p>
    </section>
  </Container>
</Jumbotron>

<Jumbotron fluid className="jumb-geral3">
  <Container>
    <section>
    <h1 id="texto1">Bike e seu estilo!</h1>
    <p id="text2">
    As melhores e mais estilosas bikes de SP em apenas um lugar... <br></br>
    <Button variant="outline-warning"><a href="https://brciclismo.com.br/wp-content/uploads/2020/06/bicicleta-soul-volcano-carbono-aro-29-full-suspension-sram-sx-eagle-customizada.jpg" target="_blank">Aqui!</a></Button>
    </p>
    </section>
  </Container>
</Jumbotron>

<br></br><br></br>
<Jumbotron fluid className="jumb-geral4">
  <Container>
    <section>
    
    </section>
  </Container>
</Jumbotron>

<Button variant="secondary" size="lg" block id="botao">
    <table>
      <thead>
        <tr>
          <th>Principais Localidade :</th>
          <th>Ruas / Avenidas :</th>
          <th>Principais Serviços : </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>São Bernardo do Campo</td>
          <td>Avenida Jurubatuba </td>
          <td>Consertos e vendas de acessórios</td>
        </tr>
        <tr>
          <td>São Caetano do Sul</td>
          <td>Avenida Pereira Barreto</td>
          <td>Consertos e vendas de acessórios</td>
        </tr>
        <tr>
          <td>Santo André</td>
          <td>Avenida Airton Senna</td>
          <td>Consertos e vendas de acessórios</td>
        </tr>



      </tbody>



    </table>
  </Button>


  <p id="git"><a href="https://github.com/eltonapsantos10" target="_blank">eltonapsantos10</a></p>

  <br></br><br></br><br></br><br></br><br></br><br></br>

    <p>
      <Link to="/page-2/"><Button variant="danger">Contatos</Button></Link> <br/><br></br><br/><br></br>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
