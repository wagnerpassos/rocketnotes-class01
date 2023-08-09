import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";


export function SignUp() {
    return (
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Página para gerenciar seus links úteis!</p>
                <h2>Crie sua conta</h2>
                <Input
                    placeholder="Nome"
                    icon={FiUser}
                />
                <Input
                    placeholder="Email"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha"
                    icon={FiLock}
                />
                <Button title="Cadastrar" />
                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>
        </Container>
    );
};