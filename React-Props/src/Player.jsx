import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  const cardStyle = {
    width: '18rem',
    margin: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease-in-out',
    borderRadius: '10px',
    overflow: 'hidden'
  };

  const imageStyle = {
    height: '300px',
    objectFit: 'cover'
  };

  const textStyle = {
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '8px'
  };

  const badgeStyle = {
    display: 'inline-block',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '12px',
    marginRight: '5px',
    marginBottom: '5px'
  };

  return (
    <Card style={cardStyle} className="player-card">
      <Card.Img variant="top" src={image} style={imageStyle} alt={name} />
      <Card.Body>
        <Card.Title style={{ ...textStyle, fontSize: '1.5rem' }}>
          {name}
        </Card.Title>
        <div style={{ marginBottom: '10px' }}>
          <span style={badgeStyle}>#{jerseyNumber}</span>
        </div>
        <Card.Text style={textStyle}>
          Team: <span style={{ color: '#007bff' }}>{team}</span>
        </Card.Text>
        <Card.Text style={textStyle}>
          Nationality: <span style={{ color: '#28a745' }}>{nationality}</span>
        </Card.Text>
        <Card.Text style={textStyle}>
          Age: <span style={{ color: '#ff6b6b' }}>{age}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  jerseyNumber: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  image: 'https://via.placeholder.com/400x500?text=No+Image'
};

export default Player;