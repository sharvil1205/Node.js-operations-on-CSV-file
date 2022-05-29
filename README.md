# Node.js-operations-on-CSV-file

**
Problem Statement:**

Given the data of Kepler’s space expedition of finding exoplanets:
https://docs.google.com/spreadsheets/u/0/d/18JaG_9Ejxv5SU3tRpKc-LlZSfWsm5ggK7j_8AKkVzy4/edit

Write a node program to extract habitable planets from the given data by using parsing and streaming the csv data

The criteria for finding the habitable planet is given below.All the 3 conditions should be matched for a planet to become habitable
1. koi_disposition should be confirmed
2. koi_insol should be in between .36 and 1.11
3. koi_prad should be less than 1.6

You can store the output in an array and display it in the terminal console



**
Installation guide:**

1. Download or clone this repository
2. Initialize node using 'npm init'
3. Run the program using the command 'node index.js' or 'nodemon index.js'(if you have nodemon installed)

**
Output:**

![image](https://user-images.githubusercontent.com/79535235/170867052-9706b636-b8e0-443e-9dc3-0631bc34ae57.png)
