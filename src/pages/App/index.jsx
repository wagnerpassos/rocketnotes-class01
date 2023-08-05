import "./styles.js";
import { Fragment } from "react";
import { Container, Links, Content } from "./styles.js";
import { Button } from '../../components/Button';
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";

export function App() {

    return (
        <Fragment>
            <Container>
                <Header />
                <main>
                    <Content>
                        <ButtonText title="Excluir Nota" />
                        <h1>Introdução ao React</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum culpa perspiciatis qui sapiente rem minus, minima rerum eaque voluptatem quisquam similique aspernatur aut accusantium. Aperiam sapiente maxime explicabo repellat.</p>

                        <Section title="Links Úteis">
                            <Links>
                                <li><a href="https://www.rocketseat.com.br"> Rocketseat</a></li>
                                <li><a href="https://www.rocketseat.com.br"> Rocketseat</a></li>
                            </Links>
                        </Section>

                        <Section title="Marcadores">
                            <Tag title="UAEUAE" />
                            <Tag title="UAEUAE" />
                        </Section>
                        <Button title="Voltar" />
                    </Content>
                </main>
            </Container>
        </Fragment>
    )
}
