from db_config import get_db_connection
from datetime import datetime


class Comment:
    def __init__(self, content, author, article_id):
        self.content = content
        self.author = author
        self.article_id = article_id
        self.create_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")


class CommentManager:
    def __init__(self):
        self.conn = get_db_connection()

    def add_comment(self, content, author, article_id):
        cursor = self.conn.cursor()
        cursor.execute(
            "INSERT INTO comments (content, author, article_id) VALUES (%s, %s, %s)",
            (content, author, article_id),
        )
        self.conn.commit()
        print("Comment added successfully")

    def view_comments(self, article_id):
        cursor = self.conn.cursor()
        cursor.execute("SELECT * FROM comments WHERE article_id = %s", (article_id))
        comments = cursor.fetchall()
        if not comments:
            print("No comments to show")
            return
        for idx, comment in enumerate(comments, start=1):
            print(f"{idx}. {comment[2]} said: {comment[1]} on {comment[4]}")
