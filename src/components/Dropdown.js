import { useState,useRef, useEffect } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({options, value, onChange}) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (evt) => {
      if(!divEl.current) {
        return;
      }
      if(!divEl.current.contains(evt.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler, true);
    return () => {
      document.removeEventListener('click', handler, true);
    }
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
    console.log(option);
  }

  const renderedOptions = options.map((option) => {
    return (
      <div 
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={() =>handleOptionClick(option)} 
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className='w-48 relative'>
      <Panel
        className='flex justify-between item-center cursor-pointer' onClick={handleClick}>
        { value?.label || 'Выбрать...' }
        <GoChevronDown classname='text-2xl'/>
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;