import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="text-center">
        <Col>
          <h1>Welcome to My Store</h1>
          <div className="mt-4">
            <Button variant="primary" onClick={handleLogin} className="mr-2">
              Login
            </Button>
            <Button variant="secondary" onClick={handleRegister}>
              Register
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
