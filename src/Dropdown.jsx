import { useEffect, useRef, useState } from 'react';

export default function Dropdown({ options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleMouseDown = (event) => {
      if (!rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const toggle = () => {
    if (!open) setUp(window.innerHeight < 500);
    setOpen((o) => !o);
  };

  return (
    <div className={"dropdown"} ref={rootRef}>
      <button type="button" onClick={toggle}>
        {value.label} ▾
      </button>
      {open && (
        <ul className={up ? 'dropdown-menu up' : 'dropdown-menu'}>
          {options.map((v) => (
            <li
              key={v.key}
              onClick={() => {
                onChange(v);
                setOpen(false);
              }}
            >
              {v.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}