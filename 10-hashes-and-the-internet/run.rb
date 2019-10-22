require_relative './lib/book_app'

# url = "https://www.googleapis.com/books/v1/volumes?q=ruby+programming"

=begin

DELIVERABLES

Create a CLI that asks a user for a search term and then returns a list of books from the Google books API.

Steps:
1. √Welcome the user
2. √Promt the user - "What books do you want to search"
3. √Store their response
4. √Parse it and turn it into a query string
5. √Pass the query string to the API
6. √Store the results of the API call
7. √Parse JSON into a hash
8. √Extract book data out of the hash - title, author, year
9. √Render to the screen in some pretty way 


=end

my_app = BookApp.new
my_app.run