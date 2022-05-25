import React from 'react';
import styles from './TaskContainers.module.css';

export const NewTaskContainer = (props) => {
	const handleFormChange = (evt) => {
		props.funcs.updateInputText(evt.target.value);
	};

	const handleDateInput = (evt) => {
		props.funcs.setNewTaskDate(evt.target.value);
	};

	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		props.funcs.setNewTask();
	};

	return (
		<>
			{/* блок с новыми заданиямм */}
			<div className={styles.taskContainer}>
				<span className={styles.taskTitle}>Новые задания</span>
				<form onSubmit={handleFormSubmit} className={styles.newInput}>
					<div
						contentEditable
						value={props.newInput}
						onChange={handleFormChange}
						id={styles.newTaskInput}
					/>
					<div className={styles.taskFooter}>
						<div className={styles.taskDate}>
							<input
								type='date'
								value={props.newDateInput}
								min={new Date().toISOString().split('T')[0]}
								onInput={handleDateInput}
							/>
						</div>
						<div className={styles.taskBtns}>
							<button type='submit'>{/*{props.statics.img.addBtn}*/}+</button>
						</div>
					</div>
				</form>
				<ul className={styles.taskList}>
					{/* генерация блоков по шаблону */}
					{props.state.newTasks.map((task) => {
						return (
							<li key={task.id} className={styles.task}>
								<div className={styles.taskContent}>{task.content}</div>
								<div className={styles.taskFooter}>
									<div className={styles.taskDate}>{task.date}</div>
									<div className={styles.taskBtns}>
										<button>{props.statics.img.doneBtn}</button>
										<button>{props.statics.img.delBtn}</button>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export const CompletedTaskContainer = (props) => {
	return (
		<>
			{/* блок с выполненными заданиями */}
			<div className={styles.taskContainer}>
				<span className={styles.taskTitle}>Выполненные</span>
				{/* генерация блоков по шаблону */}
				<ul className={styles.taskList}>
					{props.state.completedTasks.map((task) => {
						return (
							<li key={task.id} className={styles.task}>
								<div className={styles.taskContent}>{task.content}</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export const FailedTasksContainer = (props) => {
	return (
		<>
			{/* блок с просроченными заданиями */}
			<div className={styles.taskContainer}>
				<span className={styles.taskTitle}>Просроченные</span>
				{/* генерация блоков по шаблону */}
				<ul className={styles.taskList}>
					{props.state.failedTasks.map((task) => {
						return (
							<li key={task.id} className={styles.task}>
								<div className={styles.taskContent}>{task.content}</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};
