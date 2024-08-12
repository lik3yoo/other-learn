from todo import ToDoList

def display_menu():
	print("\nTO-DO List")
	print("1. Add task")
	print("2 View tasks")
	print("3. Delete task")
	print("4. Exit")

def main():
	todo_list = ToDoList()

	while True:
		display_menu()
		choice = input("Enter your choice: ")

		if choice == '1':
			task = input("Enter the task: ")
			todo_list.add_task(task)
		elif choice == '2':
			todo_list.view_tasks()
		elif choice == '3':
			task_number = int(input("Enter the task number to delete: "))
			todo_list.delete_task(task_number)
			print("Task deleted")
		elif choice == '4':
			print("Exiting program")
			break
		else:
			print("Invalid choice. Please try again")

if __name__ == "__main__":
	main()