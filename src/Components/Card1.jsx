import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../resources/cards.css';


var Data = require('../resources/metadata_hexnftcontract.json');
function Card1() {
  return (
    <Row xs={1} md={1} className="g-4">
      {
        Data['nfts'].map(data => {
          return (
            <div className='card_item'>
            <Row xs={1} md={1} className="g-4">
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src={data.image} />
                    <Card.Body>
                      <Card.Title>{data.name}</Card.Title>
                      <Card.Text>
                        {data.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            </div>
          );
        }

        )
      }
    
    </Row>
    
  );
}

export default Card1;