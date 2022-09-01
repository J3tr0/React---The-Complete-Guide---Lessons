import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
	return (
		<Card className="expenses">
			<ExpenseItem
				title={props.items.title}
				amount={props.items.amount}
				date={props.items.date}
			/>
		</Card>
	);
}

export default Expenses;
