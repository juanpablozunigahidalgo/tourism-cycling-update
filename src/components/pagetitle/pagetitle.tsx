import React from 'react';

const styles = {
  textDiv: {
    color: 'black',
    backgroundColor: 'white',
    paddingLeft: '2rem',
    fontFamily: 'Consolas',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 600,
    marginBottom: '2%',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginTop: '2%',
  },
};

const TourismCycling: React.FC = () => {
  return (
    <div style={styles.textDiv}>
      <h1 style={styles.title}>Tourism Cycling</h1>
      {/* <h3 style={styles.subtitle}>Tools for touring cyclists.</h3> */}
    </div>
  );
};

export default TourismCycling;