from db_config import get_db_connection
from datetime import datetime


class Article:
    def __init__(self, title, content, author):
        self.title = title
        self.content = content
        self.author = author
        self.create_time = datetime.now().strftime("%Y-%m-%d %H:%M%:%S")


class ArticleManager:
    def __init__(self):
        self.conn = get_db_connection()

    def publish_article(self, title, content, author):
        cursor = self.conn.cursor()
        cursor.execute(
            "INSERT INTO articles (title, content, author) VALUES (%s, %s, %s)",
            (title, content, author),
        )
        self.conn.commit()
        print("Article published successfully")

    def view_all_articles(self):
        cursor = self.conn.cursor()
        cursor.execute("SELECT * FROM articles")
        articles = cursor.fetchall()
        if not articles:
            print("No articles to show")
            return
        for idx, article in enumerate(articles, start=1):
            print(f"{idx}. {article[1]} by {article[3]} on {article[4]}")

    def view_article(self, article_id):
        cursor = self.conn.cursor()
        cursor.execute("SELECT * FROM articles WHERE id = %s", (article_id))
        article = cursor.fetchone()
        if article:
            return {
                "title": article[1],
                "content": article[2],
                "author": article[3],
                "create_at": article[4],
            }
        else:
            print("Article not found")
            return None

    def delete_article(self, article_id):
        cursor = self.conn.cursor()
        cursor.execute("DELETE FROM articles WHERE id = %s", (article_id))
        self.conn.commit()
        print("Article deleted successfully")
