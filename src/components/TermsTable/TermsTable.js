import React from 'react'
import { Divider } from 'semantic-ui-react';
import ProgressBar from '../ProgressBar';
import styles from './TermsTable.module.css';

const genBodyRow = (term) => {
    return (
        <tr>
            <td style={{ textAlign: 'left' }}>{term.name}</td>
            <td style={{ textAlign: 'center' }}><ProgressBar completed={term.count}/></td>
            <td style={{ textAlign: 'left' }}>{term.count}</td>
        </tr>
    );
}

const genBody = (terms, contentHeight = '150px') => {
    const rows = terms.map((term) => {
        return genBodyRow(term);
    })

    return (
        <tbody>
            <tr><td colSpan={3}><Divider /></td></tr>
            {rows}
        </tbody>
    );
}

const TermsTable = ({ data, contentHeight }) => {
    return (
        <>
            <div className={styles.header}>Top Terms</div>
            <div className={styles.tableWrapper}>
                <div className={styles.tableScroll} style={{ height: contentHeight}}>
                    <table>
                        <thead>
                        <tr>
                            <th><span className={styles.text} style={{ textAlight: 'left'}}>TERMS</span></th>
                            <th><span className={styles.text} style={{ textAlight: 'center'}}>% OF TOTAL POSTS</span></th>
                            <th><span className={styles.text} style={{ textAlight: 'right'}}># OF POSTS</span></th>
                        </tr>
                        </thead>
                        {genBody(data)}
                    </table>
                </div>
            </div>
        </>
    );
};

export default TermsTable;