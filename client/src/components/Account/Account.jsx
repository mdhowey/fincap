import classes from './Account.module.scss';
import axios from 'axios';
import { useEffect, useState} from 'react'; 

export default function Account() {
  
  const [user, setUser] = useState('');
  const url = 'http://localhost:5000/api/users/61a7270abe55d4736aff16c4'

  const getUser = async () => {

    try {
      const user = await axios.get(url);
      const username = setUser(user.data.username);
      // res.status(201).json(user);
      return username;
    } catch (err) {
      console.log(err);
      // res.status(500).json(err)
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  console.log(`The username is: ${user}`)
  
  return (
    <li className={classes.acct}>
      <p className={classes.acct__acctName}>{user}</p>
      <p className={classes.acct__balance}>{user}</p>
    </li>
  )
}
