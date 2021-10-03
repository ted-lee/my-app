import React, { useState } from 'react'
import {Header, List, Button, Icon} from 'semantic-ui-react';

import TaskTable from '../TermsTable';
import styles from './UserCard.module.css';

const UserCard = ({ data }) =>{
    const [hide, setHide] = useState(false);

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span>Card</span>
                <Icon name="question" size="small" color="grey" className={styles.question} />
            </div>

            {!hide &&
                <div className={styles.secondHeader}>
                    <List horizontal>
                        <List.Item icon="facebook f" />
                        <List.Item icon="instagram" />
                        <List.Item icon="twitter" />
                        <List.Item icon="youtube" />
                    </List>
                    <Button size="mini" onClick={() => { setHide(true) }}>Hide</Button>
                </div>
            }
            <div>
                <TaskTable data={data} contentHeight={hide ? '180px' : '150px'} />
            </div>
            <Header as="h3" block textAlign="center" className={styles.footer}>
                Footer
            </Header>
        </div>
    );
};

export default UserCard;