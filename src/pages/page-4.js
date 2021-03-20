import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Card, Button, Alert, Image, ListGroup, ListGroupItem,Spinner, ProgressBar } from "react-bootstrap"

import tudobike from  "../images/tudobike.jpeg"

const FourthPage = () => (
  <Layout>
    <SEO title="Page four" />
    <br></br><br></br><br></br><br></br>
    <Alert variant="success">
    <ProgressBar animated now={45} />
  <Alert.Heading>Quer saber quais benefícios você pode ter ao pedalar?</Alert.Heading>
  <p>
  Além de ser um meio de transporte barato e sustentável, a bicicleta também é ferramenta para quem quer apenas se exercitar. E seu uso, não importa para qual objetivo, só faz bem à saúde! Quer saber quais benefícios você pode ter ao pedalar? A MetLife listou 10 para você!
  </p>
  <hr />
  <p className="mb-0">
  Essa atividade, acompanhada de uma alimentação saudável e de visitas regulares ao médico, vai melhorar - e muito - a sua qualidade de vida! Portanto, vamos pedalar!
  </p>
</Alert>
<br></br><br></br>

<Card style={{ width: '18rem' }}>
  
  <Card.Body>
  <Spinner animation="border" variant="success" /> 
  <Spinner animation="border" variant="primary" />
  <Spinner animation="border" variant="warning" />
  <Spinner animation="border" variant="secondary" />

  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="danger" />


    <img src={tudobike}/>
    
    <Card.Text>
    <p id="textinho">O ciclista consegue trabalhar no mesmo exercício diferentes regiões: quadríceps, posterior da coxa, panturrilha, glúteos, abdominal e extensores da coluna. Vale lembrar que até os músculos do ombro, braço e antebraço são desenvolvidos no ciclismo!</p>
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Proporciona bem-estar</ListGroupItem>
    <ListGroupItem>Não prejudica as articulações</ListGroupItem>
    <ListGroupItem>Melhora o tônus muscular.</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Acessar o Blog</Card.Link>
    <Card.Link href="#">Info +</Card.Link>
  </Card.Body>
</Card>
<br></br>
    <Link to="/"><Button variant="danger">Voltar</Button></Link>
  </Layout>
)

export default FourthPage
