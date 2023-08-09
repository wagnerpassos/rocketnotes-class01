import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";


export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Página para gerenciar seus links úteis!</p>
                <h2>Faça o seu login</h2>
                <Input
                    placeholder="email"
                    icon={FiMail}
                />
                <Input
                    placeholder="senha"
                    icon={FiLock}
                />
                <Button title="Entrar" />
                <Link to="/register">
                    Criar conta
                </Link>
            </Form>
            <Background/>
        </Container>
    );
};