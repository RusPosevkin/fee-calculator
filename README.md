# Fee Calculator

The app allows users to submit items they want to sell. They can either submit auction items or fixed price buy it now items.
Submitting items comes with a fee. The fee is calculated according to a set of rules

## Assignment
Assignment description available [here](./task.md)

## How to run
1. Clone this repository
  ```sh
  git clone https://github.com/RusPosevkin/fee-calculator.git
  ```

2. Install dependencies
  ```sh
  cd ./fee-calculator

  npm i
  ```

3. Run app
  ```sh
  npm run dev
  ```

4. Open in a browser a link that is shown in the terminal. I.e. [http://localhost:5173](http://localhost:5173/).


## Run tests
  ```sh
  npm run test
  ```

<details>
<summary>Tests</summary>

![image](https://github.com/user-attachments/assets/842f2625-1ee1-4573-91cb-9521481bde61)
</details>

### What was done?
`main` branch includes solution that covers these tasks:

- [x] The calculator code is not very maintainable and has very poor test coverage. Try improving this code.
- [x] The react App component is a bit messy in many ways. Any ideas for how to refactor and break this apart?
- [x] In the code example, the end date discount are only implemented for auctions, but we would like it to also work for Buy It Now ads. You only need to do this if you choose to improve the calculator code.

## Additional task
[styling](https://github.com/RusPosevkin/fee-calculator/tree/styling) branch extends current solution and solve this task:
- [x] Show added items in a card design with information styled nicely.

<details>
<summary>Screenshot</summary>

![screenshot](https://github.com/user-attachments/assets/64c56694-340d-44b4-87a6-8014ac121348)
</details>
