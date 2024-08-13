import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react ', () => {
  render(<App />);
  const Element = screen.getByText(/learn react/i);
  expect(Element).toBeInTheDocument();
});
// <div>
// <img src={mithondam} width="450px" height="300px" alt="Gallery" />

// <img src={baranti} width="400px" height="300px" alt="Gallery" />
// <img src={palash} width="650px" height="300px" alt="Gallery" />
// <img src={large} width="400px" height="300px" alt="Gallery" />

// <img src="img8.jpg" width="400px" height="300px" alt="Gallery" />
// <img src="img9.jpg" width="400px" height="300px" alt="Gallery" />
// <img src="img10.jpg" width="650px" height="300px" alt="Gallery" />
// </div> */}