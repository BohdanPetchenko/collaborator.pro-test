import { useState } from 'react';
import { greeting } from './greeting';
import Dropdown from './Dropdown';

const DROPDOWN_OPTIONS = [
  { key: '1', label: 'Option 1' },
  { key: '2', label: 'Option 2' },
  { key: '3', label: 'Option 3' },
  { key: '4', label: 'Option 4' },
  { key: '5', label: 'Option 5' }
];

export default function App() {
  const [value, setValue] = useState(DROPDOWN_OPTIONS[0]);

  const handleButtonClick = () => {
    setValue(prevValue => {
      const currentIndex = DROPDOWN_OPTIONS.indexOf(prevValue);
      // Calculate the next index in a circular manner
      const nextIndex = (currentIndex + 1) % DROPDOWN_OPTIONS.length;
      return DROPDOWN_OPTIONS[nextIndex];
    });
  };

  return (
    <>
      <h1>{greeting(__APP_NAME__)}</h1>
      <div className="card">
        <h2>Card</h2>
        <Dropdown
          options={DROPDOWN_OPTIONS}
          value={value}
          onChange={setValue}
        />
        <p className={"card-description"}>
          Lorem ipsum dolor sit amet,
          supra mutationem signate.
          Nunc porta pulvinar lorem, a molestie elit vulputate nec. Maecenas vulputate fringilla
          mi, a posuere arcu tempor sit amet. Etiam porta nisi ut molestie hendrerit. Aenean luctus nibh vel sapien interdum, sit
          amet cursus nunc
          aliquam.
          Quisque rhoncus elementum sodales. Fusce placerat eros ut gravida rhoncus. Fusce pharetra, leo vitae dapibus faucibus,
          dolor nisl placerat elit, eget dignissim odio tortor in dolor.</p>
        <button type="button" onClick={handleButtonClick}>
          Option <span>{value.key}</span> is selected
        </button>
      </div>
    </>
  );
}
