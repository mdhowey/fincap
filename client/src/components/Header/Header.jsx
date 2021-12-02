import { Link } from 'react-router-dom';
import AuthFunc from '../AuthFunc/AuthFunc';
import classes from './Header.module.scss';

export default function Header() {

  return (
    <div className={classes.header}>
      <Link to='/'>
        <h1>FinCap</h1>
      </Link>
      <AuthFunc />
    </div>
  )
};
