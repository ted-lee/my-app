import UserCard from '../../components/UserCard';
import styles from './CardPage.module.css';
import data from './data';

export default function CardPage() {
    return (<div className={styles.cardPage}> <UserCard data={data} /> </div>);
}
