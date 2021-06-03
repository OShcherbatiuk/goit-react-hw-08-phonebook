import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  email: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, email, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.email}>Здравствуйте, {email}</span>
    <button type="button" onClick={onLogout}>
      Выйти
    </button>
  </div>
);
const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
