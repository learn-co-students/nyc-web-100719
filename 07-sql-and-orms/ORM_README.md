## Intro to ORM

## SWBATs

* [ ] Follow code that is organized into different files
* [ ] Define Object Relational Mapper (ORM)
* [ ] Explain how the `sqlite` gem works as a driver or wrapper around SQL
* [ ] Implement HEREDOCs to be saved in variables to be executed by SQL driver
* [ ] Perform persistent CRUD actions on a model
* [ ] Distinguish between ORM and SQL
* [ ] Demonstrate that ORMs are the pattern connecting scripting languages and databases
* [ ] Explain to a peer all the things that happen when we call `Tweet.all` (your answer should include when SQL is fired & when Ruby objects are created)

## Object Relational Mapper (ORM)

* a link between a SQL database and an OO programming language
* design pattern that maps DB Data into Ruby Objects
* table -> class
* row -> instance
* column -> attribute
* so we can use Ruby instead of SQL

## Domain Modeling and SQL Review

Draw out what your schema (structure of your tables and columns) would be for the following domains. Consider what tables are needed, what columns belong on which tables, and where the foreign keys belong.

1. Books and Authors where each book has a single author. Books should have a title and authors should have a name

#### Authors

| id | name            |
|----|-----------------|
| 1  | JK Rowling      | 
| 2  | Lemony Snickett |
| 3  | Stephen King    |
| 4  | Stephanie Meyer |
| 5  | Neil Gaiman     |
| 6  | Terry Pratchett |

#### Books

| id | title                       | author_id |
|----|-----------------------------|-----------|
| 1  | Harry Potter 1              | 1 |
| 2  | The first unfortunate event | 2 |
| 3  | Dark Tower                  | 3 |
| 4  | Breaking Dawn               | 4 |
| 5  | American Gods               | 5 |
| 6  | Disc World                  | 6 |
| 9  | Harry Potter 2              | 1 |



Q: Write the SQL to find all books written by a certain author given the author's id.
 
 author_id = 1

```sql
SELECT books.title
FROM books
WHERE books.author_id = 1;
```

```sql
SELECT books.title
FROM books
JOIN authors
ON books.author_id = author.id
WHERE authors.name = 'JK Rowling';
```

Q: Write the SQL to find all books written by a certain author given the author's name.


2. Books and Authors where each book can have one or multiple authors. Books should have a title and authors should have a name.

#### Authors

| id | name            |
|----|-----------------|
| 1  | JK Rowling      | 
| 2  | Lemony Snickett |
| 3  | Stephen King    |
| 4  | Stephanie Meyer |
| 5  | Neil Gaiman     |
| 6  | Terry Pratchett |


#### Book_authors

| id | author_id | book_id |
|----|-----------|---------|
| 1  | 1         | 1       |
| 2  | 2         | 2       |
| 3  | 5         | 10      |
| 4  | 6         | 10      |


#### Books

| id | title                       | 
|----|-----------------------------|
| 1  | Harry Potter 1              | 
| 2  | The first unfortunate event | 
| 3  | Dark Tower                  | 
| 4  | Breaking Dawn               | 
| 5  | American Gods               | 
| 6  | Disc World                  | 
| 9  | Harry Potter 2              | 
| 10 | Good Omens                  |

good_omens.authors = [<#Neil Gaiman>, <#Terry Pratchett>]

Q: Write the SQL to find all books written by a certain author given their name
author = Neil Gaiman

```sql
SELECT author.*
FROM books
JOIN book_authors
ON books.id = book_authors.book_id
JOIN authors
ON book_authors.author_id = authors.id
WHERE book.title = "Good Omens";
```


3. After completing the questions above, is there a rule you can determine about which table the foreign key belongs on given two associated tables?




# CRUD REVIEW
What are the four ways we can interact with data?

* Create  
SQL: 
Ruby: 


* Read  
SQL: 
Ruby: 


* Update  
SQL: 
Ruby: 


* Destroy  
SQL: 
Ruby: 
