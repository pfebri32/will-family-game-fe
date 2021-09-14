import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './PickGames.module.css';

// Components
import Button from '../components/partials/Buttons/Button';
import Search from '../components/partials/Inputs/Search';

const PickGames = ({ games }) => {
  const [search, setSearch] = useState('');

  // Handlers
  const onSearchHandler = (e) => setSearch(e.target.value);

  // Renders
  const renderAvaibleGames = () =>
    games
      .filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()))
      .map(({ title }) => <Button>{title}</Button>);
  return (
    <div
      className="container-fluid screen flex-column"
      style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
    >
      <div>
        <div className={styles.title}>PICK A GAME</div>
        <div className="flex-column flex-center" style={{ marginTop: 15 }}>
          <Search
            placeholder="Search your game..."
            onChange={onSearchHandler}
          />
        </div>
        <div className="flex-column flex-center" style={{ marginTop: 15 }}>
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
