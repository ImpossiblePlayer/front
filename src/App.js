import React, { useEffect, useState } from 'react';

import styles from './App.module.css';

const App = (props) => {
	const [newTasks, setNewTasks] = useState([]);
	const [completedTasks, setCompletedTasks] = useState([]);
	const [failedTasks, setFailedTasks] = useState([]);
	const [newInput, setNewInput] = useState({
		content: '',
		date: new Date().toISOString().split('T')[0],
	});

	useEffect(() => {
		fetch('/api/returntasks')
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((data) => {
				data.map(() => {
					setNewTasks(data.new_tasks);
					setCompletedTasks(data.completed_tasks);
					setFailedTasks(data.failed_tasks);
				});
			});
	}, []);

	// функция для создания нового задания
	useEffect(() => {
		if (newInput) {
			fetch('/api/create', {
				method: 'POST',
				body: JSON.stringify({
					content: newInput,
					date: 1,
				}),
				headers: { 'Content-type': 'application/json; charset=UTF-8' },
			})
				.then((response) => response.json)
				.then((msg) => {
					console.log(msg);
					newTaskInput = {
						content: '',
						date: new Date().toISOString().split('T')[0],
					};
				});
			setNewInput('');
		}
	}, []);

	return (
		<>
			<header />
			<main>
				{/* блок с новыми заданиямм */}
				<NewTaskContainer tasks={newTasks} newInput={newInput} />
				<CompletedTaskContainer tasks={completedTasks} />
				<FailedTasksContainer tasks={failedTasks} />
			</main>
		</>
	);
};

export default App;
