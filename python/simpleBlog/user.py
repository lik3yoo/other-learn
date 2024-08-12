from db_config import get_db_connection


class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password

class UserManager:
    def __init__(self):
        self.conn = get_db_connection()

    def register(self, username, password):
        cursor = self.conn.cursor()
        try:
            cursor.execute(
                "INSERT INTO users (username, password) VALUES (%s, %s)",
                (username, password),
            )
            self.conn.commit()
            print("User registered successfully")
            return True
        except mysql.connctor.errors.IntegrityError:
            print("Username already exists")
            return False

    def login(self, username, password):
        cursor = self.conn.cursor()
        cursor.execute(
            "SELECT * FROM users WHERE username = %s AND password = %s",
            (username, password),
        )
        user = cursor.fetchone()
        if user:
            print("Login successful")
            return True
        else:
            print("Username does not exist or password is incorrent")
            return False

    def view_user(self, username):
        cursor = self.conn.cursor()
        cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
        user = cursor.fetchone()
        if user:
            return {"username": user[1], "password": user[2]}
        else:
            print("Username does not exist")
            return None
