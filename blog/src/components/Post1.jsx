// Post1.js

import { Card } from "react-bootstrap";
import logo from "../images/logo.jpeg";
import '../styles.css';

const Post1 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={logo}
                width={50}
                height={500}               
            />
            
            <Card.Body>
                <Card.Title>ME</Card.Title>
                <Card.Text>
                    <b>Name:</b> Anirudh <br />
                    <b>Age:</b> 11 <br />
                    <b>Status:</b> Currently online and probably mid-game<br />
                    <b>About Me:</b> I’m 11 and living the good life—gaming, snacking.<br />
                    I also like hanging out, reading books..
                    <br /><br />
                     <b>Things I Like:</b>
                     
                                     
                    <br /><br />
                     <b>Things I Don’t Like: </b>      
                                
                    
                    <br /><br />
                     <b>Future Plans:</b>
                     

                </Card.Text>
                <a href="#" className="btn btn-primary">To more about me..</a>
            </Card.Body>
        </Card>
    );
};

export default Post1;
