// Get Elements
const expenseForm = document.getElementById('expense-form');
const expenseTable = document.getElementById('expense-table');
const totalAmount = document.getElementById('total');

// Initialize Expenses Array
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Display Expenses
const displayExpenses = () => {
  expenseTable.innerHTML = '';
  let total = 0;
  expenses.forEach((expense, index) => {
    total += parseFloat(expense.amount);
    const expenseItem = document.createElement('div');
    expenseItem.classList.add('expense-item');
    expenseItem.innerHTML = `
      <span>${expense.name}</span>
      <span>$${expense.amount}</span>
      <span>${expense.date}</span>
      <span>${expense.category}</span>
      <button class="edit-btn" onclick="editExpense(${index})">Edit</button>
      <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
    `;
    expenseTable.appendChild(expenseItem);
  });
  totalAmount.textContent = total.toFixed(2);
};

// Add Expense
expenseForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('expense-name').value;
  const amount = document.getElementById('expense-amount').value;
  const date = document.getElementById('expense-date').value;
  const category = document.getElementById('expense-category').value;

  const newExpense = { name, amount, date, category };
  expenses.push(newExpense);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  displayExpenses();
  expenseForm.reset();
});

// Edit Expense
function editExpense(index) {
  const expense = expenses[index];
  document.getElementById('expense-name').value = expense.name;
  document.getElementById('expense-amount').value = expense.amount;
  document.getElementById('expense-date').value = expense.date;
  document.getElementById('expense-category').value = expense.category;

  expenses.splice(index, 1);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  displayExpenses();
}

// Delete Expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  displayExpenses();
}

// Initial Display
displayExpenses();
