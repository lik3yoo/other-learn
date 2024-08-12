from user import UserManager
from article import ArticleManager
from comment import CommentManager


def display_main_menu():
    print("\n Simple Blog Platform")
    print("1. Register")
    print("2. Login")
    print("3. Exit")


def display_user_menu():
    print("\nUser Menu")
    print("1. Publish Article")
    print("2. View All Articles")
    print("3. View Single Article")
    print("4. Edit Article")
    print("5. Delete Article")
    print("6. Add Comment")
    print("7. View Comments")
    print("8. Logout")


def main():
    user_manager = UserManager()
    article_manager = ArticleManager()
    comment_manager = CommentManager()

    current_user = None

    while True:
        if not current_user:
            display_main_menu()
            choice = input("Enter your choice")

            if choice == "1":
                username = input("Enter username: ")
                password = input("Enter password: ")
                user_manager.register(username, password)
            elif choice == "2":
                username = input("Enter username: ")
                password = input("Enter password: ")
                if user_manager.login(username, password):
                    current_user = username
            elif choice == "3":
                print("Exiting program")
                break
            else:
                print("Invalid choice, please try again")
        else:
            display_user_menu()
            choice = input("Enter your choice: ")

            if choice == "1":
                title = input("Enter article title: ")
                content = input("Enter article content")
                article_manager.publish_article(title, content, current_user)
            elif choice == "2":
                article_manager.view_all_articles()
            elif choice == "3":
                article_id = int(input("Enter article number to view: "))
                article = article_manager.view_article(article_id)
                if article:
                    print(
                        f"\nTitle: {article['title']}\nContent: {article['content']}\nAuthor: {article['author']}\nDate: {article['created_at']}"
                    )
            elif choice == "4":
                article_id = int(input("Enter article number to edit: "))
                title = input("Enter new title: ")
                content = input("Enter new content")
                article_manager.edit_article(article_id, title, content)
            elif choice == "5":
                article_id = int(input("Enter article number to delete: "))
                article_manager.delete_article(article_id)
            elif choice == "6":
                article_id = int(input("Enter article number to comment on: "))
                content = input("Enter comment content: ")
                comment_manager.add_comment(content, current_user, article_id)
            elif choice == "7":
                article_id = int(input("Enter article number to view comments: "))
                comment_manager.view_comments(article_id)
            elif choice == "8":
                current_user = None
                print("Logged out")
            else:
                print("Invalid choice. please try again")


if __name__ == "__main__":
    main()
