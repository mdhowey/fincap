import classes from './Footer.module.scss';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineLinkedin} from 'react-icons/ai';

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__btncont}>
        <a href='https://github.com/mdhowey' target='blank'><BsGithub className={classes.footer__btncont__icon} /></a>
        <a href='https://www.linkedin.com/in/dev-howey/' target='blank'><AiOutlineLinkedin className={classes.footer__btncont__icon} /></a> 
      </div>
      <p>&copy; FinCap by devhowey</p>
    </div>
  )
}
