import classes from './Footer.module.scss';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineLinkedin} from 'react-icons/ai';

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__btncont}>
        <BsGithub className={classes.footer__btncont__icon} />
        <AiOutlineLinkedin className={classes.footer__btncont__icon} />
      </div>
      <p>&copy; FinCap by devhowey</p>
    </div>
  )
}
