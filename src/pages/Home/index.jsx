import { Container, Brand, Menu, Search, Content, NewNote } from "./styles.js";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { FiPlus } from "react-icons/fi";
import { Note } from "../../components/Note/index.jsx";
import { Section } from "../../components/Section";

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header>

            </Header>
            <Menu>
                <li><ButtonText isActive title="Todos"/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Node"/></li>
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiPlus}/>
            </Search>
            <Content>
                <Section title="Minhas Notas">
                    <Note data={{   title: "React", 
                                    tags: [
                                        {id: 1, name: "ALFO"}, 
                                        {id: 2, name: "BRABO"}, 
                                        {id: 3, name: "CHARLO"}
                                    ] 
                    }}/>
                </Section>
            </Content>
            <NewNote>
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>
    )
};