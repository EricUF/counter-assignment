// import necessary react testing library helpers here
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react' 
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
//import Fetch from '../fetch'

// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  //I NEED TO FETCH THIS
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  // MAKE SURE THAT <h2>Counter</h2> IS BEING DISPLAYED
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  //OFF START, <p data-testid="count">{count}</p>, SHOULD BE 0
  const counterMessage = screen.getByText(/0/i);
  expect(counterMessage).toBeInTheDocument();
});

test('clicking + increments the count', async () => {
  // Complete the unit test below based on the objective in the line above
  // EACH CLICK, <button onClick={increment}> + </button>, INCREASES COUNT
  fireEvent.click(screen.getByText('+'));
  const firstIncrement = screen.getByText(/1/i);
  expect(firstIncrement).toBeInTheDocument();

  fireEvent.click(screen.getByText('+'));
  const secondIncrement = screen.getByText(/2/i);
  expect(secondIncrement).toBeInTheDocument();

  fireEvent.click(screen.getByText('+'));
  const thirdIncrement = screen.getByText(/3/i);
  expect(thirdIncrement).toBeInTheDocument();
});

test('clicking - decrements the count', async () => {
  // Complete the unit test below based on the objective in the line above
  // EACH CLICK, <button onClick={decrement}> - </button>, DECREASES COUNT
  fireEvent.click(screen.getByText('-'));
  const firstDecrement = screen.getByText(/-1/i);
  expect(firstDecrement).toBeInTheDocument();

  fireEvent.click(screen.getByText('-'));
  const secondDecrement = screen.getByText(/-2/i);
  expect(secondDecrement).toBeInTheDocument();

  fireEvent.click(screen.getByText('-'));
  const thirdDecrement = screen.getByText(/-3/i);
  expect(thirdDecrement).toBeInTheDocument();
});
