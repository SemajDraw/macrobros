import React from 'react';
import styles from '../styles/Index.module.scss';
import { useDispatch } from 'react-redux';

export const Index = () => {
	return (
		<div>
			<h1 className={styles.title}>This is the new homepage</h1>
			<hr />
		</div>
	);
};

// export const getServerSideProps = async () => {
// 	const dispatch = useDispatch();
//
// };

export default Index;
