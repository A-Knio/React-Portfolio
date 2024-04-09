import React from 'react';
import ProjectCard from '../components/UI/ProjectCards.jsx';
import { Container, Col, Row } from 'react-bootstrap';


const Styles = styled.div`
  padding-top: 125px;
  display: flex;
  align-items: center;
  padding-bottom: 50px;

  .project-card {
    padding-bottom: 10px;
  }
  
`;


export default function PortfolioPage() {
    return (
        <Styles className='portfolio'>
            <Container fluid className='portfolio-container'>
                <h1 className='portfolio-title text-center'>Here is some of my work</h1>
                <Row>
                <Col md={6} className="project-card">
                    <ProjectCard
                        imgPath={gallery}
                        title='Gallery of Journeys'
                        description='A site for travelers to store and sell their photos from traveling.'
                        github='https://gallery-of-journeys.onrender.com/'
                    />
                </Col>
                <Col md={6} className="project-card mx-auto">
                    <ProjectCard
                        imgPath={crate}
                        title=''
                        description='.'
                        github=''
                    />
                </Col>

                <Col md={6} className="project-card">
                    <ProjectCard
                        imgPath={dental}
                        title=''
                        description='.'
                        github=''
                    />
                </Col>

                <Col md={6} className="project-card">
                    <ProjectCard
                        imgPath={weather}
                        title=''
                        description='.'
                        github=''
                    />
                </Col>

                <Col md={6} className="project-card">
                    <ProjectCard
                        imgPath={notetaker}
                        title=''
                        description='.'
                        github=''
                    />
                </Col>
                </Row>
            </Container>
        </Styles>
    )
}
