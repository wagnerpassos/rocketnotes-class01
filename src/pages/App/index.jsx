import "./styles.js";
import { Fragment } from "react";
import { Container, Links } from "./styles.js";
import { Button } from '../../components/Button';
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag/index.jsx";

export function App() {

  return (
    <Fragment>
        <Container>
            <Header/>
            <Section title="Links Úteis">
                <Links>
                    <li><a href="https://www.rocketseat.com.br"> Rocketseat</a></li>
                    <li><a href="https://www.rocketseat.com.br"> Rocketseat</a></li>
                </Links>
            </Section>
            <Section title="Marcadores">
                <Tag title="UAEUAE"/>
                <Tag title="UAEUAE"/>
            </Section>
            <Button title="Voltar"/>
        </Container>
    </Fragment>
  )
}
