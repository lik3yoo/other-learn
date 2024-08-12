import os

class ToDoList:
	def __init__(self, filename="tasks.txt"):
		self.filename = filename
		self.tasks = []
		self.load_tasks()

	def add_task(self, task):
			self.tasks.append(task)
			self.save_tasks()

	def view_tasks(self):
			if not self.tasks:
				print("No tasks to show.")
				return
			for idx, task in enumerate(self.tasks, start=1):
				print(f"{idx}. {task}")

	def delete_task(self, task_number):
			if 0 < task_number <= len(self.tasks):
				self.tasks.pop(task_number - 1)
				self.save_tasks()
			else:
				print("Ivalid task number")

	def save_tasks(self):
			with open(self.filename, 'w') as file:
				for task in self.tasks:
					file.write(task + '\n')

	def load_tasks(self):
			if os.path.exists(self.filename):
				with open(self.filename, 'r') as file:
					self.tasks = [line.strip() for line in file]
			else:
				self.tasks = []