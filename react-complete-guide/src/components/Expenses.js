import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
	return (
		<div className="expenses">
			<ExpenseItem
				title={props.items.title}
				amount={props.items.amount}
				date={props.items.date}
			/>
		</div>
	);
}

export default Expenses;
