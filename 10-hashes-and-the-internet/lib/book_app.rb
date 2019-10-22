require 'pry'
require 'rest-client'

class BookApp
  def run
    greet_user
    user_input = get_user_input
    concatenated_string = concatenate_string(user_input)
    url = construct_query_url(concatenated_string)
    response = make_api_call(url)
    response_hash = parse_response(response)
    books = extract_book_data(response_hash)
    print_books(books)
  end

  private

  def print_books(books)
    books.each do |book|
      puts book[:title]
      puts book[:authors]
      puts book[:year]
      puts '*' * 25
    end
  end
  
  def extract_book_data(response_hash)
    # h["items"][0]["volumeInfo"]["title"]
    # 1. iterate through items array
    # 2. get title, author, year into a new array
    
    response_hash['items'].map do |book|
      {
        title: book['volumeInfo']['title'],
        authors: book['volumeInfo']['authors'],
        year: book['volumeInfo']['publishedDate']
      }
    end
  end
  
  def parse_response(response)
    JSON.parse(response.body)
  end
  
  def make_api_call(url)
    RestClient.get(url)
  end
  
  def greet_user
    puts 'Welcome to Book App!!!'
  end

  def get_user_input
    puts 'What are you searching for?'
    gets.chomp
  end

  def concatenate_string(string)
    string.gsub(' ', '+')
  end

  def construct_query_url(string)
    "https://www.googleapis.com/books/v1/volumes?q=#{string}"
  end
end