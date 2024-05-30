import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const Hosting = () => {
  const cards = [
    {
      tit:'Basic',
      description: 'for very small businesses and freelancers.',
      price:'$2.5/M=mo',
      specs: [
        'Disk Space: 500 M.B',
        'Bandwidth: 500 G.B',
        'SubDomains: Unlimited',
        'Parked Domains: Unlimited',
        'E-mail Accounts: Unlimited',
        'Cpanel (control panel): Yes',
        'Money Back Guarantee: 14 Days'
      ],
      buttonText: 'You will have 1 Gift',
      buttonVariant: 'outline-warning',
      headerColor: 'orange'
    },
    {
      tit:'Pro',
      description: 'for Individuals that need sharing vlogs or need huge portfolio.',
      price:'$2.5/mo',
      specs: [
        'Disk Space: 3000 M.B',
        'Bandwidth: 3 TERA',
        'SubDomains: Unlimited',
        'Parked Domains: Unlimited',
        'E-mail Accounts: Unlimited',
        'Cpanel (control panel): Yes',
        'Money Back Guarantee: 14 Days'
      ],
      buttonText: '1 Gift per/mo for year',
      buttonVariant: 'outline-danger',
      headerColor: 'purple'
    },
    {
      tit:'Business',
      description: 'for Team that need sharing and reporting.',
      price:'$8/mo',
      specs: [
        'Disk Space: 5000 M.B',
        'Bandwidth: 5 TERA',
        'SubDomains: Unlimited',
        'Parked Domains: Unlimited',
        'E-mail Accounts: Unlimited',
        'Cpanel (control panel): Yes',
        'Money Back Guarantee: 14 Days'
      ],
      buttonText: '3 Gifts per/mo for year',
      buttonVariant: 'outline-success',
      headerColor: 'green'
    },
    {
        tit:'Enterprice',
      description: 'for large companies that need admins & security.',
      price:'$12/mo',
      specs: [
        'Disk Space: 10000 M.B',
        'Bandwidth: 10 TERA',
        'SubDomains: Unlimited',
        'Parked Domains: Unlimited',
        'E-mail Accounts: Unlimited',
        'Cpanel (control panel): Yes',
        'Money Back Guarantee: 14 Days'
      ],
      buttonText: 'Just Call Us',
      buttonVariant: 'outline-primary',
      headerColor: 'blue'
    }
  ];

  return (
    <section className="pricing">
      <Container>
        <h2 className="pricing-title" style={{textAlign:'center',fontWeight:'600',marginBottom:'30px'}}>Hosting Pricing</h2>
        <Row>
          {cards.map((cards, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <Card className="h-100">
                <Card.Header className={`bg-${cards.headerColor} text-white`}>
                 
                </Card.Header>
                <Card.Body>
                 
                  <Card.Title style={{textAlign:'start',fontWeight:'700'}}>{cards.tit}</Card.Title>
                  <Card.Text style={{textAlign:'start' ,fontSize:'15px'}}>{cards.description}</Card.Text>
                  <p style={{textAlign:'start', fontWeight:'900',fontSize:'20px'}}>{cards.price}</p>
                  <ul>
                    {cards.specs.map((spec, idx) => (
                      <li style={{textAlign:'start',fontWeight:'bold'}}>{spec}</li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer>
                  <Button variant={cards.buttonVariant} className="w-100">
                    {cards.buttonText}
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        <p className="text-center mt-4">
          Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support. Go Online, choose your plan and Contact us on: 
          <a href="mailto:contact@focal-x.com"> contact@focal-x.com </a> | +963 935 033 139
        </p>
      </Container>
    </section>
  );
};

export default Hosting;
