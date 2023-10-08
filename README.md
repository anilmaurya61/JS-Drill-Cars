# JS Drill: Cars

This project simulates a used car dealer's inventory management system using JavaScript. The dealer has 50 cars in their inventory, and various operations are performed on this inventory using JavaScript functions.

## Table of Contents
- [JS Drill: Cars](#js-drill-cars)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [How to Run](#how-to-run)
    - [Problems and Solutions](#problems-and-solutions)
      - [Problem #1: Finding a Car by ID](#problem-1-finding-a-car-by-id)
      - [Problem #2: Finding the Last Car](#problem-2-finding-the-last-car)
      - [Problem #3: Sorting Car Models](#problem-3-sorting-car-models)
      - [Problem #4: Extracting Car Years](#problem-4-extracting-car-years)
      - [Problem #5: Counting Older Cars](#problem-5-counting-older-cars)
      - [Problem #6: Filtering BMW and Audi Cars](#problem-6-filtering-bmw-and-audi-cars)
      - [Testing](#testing)

## Project Structure

The project consists of the following files and directories:

- `Problem` : It contains JavaScript files containing functions to solve specific problems related to the car inventory.
  
- `TestProblem` :It contains Test files for each problem, testing the respective functions.
  
- `Inventory` : Module exporting the common inventory data.
  
- `README.md`: This file, providing an overview of the project.

## How to Run

To run this project, follow these steps:

1. Clone the GitLab repository:

   ```ruby
   git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```ruby
    cd used-car-dealer-inventory
    ```
3. Install any dependencies (if required).

4. Run the JavaScript files for specific problems using Node.js. For example, to run Problem 1:

    ```ruby
    node testProblem1.js
    ```
Replace testProblem1.js with the name of the test file you want to execute.

### Problems and Solutions

This project addresses the following problems:

#### Problem #1: Finding a Car by ID

The dealer needs to find a car in the inventory by its ID and display its details.

#### Problem #2: Finding the Last Car

The dealer needs to find the make and model of the last car in the inventory.

#### Problem #3: Sorting Car Models

The marketing team wants the car models listed alphabetically.

#### Problem #4: Extracting Car Years

The accounting team needs a list of all the car years from the inventory.

#### Problem #5: Counting Older Cars

The car lot manager needs to find out how many cars are older than the year 2000.

#### Problem #6: Filtering BMW and Audi Cars

A buyer is interested in seeing only BMW and Audi cars within the inventory.

#### Testing

Each problem has a corresponding test file that demonstrates the solution. To run the tests, follow the instructions in the "How to Run" section for each problem.
