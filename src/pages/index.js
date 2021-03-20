import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Carousel } from "react-bootstrap"
import { CarouselItem, Jumbotron, Container, Button, Nav, Navbar, Card } from "react-bootstrap"


import slide01 from "../images/slide01.jpeg"
import slide04 from "../images/slide04.jpeg"
import slide03 from "../images/slide03.jpeg"
import trilha from "../images/trilha.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Elton Santos" />
    <br></br><br></br><br></br><br></br><br></br><br></br>

    <Carousel>
      <CarouselItem>
        <img src={slide01} />

      </CarouselItem>

      <CarouselItem>
        <img src={slide04} />

      </CarouselItem>

      <CarouselItem>
        <img src={slide03} />

      </CarouselItem>
    </Carousel>


    <br></br><br></br>


    <br></br>

    <Card id="card-total">
      <Card.Header id="texto-final1"> Que tal pedalar com uma bike nova? </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p>
            <Button variant="outline-warning"><a href="https://brciclismo.com.br/wp-content/uploads/2020/06/bicicleta-soul-volcano-carbono-aro-29-full-suspension-sram-sx-eagle-customizada.jpg" target="_blank">Aqui!</a></Button>
          </p>

          

          <br></br>
          <p id="texo-final">

            O ciclismo, como você já sabe, acelera o metabolismo. Isso faz com que as substâncias que geram o colesterol ruim (LDL) sejam rapidamente queimadas pelo seu organismo. {' '}

            <Button variant="outline-warning"> <a href="https://www.youtube.com/watch?v=LMGr1oIeNH8" target="_blank">Aqui!</a></Button>
          </p>

          <footer className="blockquote-footer">
          </footer>
        </blockquote>
      </Card.Body>
    </Card>





    <br></br><br></br>


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

<section></section>

<br></br> <br></br> <br></br>

    <p id="git"><a href="https://github.com/eltonapsantos10" target="_blank">eltonapsantos10</a></p>

    <br></br><br></br><br></br><br></br><br></br><br></br>

    <p>
      <Link to="/page-2/"><Button variant="danger">Contatos</Button></Link> <br /><br></br><br /><br></br>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
