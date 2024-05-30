import React from 'react'; import { Container, Row, Col } from 'react-bootstrap';

 const Services = () => { return (
<section className="services">
    <Container>
        <h2 className="services-title">Our Services</h2>
        <Row>
            <Col md={6} className="service-col">
            <div className="service-card">
                <h3 className="service-heading">
                    Branding
                    <div className="underline orange"></div>
                </h3>
                <p>
                    The brand is hope, It is also the source of inspiration for everything you do when you deal with your customers and that is the important and emotional thing. Your Brand and Visual identity represents an intrinsic
                    Value to your company.
                </p>
                <p style={{fontWeight:1000}}>In focal X agency, we provide:</p>
                <ul>
                    <li>Visual identity design.</li>
                    <li>Define Brand Identity.</li>
                    <li>Define Brand personality.</li>
                    <li>Building Your brand strategy.</li>
                    <li>Market research and competitors study.</li>
                </ul>
                <p style={{fontWeight:800}}>We walk with you from A to Z.</p>
                <div className="service-icon orange">
                    <img src="./img/brandingOrange.png" alt="Branding" style={{width:'180px'}}/>
                </div>
            </div>
            </Col>
            <Col md={6} className="service-col">
            <div className="service-card">
                <h3 className="service-heading">
                    Marketing
                    <div className="underline purple"></div>
                </h3>
                <p>
                    Talk to your customers and tell them you and your company’s story through us the way you want. Let us plan the content that will bring your audience closer to you.
                </p>
                <p style={{fontWeight:1000}}>In our marketing agency, we provide:</p>
                <ul>
                    <li>E-mail marketing.</li>
                    <li>Affiliate marketing.</li>
                    <li>Influencer marketing.</li>
                    <li>Market research and Analysis.</li>
                    <li>App store optimization (ASO).</li>
                    <li>Search engine Marketing (SEM).</li>
                    <li>Search engine optimization (SEO).</li>
                    <li>Social media marketing & campaigns.</li>
                </ul>
                <div className="service-icon purple">
                    <img src="./img/brandingMo.png" alt="Marketing" style={{width:'180px'}} />
                </div>
            </div>
            </Col>
        </Row>
    </Container>
</section>
); }; export default Services;