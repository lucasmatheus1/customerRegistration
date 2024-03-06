import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import './index.css'; // Importe o arquivo CSS aqui

function AppSidebar() {
  return (
    <Container fluid className="p-0">
      <Nav defaultActiveKey="/" className="flex-column sidebar">
        <Nav.Link href="/">Início</Nav.Link>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/logout">Sair</Nav.Link>
      </Nav>
    </Container>
  );
}

export default AppSidebar;