import React from "react";
import {
    FooterBrand,
    FooterContainer,
    FooterLink,
    FooterLogo,
    FooterSection,
} from "../styles/Footer";
import { Logo } from "./Logo";
import { Row } from "@/components/Layout/Row";
import { GithubIcon } from "./Icons/GithubIcon";
import { LinkedinIcon } from "./Icons/LinkedinIcon";

export const Footer = () => {
    return (
        <React.Fragment>
            <FooterContainer>
                <FooterSection className="footer-brand">
                    <FooterLogo className="brand">
                        <Logo name="topbar-logo" size="3rem" />
                        <h1>
                            GIF<span className="purple">o</span>
                            <span className="deeppink">u</span>
                            <span className="orange">n</span>
                            <span className="orange">d</span>
                        </h1>
                    </FooterLogo>
                    <p>
                        From cats to memes. Hundreds and hundreds of funny gifs
                        waiting to be discovered.
                    </p>
                    <Row gap="2rem" margin="0.5rem 0 0 0">
                        <FooterLink
                            href="https://github.com/lllariogonzalez"
                            target="_blank"
                        >
                            <GithubIcon />
                            Github
                        </FooterLink>
                        <FooterLink
                            href="https://linkedin.com/in/lllariogonzalez"
                            target="_blank"
                        >
                            <LinkedinIcon />
                            Linkedin
                        </FooterLink>
                    </Row>
                </FooterSection>
                <div style={{ display: "flex", gap: "3rem" }}>
                    <FooterSection>
                        <h3>Site</h3>
                        <ul>
                            <li>
                                <FooterLink href="">Home</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="">Search</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="">Explore</FooterLink>
                            </li>
                        </ul>
                    </FooterSection>
                    <FooterSection>
                        <h3>Account</h3>
                        <ul>
                            <li>
                                <FooterLink href="">Login</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="">Register</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="">Upload</FooterLink>
                            </li>
                        </ul>
                    </FooterSection>
                </div>
            </FooterContainer>
            <FooterBrand>
                Developed by&nbsp;
                <a href="https://github.com/lllariogonzalez">@lllariogonzalez 🚀</a>
            </FooterBrand>
        </React.Fragment>
    );
};
