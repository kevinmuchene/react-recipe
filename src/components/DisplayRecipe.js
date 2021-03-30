import React from "react";
import { Card, Accordion, Button, CardDeck } from "react-bootstrap";

const DisplayRecipe = ({ title, image, ingredientLines, calories }) => {
  return (
    <div>
      <CardDeck>
        <Card className="card">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title className="title">{title}</Card.Title>
            <h6>Calories: {Math.floor(calories)}</h6>
            <Card.Text>
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Check recipe
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <ol>
                        {ingredientLines.map((ingredient) => (
                          <li>{ingredient}</li>
                        ))}
                      </ol>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}; //end DisplayRecipe

export default DisplayRecipe;
