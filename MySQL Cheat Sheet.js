/*
❤️❤️❤️ MySQL ❤️❤️❤️



Chapter 1 : Introduction   ✌️

  ⭕ What is Database ?

   👉 A database is a collection of data stored in a format that can easily be accessed.

   👉 MySQL is a database management system (DBMS).

   👉 MySQL is a relational database management system (RDBMS).

   👉 RDBMS use Structured Query Language(SQL)


  ⭕ Advantage of MySQL

   1️⃣ Cross Platform.
   
   2️⃣ Used with multiple languages.

   3️⃣ MySQL software is Open Source.

   4️⃣ MySQL is RDBMS.

   5️⃣ MySQL database server is fast, reliable, scalable and easy to use.

   6️⃣ MySQL server works in client/server or embedded systems.


   ♻️ Client => RDBMS => Database.



Chapter 2 : Installing MySQL  ✌️

  ⭕ MySQL Community Server / XAMPP / Tomcat

  ⭕ MySQL Workbench / DataGrip

  

Chapter 3 : Create Database   ✌️

  #️⃣ Create Database 

    Syntax :  🌿

      ✒️ CREATE DATABASE database_name;

  #️⃣ Use Specific_Database 

    Syntax :  🌿

      ✒️ use specific_database_name;



Chapter 4 : Datatype   ✌️

  #️⃣ Datatype

    ⭕ 3 types of category in Datatype:

      1️⃣ String

        👉 CHAR(size) => 0 - 255 CH

        👉 VARCHAR(size) => 0 - 65535 CH

        👉 BINARY(size) => 0 - 255 

        👉 VARBINARY(size) => 0 - 65535

        👉 TINYTEXT => 255 CH

        👉 TEXT(size) => 65,535 bytes

        👉 MEDIUMTEXT(size) => 16,777,215 CH

        👉 LONGTEXT(size) => 4,294,967,295 CH

        👉 TINYBLOB => 255 bytes

        👉 BLOB => 65,535 bytes

        👉 MEDIUMBLOB => 16,777,215 bytes

        👉 LOGNBLOB => 4,294,967,295 bytes

        👉 ENUM(var1, var2, var3, ...) => list up to 65535 values

        👉 SET(var1, var2, var3, ...) => list up to 64 values


      2️⃣ Numeric

        👉 BIT(size) => 1 to 64

        👉 TINYINT(size) => -128 to 127

        👉 INT(size) => -2147483648 to 2147483648

        👉 INTEGER(size) => -2147483648 to 2147483648

        👉 SMALLINT(size) => -32768 TO 32767

        👉 MEDIUMINT(size) => -8388608 TO 8388607

        👉 BIGINT(size) => -9223372036854775808 TO 9223372036854775807

        👉 BOOL => 0 / 1

        👉 BOOLEAN => 0 / 1

        👉 FLOAT(p) => both side same 

        👉 DOUBLE(size, d) => total, after point 

        👉 DECIMAL(size, d) => size = 60, d = 30

        👉 DEC(size, d) => size = 60, d = 30

        
      3️⃣ Data and Time

        👉 DATE(yyyy-mm-dd) => '1000-01-01' to '9999-12-31'

        👉 DATETIME(yyyy-mm-dd hh:mm:ss)

        👉 TIMESTAMP(yyyy-mm-dd hh:mm:ss) 

        👉 TIME(hh:mm:ss) 

        👉 YEAR(yyyy) 



Chapter 5 : Table   ✌️

  #️⃣ Create Table 
  
    Syntax :  🌿

    ✒️CREATE TABLE table_name(
        column1 datatype,
        column2 datatype,
        column3 datatype,
        ...
      );


  #️⃣ Show Table

    Syntax :  🌿

    ✒️ show tables;

  
  #️⃣ Insert Data Into Table 

    Syntax :  🌿

    ✒️INSERT INTO table_name(col1,  col2, ...)
      VALUES(value1, value2, value3, ...);


    👉 values must be same order as columns.

    👉 If we want to insert all columns values then we can ignore to define columns.


  ⭕ Insert Multiple Rows 

    Syntax :  🌿

    ✒️INSERT INTO table_name(col1, col2, col3)
      VALUES
      (val1, val2, val3,...),
      (val1, val2, val3,...),
      (val1, val2, val3,...);
    



Chapter 6 : Constraints   ✌️
  
  #️⃣ List of Constraints 

    1️⃣ NOT NULL
    
    2️⃣ UNIQUE

    3️⃣ DEFAULT

    4️⃣ CHECK

    5️⃣ PRIMARY KEY

    6️⃣ FOREIGN KEY


  👉 All constraints, we can declare when TABLE will be create.


  Syntax :  🌿

  ✒️CREATE TABLE table_name (
      col_name datatype constraint constraint ...
    );

  
  Example :  📝

  CREATE TABLE teacher_info(
    id int NOT NULL UNIQUE,
    name varchar(20) NOT NULL ,
    gender varchar(10) NOT NULL,
    age int NOT NULL CHECK ( age >=40 ),
    phone varchar(11) UNIQUE,
    city varchar(20) DEFAULT 'Dhaka'
  );


  ⚠️ PRIMARY KEY & FOREIGN KEY will learn later.




Chapter 7 : SELECT   ✌️

  👉 SELECT command used for displaying our TABLE's data.

  Syntax :  🌿

    ⭕ Displaying Specific Columns 

    ✒️ SELECT col1, col2, col3, ... FROM table_name;


    ⭕ Displaying All Columns

    ✒️ SELECT * FROM table_name;


    ⭕ Displaying With Alias_Name

    ✒️ SELECT col1 AS anything, col2 AS 'any words', col3, ... FROM table_name;
  


  #️⃣ Displaying TABLE's Data Through Condition (WHERE)

    ⭕ WHERE Comparison Operators

      👉 =   =>   Equal

      👉 >   =>   Greater Than

      👉 >   =>   Less Than

      👉 >=  =>   Greater Than or Equal

      👉 <=  =>   Less Than or Equal

      👉 !=  =>   Not Equal

      👉 BETWEEN .. AND ..  =>  Between A Certain Range

      👉 LIKE  =>  Search For A Pattern

      👉 IN  =>  To Specify Multiple Possible Values For A Column
      

    Syntax :  🌿

    ✒️SELECT col1, col2, ... FROM table_name
      WHERE condition;


    Example :  📝

    SELECT *
    FROM student_info
    WHERE gender = 'male';


  ⚠️ BETWEEN .. AND .., LIKE, IN will learn later.




Chapter 8 : AND, OR, NOT   ✌️

  ⭐ Those operator are used with SELECT, INSERT, UPDATE & DELETE clause.


  Syntax :  🌿

  ✒️SELECT * FROM table_name
    WHERE condition1 OPERATOR condition2 OPERATOR condition3 ...; 
  
  
  Example :  📝

  SELECT *
  FROM teacher_info
  WHERE NOT ((age > 40 OR gender = 'male') AND city = 'Dhaka');

  
  ⭐ Even NOT operator also used with :

    👉 NOT NULL

    👉 NOT BETWEEN .. AND ..

    👉 NOT LIKE

    👉 NOT IN

    👉 NOT EXISTS



Chapter 9 : IN   ✌️

  Syntax :  🌿
  
    ⭕ IN operator
  
    ✒️SELECT col1, col2, ... FROM table_name    
      WHERE column_name IN (value1, value2, ...);


    ⭕ NOT IN operator

    ✒️SELECT col1, col2, ... FROM table_name  
      WHERE column_name NOT IN (value1, value2, ...);


  Example :  📝

  SELECT * FROM student_info
  WHERE name NOT IN ('tangil',...);




Chapter 10 : BETWEEN .. AND ..   ✌️ 

  👉 When want to define range condition then we can used BETWEEN .. AND .. operator.

 
  Syntax :  🌿

    ⭕ BETWEEN .. AND .. 
  
    ✒️SELECT * FROM table_name
      WHERE column_name BETWEEN value1 AND value2;

    ⭕ NOT BETWEEN .. AND .. 

    ✒️SELECT * FROM table_name
      WHERE column_name NOT BETWEEN value1 AND value2;

    
  Example :  📝

  SELECT * FROM practice
  WHERE age NOT BETWEEN 18 and 21;


  SELECT * FROM practice
  WHERE name NOT BETWEEN 'b' and 'm';

  👉 Find-out those name which are start with between b to m character.
  



Chapter 11 : LIKE   ✌️

  👉 LIKE operator mainly used for searching data.


  #️⃣ WildCard Characters :

    ⭕ %  => Represents anything

    ⭕ _  => Represents skip single character.


  Example :  📝

    👉 LIKE 'a%'  => Start with 'a' after that anything

    👉 LIKE '%a'  => End with 'a' after that anything

    👉 LIKE '%am%'  => Have 'am' in any position

    👉 LIKE 'a%m'  => Start with 'a' and End with 'm'

    👉 LIKE '_a%'  => 'a' in the second position

    👉 LIKE '__a%'  => 'a' in the third position

    👉 LIKE '_am'  => 'a' in the second position and 'm' in the third position


  Syntax :  🌿

  ⭕ LIKE operator
  
  ✒️SELECT col1, col2, ... FROM table_name
    WHERE column_name LIKE pattern;


  ⭕ NOT LIKE operator

  ✒️SELECT col1, col2, ... FROM table_name
    WHERE column_name NOT LIKE pattern;


  ⭕ LIKE operator with case-sensitive

  ✒️SELECT col1, col2, ... FROM table_name
    WHERE BINARY column_name LIKE pattern;

  👉 Same procedure apply with NOT LIKE operator.
  
 
  Example :  📝

  SELECT * FROM practice
  WHERE name NOT LIKE '__m%' OR name LIKE 'a%';

  SELECT * FROM practice
  WHERE phone  LIKE '017%' AND phone LIKE '%85';




Chapter 12 : SELECT With Regular Expression   ✌️

  #️⃣ Regular Expression Patterns

    👉 'word'  =>  'word'  =>  Anywhere In Any String

    👉 ^  =>  '^ra'  =>  Beginning of String

    👉 $  =>  'man$'  =>  End of String

    👉 [...]  =>  '[rms]'  =>  Any character listed between the square brackets (separately)

    👉 ^[...]  =>  '^[rms]'  =>  Begins with any character listed between the square brackets

    👉 [a-z]  => '[a-h]e'  =>  Match with in the range which 'e' in the 2nd position

    👉 v1|v2|v3|...  =>  tangil|tom|jerry  =>  Matches any of the patterns.(| like OR operator)
    

  Syntax :  🌿

  ⭕ REGEXP
  
  SELECT col1, col2, ... FROM table_name
  WHERE column_name REGEXP pattern;


  ⭕ NOT REGEXP

  SELECT col1, col2, ... FROM table_name
  WHERE column_name NOT REGEXP pattern;

  
  Example :  📝

  SELECT * FROM practice
  WHERE name REGEXP 'ta';
  
  SELECT * FROM practice 
  WHERE name REGEXP '^ta';

  SELECT * FROM practice
  WHERE name REGEXP 'ta$';

  SELECT * FROM practice
  WHERE name REGEXP 'tangil|sago';

  SELECT * FROM practice
  WHERE name REGEXP '^tangil|sago%';

  SELECT * FROM practice
  WHERE name REGEXP '[tsa]';

  SELECT * FROM practice
  WHERE name REGEXP '[ts]a';

  SELECT * FROM practice
  WHERE name REGEXP 'a[ts]a';

  SELECT * FROM practice
  WHERE name REGEXP '^[ts]';

  SELECT * FROM practice
  WHERE name REGEXP '[ts]$';

  SELECT * FROM practice
  WHERE name REGEXP '[a-m]';

  SELECT * FROM practice
  WHERE name REGEXP 't[a-m]';

  SELECT * FROM practice
  WHERE name REGEXP '[a-m]t';


  👉 All procedure also apply with NOT REGEXP.

 


Chapter 13 : ORDER BY & DISTINCT   ✌️

  #️⃣ ORDER BY

    👉 ORDER BY clause mainly used for sorting.

  
  Syntax :  🌿

  ⭕ Without Condition
  
  ✒️SELECT col1, col2, ... FROM table_name
    ORDER BY col1, col2, ... ASC | DESC;


  ⭕ With Condition

  ✒️SELECT col1, col2, ... FROM table_name
  WHERE condition
    ORDER BY col1, col2, ... ASC | DESC;


  🎈 ASC   =>  Ascending

  🎈 DESC  =>  Descending

  ⭐ ASC is Default


  Example :  📝

  SELECT * FROM practice
  ORDER BY name,age;

  SELECT * FROM practice
  ORDER BY name,age DESC;


  #️⃣ DISTINCT

    👉 DISTINCT clause mainly used for removing duplicates.

  Syntax :  🌿

  SELECT DISTINCT col1, col2, ... FROM table_name;


  Example :  📝

  SELECT DISTINCT city FROM practice;




Chapter 14 : IS NULL & IS NOT NULL   ✌️

  👉 IS NULL  =>  for finding empty fields 

  👉 IS NOT NULL  =>  for finding fill-up fields


  Syntax :  🌿

  ⭕ IS NULL
  
  ✒️SELECT col1, col2, ... FROM table_name
    WHERE column IS NULL;


  ⭕ IS NOT NULL

  ✒️SELECT col1, col2, ... FROM table_name
    WHERE column IS NOT NULL;


  Example :  📝

  SELECT * FROM practice
  WHERE city IS NULL;

  SELECT * FROM practice
  WHERE name IS NOT NULL;




Chapter 15 : LIMIT & OFFSET   ✌️

  #️⃣ LIMIT

    👉 LIMIT clause used for displaying limited data.

  
  Syntax :  🌿

  SELECT col1, col2, ... FROM table_name
  WHERE column condition
  LIMIT number;

  
  👉 Here WHERE clause is OPTIONAL


  Example :  📝

  SELECT * FROM practice
  WHERE city = 'DHAKA'
  LIMIT 3;


  #️⃣ OFFSET

    👉 OFFSET define starting position.


  Syntax :  🌿

  SELECT col1, col2, ... FROM table_name
  WHERE column condition
  LIMIT offset_number, limit_number;


  👉 Here WHERE clause is OPTIONAL


  Example :  📝

  SELECT * FROM practice
  WHERE city = 'DHAKA'
  LIMIT 2,5;




Chapter 16 : Aggregate Function   ✌️

  #️⃣ List of Aggregate Function

    👉  COUNT(column_name)  =>  for getting total fields 

    👉 MAX(column_name)  =>  for getting maximum value

    👉 MIN(column_name)  =>  for getting minimum value

    👉 SUM(column_name)  =>  for getting total sum value

    👉 AVG(column_name)  =>  for getting average value



  Syntax :  🌿

  SELECT Aggregate_function(column_name), col1, col2, ... FROM table_name
  WHERE condition;


  👉 Here WHERE clause is OPTIONAL


  Example :  📝

  SELECT COUNT(name) FROM practice;

  SELECT COUNT(name) AS Name FROM practice;

  SELECT COUNT(DISTINCT City) AS Name FROM practice;

  SELECT MAX(score) AS Maximum FROM practice;

  SELECT MAX(score) AS Minimum FROM practice;

  SELECT AVG(score) AS Average FROM practice;

  SELECT SUM(score) AS Total FROM practice;




Chapter 17 : UPDATE   ✌️

  👉 UPDATE clause used for updating columns values


  Syntax :  🌿

  UPDATE table_name
  SET column1_name = value1, column2_name = value1, ...
  WHERE condition;


  ⭐ If we don't define condition then it will be applied all columns in that table


  Example :  📝

  UPDATE practice
  SET name = 'Runa', age = 22, city='Narsingdi' gender = 'female'
  where id = 1;




Chapter 18 : DELETE   ✌️

  👉 DELETE clause used for deleting existed fields.


  Syntax :  🌿

  DELETE FROM table_name
  WHERE condition;


  ⭐ If we don't define condition then it will be delete all fields


  Example :  📝

  DELETE FROM practice
  WHERE id IN (4,6);




Chapter 19 : PRIMARY KEY &  FOREIGN KEY   ✌️

  #️⃣ PRIMARY KEY

    👉 PRIMARY KEY always has unique data.

    👉 A PRIMARY KEY can't have null value.

    👉 A table can contain only one PRIMARY KEY constraint.

    

  Syntax :  🌿

  ⭕ Create Table With PRIMARY KEY

  ✒️CREATE TABLE table_name(
    col_name datatype constraint,
    col_name datatype constraint,
    ... ,
    PRIMARY KEY(column_name)
  );


  ⭕ Add PRIMARY KEY With Existing Table

  ✒️ALTER TABLE table_name
    ADD PRIMARY KEY(column_name);



  #️⃣ FOREIGN KEY

    👉 A FOREIGN KEY is a key used to link multiple tables together.

    👉 A FOREIGN KEY in one table used to point PRIMARY KEY in another table.


  Syntax :  🌿

  ⭕ Create Table With FOREIGN KEY

  ✒️CREATE TABLE table_name(
      col_name datatype constraint,
      col_name datatype constraint,
      ... ,
      PRIMARY KEY(column_name),
      FOREIGN KEY(which_column_name) REFERENCES Other_Table_Name(column_name)
    );


  ⭕ Add FOREIGN KEY With Existing Table

  ✒️ALTER TABLE table_name
    ADD FOREIGN KEY(which_column_name) REFERENCES Other_Table_Name(column_name);


  Example :  📝

  CREATE TABLE practice(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL ,
    percentage int NOT NULL ,
    age int NOT NULL CHECK( age >=18 ),
    gender enum('male','female') NOT NULL ,
    city int NOT NULL ,
    PRIMARY KEY (id),
    FOREIGN KEY (city) REFERENCES city_info(c_id)
  );




Chapter 20 : INNER JOIN   ✌️

  #️⃣ List Of JOINS In MySQL

    1️⃣ INNER JOIN

    2️⃣ LEFT JOIN

    3️⃣ RIGHT JOIN

    4️⃣ CROSS JOIN



  #️⃣ INNER JOIN

    👉 The INNER JOIN return those records which have matching values in both tables.(Only matching records)


  Syntax :  🌿 

  SELECT col1, col2, ...
  FROM table1 t1_sub_name INNER JOIN table2 t2_sub_name

  ON t1_sub_name.FK_column_name = t2_sub_name.PK_column_name

  WHERE condition
  ORDER BY column_name;


  ⭐ sub_name is OPTIONAL, It's make our code more readable & short.

  ⭐ table1.column_name  =>  FOREIGN KEY

  ⭐ table2.column_name  =>  PRIMARY KEY

  👉 Here WHERE & ORDER BY clauses are OPTIONAL.


  Example :  📝

  SELECT p.id,p.name,percentage,gender,c.name AS City
  FROM practice p INNER JOIN city_info c
  ON p.city = c.c_id;




Chapter 21 : LEFT JOIN & RIGHT JOIN   ✌️

  #️⃣ LEFT JOIN
   
     👉 The LEFT JOIN returns all records from the left table and the matched records from the right table.


  Syntax :  🌿

  SELECT col1, col2, ...
  FROM table1 t1_sub_name LEFT JOIN table2 t2_sub_name
 
  ON t1_sub_name.FK_column_name = t2_sub_name.PK_column_name

  WHERE condition
  ORDER BY column_name;


  Example :  📝

  SELECT p.id,p.name,percentage,gender,c.name AS City
  FROM practice p  LEFT JOIN city_info c
  ON p.city = c.c_id;



  #️⃣ RIGHT JOIN
   
    👉 The RIGHT JOIN returns all records from the right table and the matched records from the left table.


  Syntax :  🌿

  SELECT col1, col2, ...
  FROM table1 t1_sub_name RIGHT JOIN table2 t2_sub_name
 
  ON t1_sub_name.FK_column_name = t2_sub_name.PK_column_name

  WHERE condition
  ORDER BY column_name;




Chapter 22 : CROSS JOIN   ✌️

  #️⃣ CROSS JOIN 

    👉 One table fully combination with another table. 


  ⭐ CROSS JOIN isn't related with PRIMARY KEY & FOREIGN KEY.


  Syntax :  🌿

  SELECT col1, col2, ... 
  FROM table1 CROSS JOIN table1;


  Example :  📝

  SELECT * FROM practice CROSS JOIN city_info;




Chapter 23 : JOIN Multiple Tables  ✌️

  Syntax :  🌿

  ⭕ INNER JOIN For Multiple Tables

  ✒️SELECT col1, col2, ... 
  FROM table1 
  
  INNER JOIN table2
  ON table1.FK_column_name = table2.PK_column_name

  INNER JOIN table3
  ON table1.FK_column_name = table3.PK_column_name;


  👉 Same procedure apply with LEFT JOIN & RIGHT JOIN.

  👉 Or we can also combine all JOIN.

  👉 We can also apply WHERE, ORDER BY etc clauses.


  Example :  📝

  SELECT s.id, s.name, c.course_name AS Course, ci.city_name AS City
  FROM student_info s

  Right JOIN
    Course c
  ON s.course = c.course_id

  Right JOIN
    City ci
  ON s.city = ci.city_id;




Chapter 24 : GROUP BY & HAVING Clause  ✌️
 
  #️⃣ GROUP BY 

    👉 GROUP BY clause is used to grouping specific common column values and also displaying other columns's only 1st match value if we are define that after SELECT clause.

    👉 We can used Aggregate Function for calculating grouping columns.


  Syntax :  🌿

  ⭕ When Single Table
  
  ✒️SELECT col1, col2, ... FROM table_name
  WHERE condition
  GROUP BY column_name, ... 
  ORDER BY column_name ASC | DESC;


  ⭕ When Multiple Table

  ✒️SELECT col1, col2, ...
  FROM table1 INNER JOIN table2
  ON table1.FK_column_name = table2.PK_column_name
  WHERE condition
  GROUP BY column_name, ... 
  ORDER BY column_name ASC | DESC;


  👉 Those WHERE & ORDER BY clauses are OPTIONAL, but if used then order must be that sequence.


  Example :  📝

  SELECT count(age) AS Total,age FROM Student_info
  WHERE age > 18
  GROUP BY age
  order by count(age) DESC;


  #️⃣ HAVING

    👉 HAVING clause is used to define condition for GROUP BY values.

  ⭐  HAVING clause mainly used with GROUP BY clause.


  Syntax :  🌿

  SELECT col1, col2, ... FROM table_name
  WHERE condition
  GROUP BE col1, col2, ... 
  HAVING condition
  ORDER BY column ASC | DESC;
  

  👉 Those WHERE & ORDER BY clauses are OPTIONAL, but if used then order must be that sequence.


  Example :  📝

  SELECT count(age),name AS Total,age FROM Student_info
  WHERE age > 18
  GROUP BY age
  HAVING count(age) >1
  ORDER BY name;




Chapter 25 : SubQuery with EXISTS & NOT EXISTS  ✌️

  Syntax :  🌿

  SELECT col1, col2, ... FROM table1
  WHERE 
  column comparison_operators (SELECT column FROM table2 WHERE condition);


  ⭐ SubQuery work with clauses(INSERT, UPDATE, DELETE, SELECT)


  Example :  📝

  SELECT * FROM student_info
  WHERE course IN (SELECT course_id FROM Course WHERE course_name in ('HTML','CSS'));

    

  #️⃣ SubQuery With EXISTS

  Syntax :  🌿

  SELECT col1, col2, ... 
  FROM table1
  WHERE EXISTS (SELECT column FROM table2 WHERE condition);


  Example :  📝

  SELECT * FROM student_info
  WHERE exists (SELECT course_id FROM Course);
  
  👉 If any single record exists then parent command show results.

  👉 It will return 1 if EXISTS is successful, 0 otherwise.


  #️⃣ SubQuery With NOT EXISTS

  Syntax :  🌿

  SELECT col1, col2, ... 
  FROM table1
  WHERE NOT EXISTS (SELECT column FROM table2 WHERE condition);


  Example :  📝

  SELECT * FROM student_info
  WHERE NOT EXISTS (SELECT course_id FROM Course);
  
  👉 If not any single record exists then parent command show results.





Chapter 26 : UNION & UNION ALL  ✌️

  👉 UNION & UNION ALL clauses are used for combine multiple tables.


  ⭐ UNION  =>  Ignore duplicate records

  ⭐ UNION ALL =>  Display duplicate records also.


  #️⃣ Rules 

    1️⃣ Each SELECT statement within UNION / UNION ALL must have the same number of columns.

    2️⃣ The columns must also have similar data-type.

    3️⃣ The columns in each SELECT statement must also be in the same order.


  Syntax :  🌿

  SELECT col1, col2, ... FROM Table1
  UNION / UNION ALL
  SELECT col1, col2, ... FROM Table2;


  Example :  📝

  SELECT age, name, gender FROM table1 
  UNION ALL
  SELECT age, name, gender FROM table2;





Chapter 27 : IF() & CASE Clause  ✌️

  #️⃣ IF() Function

    👉 The IF() function returns a value if a condition is TRUE, or another value if a condition is FALSE.

  
  Syntax :  🌿

  SELECT col1, col2,
  IF(Condition, TRUE Result, FALSE Result) AS alias_name
  FROM table_name;


  Example :  📝

  SELECT id , name,
  IF(percentage>=60,'PASS', 'FAIL') AS Percentage
  FROM table3;



  #️⃣ CASE Clause 

    👉 CASE Clause is used for define multiple-condition.


  Syntax :  🌿 

  SELECT col1, col2,
  CASE 
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    WHEN condition3 THEN result3
    ...
    ELSE result 
  END AS alias_name

  FROM table_name;


  Example :  📝

  ⭕ CASE Clause With SELECT Statement

  SELECT id , name, percentage,
  CASE
      WHEN percentage >=90 AND percentage <=100 THEN 'A+'
      WHEN percentage >=80 AND percentage <90 THEN 'A'
      WHEN percentage >=70 AND percentage <80 THEN 'A-'
      WHEN percentage >=60 AND percentage <70 THEN 'B'
      WHEN percentage < 60  THEN 'FAIL'
      ELSE 'Not correct score'
  END AS Grade
  FROM table3;


  ⭕ CASE Clause With UPDATE Statement

  UPDATE table3
  SET percentage = (
      CASE
        WHEN id = 5 THEN 65
        WHEN id = 6 THEN 85
        WHEN id = 1 THEN 55
      END
      )
  WHERE id IN (5,6,1);




Chapter 28 : Arithmetic Functions  ✌️

  🌿 PI() 

    👉 Return PI value.

    ✒️ PI()  =>  3.141593


  🌿 ABS(number)  

    👉 Return absolute value (POSITIVE VALUE).

    ✒️ ABS(-6.5)  =>  6.5


  🌿 FLOOR(number)  

    👉 Return lower Integer value.

    ✒️ FLOOR(6.7)  =>  6


  🌿 CEIL(number)  

    👉 Return upper integer value.

    ✒️ CEIL(6.7)  =>  7


  🌿 ROUND(number)  

    👉 After decimal, 0-.4 Return as like FLOOR() & .5-1 as like return CEIL().

    ✒️ROUND(2.4) => 2,
      ROUND(2.5) => 3, 

    👉 If after decimal, need specific range of number with rounded.

    ✒️ROUND(324.4567,2)  =>  324.46

    ⭐ That procedure not applicable with FLOOR() & CEIL() Function.


  🌿 FORMAT(number,how_many)  

    👉 Same as like ROUND() function.

    👉 If after decimal, need specific range of number with rounded.

    ✒️ FORMAT(64.4563,2) =>  64.457


  🌿 SQRT(number)  

    👉 Return square-root value.

    ✒️ SQRT(64) =>  8


  🌿 POW(base,exp)  

    👉 Return x to the power y value.

    ✒️ POW(2,3) =>  8



  🌿 SIGN(number)  

    👉num > 0  => 1
      num = 0  => 0
      num < 0  => -1

    ✒️SIGN(5) => 1, 
      SIGN(0) => 0, 
      SIGN(-5) => -1


  🌿 RAND()  

    👉 Return random value between 0 to 1

    ✒️ RAND()  => 0.456


  Example :  📝

  SELECT 5+6 AS Calculation;

  SELECT PI();

  SELECT ROUND(1234.987,2);  =>  1234.98

  SELECT POW(2,3) AS POWER_OF;

  SELECT ROUND(SQRT(5),2);

  SELECT ROUND(RAND() * 10);

  SELECT FLOOR(7 + (RAND() * 6));  => (7 to 12)

  ⭐SELECT id, name, percentage
    FROM table3
    ORDER BY RAND();

  ⭐SELECT id, name, (percentage % 10) AS 'New Percentage' FROM table3;




Chapter 29 : String Functions  ✌️

  🌿 UPPER('string')

    👉 Return all characters within Upper-case.

    ✒️ UPPER('Tangil');
    
      🎈 TANGIL


  🌿 LOWER('string')

    👉 Return all characters within Lower-case.

    ✒️ LOWER('Tangil');  
    
      🎈 tangil


  🌿 LENGTH('string')

    👉 Return all characters total length.

    ✒️ LENGTH('Tangil'); 
    
      🎈 6


  🌿 CONCAT('string')

    👉 Can attach multiple-strings combination.

    ✒️ CONCAT('Tangil ', 'Rahman');  
    
      🎈 Tangil Rahman


  🌿 LTRIM('string')

    👉 Trim from left-side.

    ✒️ LTRIM('  Tangil');
    
      🎈   Tangil


  🌿 RTRIM('string')

    👉 Trim from right-side.

    ✒️ LTRIM('Tangil  '); 
    
    🎈 Tangil


  🌿 TRIM('string')

    👉 Trim from left-side & right-side.

    ✒️ TRIM('  Tangil  ');
    
      🎈 Tangil


  🌿 POSITION('search_word' IN 'string')

    👉 Return 1st match starting length.

    ✒️ POSITION('i' IN 'Tangil');
    
      🎈 5


  🌿 LOCATE('search_word','string',searching_start_length)

    👉 Return 1st match starting length.

    ✒️ LOCATE('a', 'Tangilur Rahman', 3);
    
      🎈 11


  🌿 SUBSTRING('string',starting_length,end_length)

    👉 Return specific sub-string.

    ✒️ SUBSTRING('Tangilur Rahman',3)  =>  ngilur Rahman

    ✒️ SUBSTRING('Tangilur Rahman',3,8)  =>  ngilur R

    ✒️ SUBSTRING('Tangilur Rahman',-8,5)  =>  r Rah


  🌿 SUBSTRING_INDEX('string', delimiter, which_one_index)

    👉 Returns a sub-string from a string before a specified number of delimiter occurs.

    ✒️ SUBSTRING_INDEX('Tangilur Rahman','a',2); 
    
      🎈 Tangilur R


  🌿 LEFT('string', index_position)

    👉 Returns a sub-string from a string before(Left) a specified number of index-position.

    ✒️ LEFT('Tangilur Rahman',10); 
    
      🎈 Tangilur R


  🌿 RIGHT('string', index_position)

    👉 Returns a sub-string from a string after(Right) a specified number of index-position.

    ✒️ RIGHT('Tangilur Rahman',10);  
    
      🎈 lur Rahman


  🌿 RPAD('string', length, 'rpad_string')

    👉 In Specific String, We can increase that string-length at right-side and attach any 'lpad-string'.  

    ✒️ RPAD('Tangil',15,'@'); 
    
      🎈 Tangil@@@@@@@@@


  🌿 LPAD('string', length, 'rpad_string')

    👉 In Specific String, We can increase that string-length at left-side and attach any 'lpad-string'.  

    ✒️ LPAD('Tangil',15,'@'); 
    
      🎈 @@@@@@@@@Tangil


  🌿 SPACE(how_many_space_index_number)

    👉 That function is used for add blank-space in the field.   

    ✒️ SPACE(50) => 


  🌿 REVERSE('string')

    👉 Return that string's reverse format.   

    ✒️ REVERSE('Tangil');
    
      🎈 lignat
    
    
  🌿 REPLACE('string', 'search-string', 'replace-string')

    👉 That function is used for replace string.   

    ✒️ REPLACE('Tangilur Ahmed', 'Ahmed', 'Rahman');
      
      🎈 Tangilur Rahman


  🌿 STRCMP('string', 'another-string')

    👉 That function is used for compare multiple-string.   

    
    ⭐left-string  =  right-string  =>  0
      left-string  >  right-string  =>  1
      left-string  <  right-string  =>  -1

    ✒️ STRCMP('Tangil','tangil')  =>  0

    ✒️ STRCMP('Tangil','Sangil')  =>  -1

    ✒️ STRCMP('Sangil','Tangil')  =>  1

    
  
  🌿 FIELD(searching-value, val1, val2, val3, ...)

    👉 That function is used for searching specific-string from multiple string. 
    
    👉 Return 1st match value's index-position.

    ✒️ FIELD('tan', 'hi', 'hello', 'tan');  =>  3

    ✒️ FIELD(5, 3, 5, 5, 8);  =>  3


  🌿 FIND_IN_SET(searching-value, 'val1,val2,val3')

    👉 That function is used for searching specific-string from a set. 
    
    👉 Return 1st match value's index-position.

    👉 Don't insert blank-space inside the set.


    ✒️ FIND_IN_SET('tan','hi,hello,tam,tan,bye');  
    
      🎈 4

    

  🌿 HEX('string')

    👉 Return hexadecimal format of that string.

    👉 We can used it with password.


    ✒️ HEX('Tangil');  
    
      🎈 54616E67696C




Chapter 30 : Date Functions  ✌️

  🌿 CURRENT_DATE();

    👉 Return current date. 

    ✒️ SELECT CURRENT_DATE();


  🌿 NOW();

    👉 Return current date & time. 

    ✒️ SELECT NOW();


  🌿 DATE('date time');

    👉 Return only date. 

    ✒️ DATE('2021-10-14 09:34:21');  
    
      🎈 2021-10-14


  🌿 DAY('date');

    👉 Return only day. 

    ✒️ DAY('2021-10-14');  
    
      🎈 14


  🌿 DAYNAME('date');

    👉 Return day-name from the given date. 

    ✒️ DAYNAME('2012-4-24');  
    
      🎈 Tuesday


  🌿 DAYOFYEAR('date');

    👉 Return number of day from the given date.(1 to 365) 

    ✒️ DAYOFYEAR('2012-4-24'); 
    
      🎈 115


  🌿 WEEK('date');

    👉 Return number of week from the given date.(1 to 52) 

    ✒️ DAYOFYEAR('2012-4-24');  
    
      🎈 17


  🌿 MONTH('date');

    👉 Return only month. 

    ✒️ MONTH('2021-10-14');  
    
      🎈 10


  🌿 MONTHNAME('date');

    👉 Return month-name from the given date. 

    ✒️ MONTH('2021-10-14');  
    
      🎈 October


  🌿 YEAR('date');

    👉 Return only year. 

    ✒️ YEAR('2021-10-14');  
    
      🎈 2021


  🌿 LAST_DAY('date');

    👉 Return last day of month from the given date. 

    ✒️ LAST_DAY('2021-10-14'); 
    
      🎈 2021-10-31


  🌿 EXTRACT(what_want from 'date time');

    👉 Return what do you want from the given date. 


    ✒️ SELECT EXTRACT(SECOND FROM NOW());

    ✒️ SELECT EXTRACT(MINUTE FROM NOW());

    ✒️ SELECT EXTRACT(HOUR FROM NOW());

    ✒️ SELECT EXTRACT(DAY FROM NOW());

    ✒️ SELECT EXTRACT(WEEK FROM NOW());

    ✒️ SELECT EXTRACT(MONTH FROM NOW());

    ✒️ SELECT EXTRACT(YEAR FROM NOW());



  🌿 ADDDATE('date' INTERVAL add_anything)

    👉 That function is used for adding date with the given date.


    ✒️ SELECT ADDDATE(NOW() ,INTERVAL 20 MINUTE );

    ✒️ SELECT ADDDATE(NOW() ,INTERVAL 8 HOUR );

    ✒️ SELECT ADDDATE(NOW() ,INTERVAL 10 DAY );

    ✒️ SELECT ADDDATE(NOW() ,INTERVAL 10 WEEK );

    ✒️ SELECT ADDDATE(NOW() ,INTERVAL 2 MONTH );

    ✒️ SELECT ADDDATE(NOW() ,INTERVAL 5 YEAR );


  
  🌿 SUBDATE('date' INTERVAL add_anything)

    👉 That function is used for subtracting date with the given date.

    👉 It's the reverse of ADDDATE, all procedure same.


  🌿 DATEDIFF('date1', 'date2')

    👉 Return how many days different between 2 dates.

    ✒️ DATEDIFF('2017-12-01',NOW());  =>  -1653


  🌿 MAKEDATE(year,day_of_year)

    👉 Returns a date based on a year and a number of days value

    ✒️ MAKEDATE(2022,175); 
     
      🎈 2022-06-24


  🌿 Date & Time Format

    #️⃣ List of Date format

      ⭕ Day

        👉 %d  =>  (01 to 31)

        👉 %e  =>  (1 to 31)

        👉 %D  =>  (st, nd, rd, th,...)

        👉 %j  =>  (001 to 365)


      ⭕ Month

        👉 %M  =>  (January)

        👉 %b  =>  (Jan to Dec)

        👉 %m  =>  (00 to 12)

        👉 %c  =>  (0 to 12)


      ⭕ Year

        👉 %Y  =>  (2022)

        👉 %y  =>  (22)


      ⭕ Week

        👉 %a  =>  (Mon)

        👉 %W  =>  (Monday)

        👉 %w  =>  (0 to 6)

     
        
    #️⃣ List of Time format

      ⭕ Hour

        👉 %h  =>  (01 to 12)

        👉 %H  =>  (00 to 23)

        👉 %g  =>  (1 to 12)

        👉 %G  =>  (0 to 23)


      ⭕ Minutes

        👉 %i  =>  (00 to 59)


      ⭕ Seconds

        👉 %s  =>  (00 to 59)


      ⭕ Microseconds

        👉 %f  =>  (000000 to 999999)

      
      ⭕ Meridiem

        👉 %p (AM or PM)



    Example :  📝

    ✒️ SELECT DATE_FORMAT(NOW(), '%d/%m/%Y');  

      👉 11/06/2022

    ✒️ SELECT DATE_FORMAT(NOW(), '%d-%b-%Y');  

      👉 11-06-2022

    ✒️ SELECT DATE_FORMAT(NOW(), '%d-%m-%Y, %W');  

      👉 11/06/2022, Saturday



  🌿 STR_TO_DATE('readable_date','format')

    👉 Return MySQL-format from readable-format. 

    ✒️STR_TO_DATE('June 6 2022', '%M %d %Y');


   
    

Chapter 31 : Time Functions  ✌️

  🌿 CURRENT_TIME();

    👉 Return current-time

    ✒️ SELECT CURRENT_TIME();


  🌿 TIME('date time');

    👉 Return only time.

    ✒️ TIME('2022-6-23 6:56:33');


  🌿 HOUR('date time');

    👉 Return only hour.

    ✒️ HOUR('2022-6-23 6:56:33');


  🌿 MINUTE('date time');

    👉 Return only minute.

    ✒️ MINUTE('2022-6-23 6:56:33');


  🌿 SECOND('date time');

    👉 Return only second.

    ✒️ SECOND('2022-6-23 6:56:33');


  🌿 TIMEDIFF('time1', 'time2');

    👉 Compare two times and return differentiation.

    ✒️ TIMEDIFF ('20:56:33','06:50:23');
    
      🎈 14:06:10 


  🌿 MAKETIME(hour,minute,second)

    👉 Return a time based on an hour, minute, and second value.

    ✒️ MAKETIME(2,34,45);

      🎈 02:34:45


  🌿 TIMESTAMP('date', 'time')

    👉 Combine date & time together.

    ✒️ TIMESTAMP ('2022-6-12','1:12:23');

      🎈 2022-06-12 01:12:23


  🌿 TIME_FORMAT('time', 'format')

    👉 For formatting only time.

    ✒️ TIME_FORMAT ('1:12:23','%H-%i-%s %p');

      🎈 1-12-23 AM


  🌿 TIME_TO_SEC('time')

    👉 Return total second base on time.

    ✒️ TIME_TO_SEC('13:12:23');

      🎈 47543


  🌿 SEC_TO_TIME('second')

    👉 Return time base on total second.

    👉 That function reverse of TIME_TO_SEC()

    ✒️ SEC_TO_TIME('47543');

      🎈 13:12:23





Chapter 32 : ALTER  ✌️

  👉 ALTER Clause is used for modify table's feature. 


  #️⃣ Feature of ALTER clause

    👉 Add new column in a table

    👉 Changing data-type of a existing column

    👉 Adding constraints on existing column

    👉 Change existing column-name

    👉 Reordering column position

    👉 Delete column

    👉 Change existing table-name
    

  
  Syntax :  🌿 

  ⭕ Add New Column In A Table

  ✒️ALTER TABLE table_name
    ADD column_name datatype constrain;


  ⭕ Changing Data-type Of A Existing Column

  ✒️ALTER TABLE table_name
    MODIFY column_name datatype constrain;


  ⭕ Delete A Column

  ✒️ALTER TABLE table_name
    DROP COLUMN column_name;


  ⭕ Reordering Column Position

  ✒️ALTER TABLE table_name
    MODIFY column_name datatype constrain
    AFTER specific column_name;


  ⭕ Adding Constraints On Existing Column

  ✒️ALTER TABLE table_name
    ADD CONSTRAINT (column_name);

 
  ⭕ Change Existing Column-Name

  ✒️ALTER TABLE table_name
    CHANGE old_column_name new_column_name datatype constrain;


  ⭕ Change Existing Table-Name

  ✒️ALTER TABLE table_name
    RENAME new_table_name;


  ⭕ AUTO_INCREMENT Starting_Index Modify

  ✒️ALTER TABLE courses
    AUTO_INCREMENT = number;

 
  Example :  📝

  ⭕ Add New Column In A Table

  ALTER TABLE table3
  ADD email VARCHAR(255) UNIQUE;


  ⭕ Changing Data-type Of A Existing Column

  ALTER TABLE table3
  MODIFY email VARCHAR(255) UNIQUE;


  ⭕ Delete A Column

  ALTER TABLE table3
  DROP COLUMN email;


  ⭕ Reordering Column Position

  ALTER TABLE table3
  MODIFY email varchar(255) unique
  AFTER name;


  ⭕ Adding Constraints On Existing Column

  ALTER TABLE table3
  ADD primary key (id);

  ALTER TABLE table3
  ADD unique (email);

 
  ⭕ Change Existing Column-Name

  ALTER TABLE table3
  CHANGE email email_id varchar(255) unique;


  ⭕ Change Existing Table-Name

  ALTER TABLE table3
  RENAME table4;





Chapter 33 : DROP & TRUNCATE  ✌️

  #️⃣ Different DROP & TRUNCATE

    ⭕ DROP => Delete whole table.

    ⭕ TRUNCATE => Only delete data, not table's structure.


  Syntax :  🌿

  ⭕ DROP Clause

  DROP TABLE table_name;


  ⭕ TRUNCATE Clause

  TRUNCATE TABLE table_name;


  Example :  📝

  DROP TABLE student_info;

  TRUNCATE TABLE student_info;




Chapter 34 : VIEW  ✌️

  👉 In MySQL, a VIEW is a virtual table based on the result-set of an SQL statement.

  👉 A VIEW contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.

  👉 VIEW only store SQL statements, not data.

  👉 VIEW also permanently saved on database, but we can delete it anytime.



  Syntax :  🌿

  ⭕ Create VIEW

  CREATE VIEW view_name
  AS

  SELECT columns
  FROM table1
  INNER JOIN table2
  ON table1.column = table2.column;


  ⭕ Displaying VIEW

  SELECT col1, col2, ... FROM VIEW_NAME;


  ⭕ MODIFY VIEW

  ALTER VIEW view_name
  AS

  SELECT columns
  FROM table1
  INNER JOIN table2
  ON table1.column = table2.column

  INNER JOIN table3
  ON table1.column = table3.column;


  ⭕ RENAME VIEW

  RENAME TABLE view_name
  TO new_view_name;


  ⭕ DELETE VIEW

  DROP VIEW view_name;



  Example :  📝

  CREATE VIEW student_details
  AS
  SELECT s.id,s.name,c.city_name,C2.course_name from student_info s
  INNER JOIN City C on s.city = C.city_id
  INNER JOIN Course C2 on s.course = C2.course_id;


  
  #️⃣ Advantages & Disadvantages of VIEW

    ⭕ Advantages

      👉 Simplify complex query.

      👉 Provides extra layer of security.


    ⭕ Disadvantages

      👉 Performance decrease.

      👉 Dependency on table.





Chapter 35 : INDEX  ✌️

  👉 INDEX Clause is used to create indexes in tables.

  👉 Indexes are used to retrieve data from the database more quickly than otherwise.
  The users cannot see the indexes, they are just used to speed up searches/queries.

  👉 INDEX also permanently saved on database, but we can delete it anytime.


  #️⃣ Guidelines of Index : 

    👉 Automatically creates the indexes for PRIMARY KEY and UNIQUE columns.

    👉 Index columns that we frequently use to retrieve the data.

    👉 Index columns that are used for joins to improve join performance.

    👉 Avoid columns that contain too many NULL values.

    👉 In small tables don't require indexes, minimum 1000+ records.



  Syntax :  🌿 

  ⭕ Create INDEX
  
  CREATE INDEX index_name
  ON table_name(col1, col2, ...);


  ⭕ Displaying All Index Of Specific Table

  SHOW INDEX FROM table_name;


  ⭕ Delete INDEX

  DROP INDEX index_name
  ON table_name;


  Example :  📝

  CREATE INDEX index_for_name
  ON student_info(name);

  DROP INDEX index_for_name
  ON student_info;

  SHOW INDEX FROM student_info;


😊END😊
*/