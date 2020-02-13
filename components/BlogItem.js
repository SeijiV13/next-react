import Link from "next/link";
import { Button, Container, Row, Col } from 'react-bootstrap';
const BlogItem  = ( {blog, onClick} ) => {
    return (
      <div>
       <span>
            <Container>
              <Row>
                 <Col sm={4}><h3>{blog.title}</h3></Col>
                 <Col sm={4}><span>{blog.description}</span></Col>
                 <Col sm={4}>
                 <Button variant="primary" onClick={() => onClick({blog, action: "view"})} > View Blog</Button>
                 &nbsp;
                 <Button variant="primary" onClick={() => onClick({blog, action: "edit"})} > Edit Blog</Button>
                 &nbsp;
                 <Button variant="danger" onClick={() => onClick({blog, action: "delete"})}>Delete</Button>            
                 </Col>
              </Row>
            </Container>
      
       </span>
      </div>
    )
}

export default BlogItem;