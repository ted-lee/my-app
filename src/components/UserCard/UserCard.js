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
                    <Button size="mini" className={styles.allButton} >All</Button>
                    <List horizontal>
                        <List.Item as="a" href="https://www.facebook.com/">
                            <List.Content>
                                <Icon name="facebook f" link></Icon>
                            </List.Content>
                        </List.Item>
                        <List.Item as="a" href="https://www.instagram.com/">
                            <List.Content>
                                <Icon name="instagram" link></Icon>
                            </List.Content>
                        </List.Item>
                        <List.Item as="a" href="https://www.twitter.com/">
                            <List.Content>
                                <Icon name="twitter" link></Icon>
                            </List.Content>
                        </List.Item>
                        <List.Item as="a" href="https://www.youtube.com/">
                            <List.Content>
                                <Icon name="youtube" link></Icon>
                            </List.Content>
                        </List.Item>
                    </List>
                    <Button size="mini" className={styles.hideButton} onClick={() => { setHide(true) }}>Hide</Button>
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