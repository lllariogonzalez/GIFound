import { LogoContainer } from "../styles/Logo";

export const Logo = ({ size, name }) => {
    return (
        <LogoContainer className={name || "logo"} size={size}>
            <img src="/logo.jpg" alt="logo" />
        </LogoContainer>
    );
};
