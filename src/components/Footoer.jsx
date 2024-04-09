import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styled from "styled-components";

const Styles = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #5D5761;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLink = styled.a`
    font-size: 30px; 
    color: #557A95; 
    margin: 0 10px;
`;

export default function Header() {
    return (
        <Styles>
            <footer className="footer fixed-bottom">
                <div className="container d-flex justify-content-center">
                    <StyledLink href="https://github.com/A-knio" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </StyledLink>
                    <StyledLink href="https://www.linkedin.com/in/adam-abdluramen-knio-1a9110a2/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </StyledLink>
                </div>
            </footer>
        </Styles>
    );
}