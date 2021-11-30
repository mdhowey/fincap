import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import { Context } from '../../context/Context';

export default function Header() {

  const { dispatch, user } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  }

  return (
    <div className={classes.header}>
      <h1>FinCap</h1>
      {user &&
        <Link 
          className={classes.header__logout} 
          onClick={handleLogout}
          to='/'>
          logout
        </Link>
      }
    </div>
  )
};
