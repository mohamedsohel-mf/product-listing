import React from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import ProductContainer from "../container/ProductsContainer";
import ErrorBoundary from "../components/common/ErrorBundry";

function App() {
  return (
    <Container fluid className="vert-align">
      <Row>
        <Col
          sm="12"
          md={{ size: 10, offset: 1 }}
        >
          <Header />
          <ErrorBoundary>
            <ProductContainer />
            <Footer />
          </ErrorBoundary>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
