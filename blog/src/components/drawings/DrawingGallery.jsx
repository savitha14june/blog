import React from 'react';
import Navbar from "../BlogNav";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import the image from the specified folder.
import drawing1 from "D:/anirudh/my_blog/blog/src/images/drawings/zentangle2025-08-10.jpeg";

const DrawingGallery = () => {
  // Create an array of drawing data.
  // For this example, we'll use a single object to represent the data.
  const drawingData = {
    title: 'Zentangle Drawing',
    description: 'An intricate zentangle pattern created on 2025-08-10.',
    image: drawing1
  };

  return (
    <div>
      <Navbar />
    <Container fluid className="p-5" style={{ backgroundColor: '#f3f4f6' }}>
      <Row className="g-4 justify-content-center">
        {/* Using Col to properly align the card in the grid */}
        <Col xs={12} md={6} lg={4}>
          <Card style={{ width: '100%' }}>
            {/* The image is placed at the top of the card */}
            <Card.Img 
              variant="top" 
              src={drawingData.image} 
              alt={drawingData.title}
            />
            {/* The Card.Body contains the title and description */}
            <Card.Body>
              <Card.Title>{drawingData.title}</Card.Title>
              <Card.Text>{drawingData.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default DrawingGallery;