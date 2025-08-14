// Post2.js

import { Card } from "react-bootstrap";
import chess from "../images/chess.jpg";
import ChessGame from './ChessGame';

const Post2 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={chess}
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>Wanna play chess with me?</Card.Title>
                <Card.Text>
                    Start the game
                </Card.Text>                
                <ChessGame />
            </Card.Body>
        </Card>
    )
}

export default Post2;
