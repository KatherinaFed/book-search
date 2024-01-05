import React from 'react';
import {
  screen,
  render,
  act,
  fireEvent,
} from '@testing-library/react';
import SearchForm from './SearchForm';

describe('Search Form component', () => {
  it('should have - input, button', () => {
    render(<SearchForm />);

    const inputField = screen.getByPlaceholderText(/Search a book.../i);
    const buttonSubmit = screen.getByRole('button');

    expect(inputField).toBeInTheDocument();
    expect(buttonSubmit).toBeInTheDocument();
  });

  it('form should update state and clear input', async () => {
    const testInput = 'Harry Potter';
    const setSearchData = jest.fn();
    const setSearchBook = jest.fn();
    const setStartIndex = jest.fn();

    jest
      .spyOn(React, 'useState')
      .mockImplementation((init) => [init, setSearchBook]);

    render(
      <SearchForm setSearchData={setSearchData} setStartIndex={setStartIndex} />
    );

    await act(async () => {
      const searchInput = screen.getByPlaceholderText(/Search a book.../i);

      fireEvent.change(searchInput, { target: { value: testInput } });
    });

    await act(async () => {
      const searchButton = screen.getByRole('button');
      fireEvent.click(searchButton);
    });

    expect(setSearchData).toHaveBeenCalledWith(testInput);
    expect(setStartIndex).toHaveBeenCalledWith(0);
  });
});
