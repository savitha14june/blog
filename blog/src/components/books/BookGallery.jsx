import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "../BlogNav.jsx";
import bookData from './bookData.jsx';

const BookGallery = () => {
  return (

    <div>
      <Navbar />
      <Container fluid className="p-5" style={{ backgroundColor: '#f3f4f6' }}>
        <Row className="g-4 justify-content-center">
          
          {bookData.map((book, index) => (
            // The 'key' prop is essential for React when rendering a list.
            <Col key={index} xs={12} md={6} lg={4}>
              <Card style={{ width: '100%' }}>
                <Card.Img
                  variant="top"
                  src={book.image}
                  alt={book.title}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.author}</Card.Text>
                  <Card.Text>{book.review}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>

  );
};

export default BookGallery;
