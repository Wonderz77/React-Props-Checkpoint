import { Container, Row, Col } from 'react-bootstrap';
import Player from './Player';
import players from './players';

const PlayersList = () => {
  const containerStyle = {
    padding: '40px 20px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh'
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '40px',
    color: '#333',
    fontSize: '2.5rem',
    fontWeight: 'bold'
  };

  const playersContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px'
  };

  return (
    <Container fluid style={containerStyle}>
      <h1 style={titleStyle}>FIFA Players Showcase</h1>
      <div style={playersContainerStyle}>
        {players.map((player) => (
          <div key={player.id}>
            <Player {...player} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PlayersList;