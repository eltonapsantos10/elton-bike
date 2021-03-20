import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, Button, CardGroup } from "react-bootstrap"

import corrente from "../images/corrente.jpeg"
import suspe from "../images/suspe.jpeg"
import pedal from "../images/pedal.jpeg"
import cambio_traseiro from "../images/cambio_traseiro.jpeg"
import pedivela from "../images/pedivela.jpeg"
import mesa from "../images/mesa.jpeg"
import abracadeira from "../images/abracadeira.jpeg"
import pinca_freio_disco from "../images/pinca_freio_disco.jpeg"
import cubo from "../images/cubo.jpeg"
import alavanca from "../images/alavanca.jpeg"
import banco from "../images/banco.jpeg"
import transbike from "../images/transbike.jpeg"
import movimento_central from "../images/movimento_central.jpeg"
import pneu from "../images/pneu.jpeg"



const SecondPage = () => (
  <Layout>
    <SEO title="Page three" />
    <br></br><br></br><br></br><br></br>

    <CardGroup>
      <Card>
        <img src={corrente} />
        <Card.Body>
          <Card.Title id="comprar">Corrente</Card.Title>
          <Button variant="outline-dark" id="bot"><img src="https://img.icons8.com/color/48/26e07f/buy--v1.png" /></Button>

        </Card.Body>

      </Card>

      <Card>
        <img src={cambio_traseiro} />
        <Card.Body>
          <Card.Title id="comprar">Câmbio Traseiro</Card.Title>
          <Button variant="outline-dark" id="bot"><img src="https://img.icons8.com/color/48/26e07f/buy--v1.png" /></Button>

        </Card.Body>

      </Card>
      <Card>
        <img src={suspe} />
        <Card.Body>
          <Card.Title id="comprar">Susp Dianteira</Card.Title>
          <Button variant="outline-dark" id="bot"><img src="https://img.icons8.com/color/48/26e07f/buy--v1.png" /></Button>

        </Card.Body>

      </Card>
      <Card>
        <img src={pedal} />
        <Card.Body>
          <Card.Title id="comprar">Pedal</Card.Title>
          <Button variant="outline-dark" id="bot"><img src="https://img.icons8.com/color/48/26e07f/buy--v1.png" /></Button>

        </Card.Body>

      </Card>
    </CardGroup>


    <CardGroup>
      <Card>
        <img src={pedivela} />
        <Card.Body>
          <Card.Title id="comprar">Pedivela</Card.Title>
          <Button variant="outline-dark" id="bot"><img src="https://img.icons8.com/color/48/26e07f/buy--v1.png" /></Button>

        </Card.Body>

      </Card>

      <Card>
        <img src={mesa} />
        <Card.Body>
          <Card.Title id="comprar">Mesa</Card.Title>
          <Button variant="outline-dark" id="bot"><img src="https://img.icons8.com/color/48/26e07f/buy--v1.png" /></Button>

        </Card.Body>

      </Card>
      <Card>
        <img src={alavanca} />
        <Card.Body>
          <Card.Title id="comprar">Manete de Freio</Card.Title>
          <Button variant="outline-dark" id="bot"><img src="https://img.icons8.com/color/48/26e07f/buy--v1.png" /></Button>

        </Card.Body>

      </Card>
      <Card>
        <img src={pinca_freio_disco} />
        <Card.Body>
          <Card.Title id="comprar">Pinça Freio Disco</Card.Title>
          <Button variant="outline-dark" id="bot"><img src="https://img.icons8.com/color/48/26e07f/buy--v1.png" /></Button>

        </Card.Body>

      </Card>
    </CardGroup>




    <section></section>

    <CardGroup>
      <Card>
        <img src={transbike} />
        <Card.Body>
          <Card.Title id="comprar">Transbike</Card.Title>
          <Button variant="outline-dark" id="bot"><a href="https://www.mercadolivre.com.br/gz/checkout/direct/buying/7cee91a0cb214190ae521460fc703fba/notificationAccordOrPUISShipping" target="_blank"><img src="https://img.icons8.com/color/48/26e07f/buy--v1.png" /></a></Button>

        </Card.Body>

      </Card>

      <Card>
        <img src={banco} />
        <Card.Body>
          <Card.Title id="comprar">Banco</Card.Title>
          <Button variant="outline-dark" id="bot"><img src="https://img.icons8.com/color/48/26e07f/buy--v1.png" /></Button>

        </Card.Body>

      </Card>
      <Card>
        <img src={pneu} />
        <Card.Body>
          <Card.Title id="comprar">Pneu</Card.Title>
          <Button variant="outline-dark" id="bot"><img src="https://img.icons8.com/color/48/26e07f/buy--v1.png" /></Button>

        </Card.Body>

      </Card>
      <Card>
        <img src={movimento_central} />
        <Card.Body>
          <Card.Title id="comprar">Mov Central</Card.Title>
          <Button variant="outline-dark" id="bot"><img src="https://img.icons8.com/color/48/26e07f/buy--v1.png" /></Button>

        </Card.Body>

      </Card>
    </CardGroup>

    <br></br><br></br>

    <Link to="/"><Button variant="danger">Voltar</Button></Link>
  </Layout>
)

export default SecondPage
