import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './PickGames.module.css';

// Components
import Search from '../components/partials/Inputs/Search';

const PickGames = ({ games }) => {
  const [search, setSearch] = useState('');

  // Handlers
  const onSearchHandler = (e) => setSearch(e.target.value);

  // Renders
  const renderAvaibleGames = () =>
    games
      .filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()))
      .map(({ title }, index) => (
        <Link key={index} className={styles.button} to="/">
          {title}
        </Link>
      ));
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.title}>PICK A GAME</div>
      <div className={styles.content}>
        <Search
          placeholder="Search the game..."
          style={{ marginTop: '1.5rem' }}
          onChange={onSearchHandler}
        />
        <div className={styles.games} style={{ marginTop: '1.5rem' }}>
          {renderAvaibleGames()}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  games: state.games,
});

export default connect(mapStateToProps)(PickGames);
