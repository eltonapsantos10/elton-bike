import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Form, Button } from "react-bootstrap"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page two" />

    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label id="formulario">Dados Pessoais</Form.Label>
    <Form.Control type="texto" placeholder="Seu Nome" />
  </Form.Group>
  <br></br><br></br>
  <Form.Group controlId="formBasicPassword">
    <Form.Label id="formulario">Rota Pretendida</Form.Label>
    <Form.Control type="texto" placeholder="Rota" />
  </Form.Group>
  <br></br><br></br>
  <Form.Group controlId="formBasicPassword">
    <Form.Label id="formulario">Semana Específica</Form.Label>
    <Form.Control type="date" placeholder="Período" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Concordo com os termos" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Enviar
  </Button>
</Form>
<br></br><br></br>
    <h1 id="texo11">Para mais informações e preenhcimento extras:</h1>
    <p id="textinn">Click Aqui</p>
    <Link to="/"><Button variant="danger">Voltar</Button></Link>
  </Layout>
)

export default ThirdPage
