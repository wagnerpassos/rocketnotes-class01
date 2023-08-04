import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://www.github.com/wagnerpassos.png" alt="imagem do wagner" />
                <div>
                    <span>Bem vindo</span>
                    <strong>Wagner Passos</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
}