import { NextPage } from 'next';
import { ScriptProps } from 'next/script';
import { useState } from 'react';

type DefaultOptionType = {
  id: number;
  label: string;
  name: string;
};

type DefaultStateType = {
  value: number | string;
  label: string;
  unique: number | string;
};

type SelectType = ScriptProps & {
  options: DefaultOptionType[] | any[];
  multiple?: Boolean;
  label?: string;
  unique?: string;
  value?: string | number | undefined;
  onInputChange: Function;
};

const SelectBox: NextPage<SelectType> = ({
  options,
  multiple = false,
  onInputChange,
  unique = 'id',
  label = 'label',
  value = 'name',
}: SelectType) => {
  const [selected, setSelected] = useState<DefaultStateType[]>([]);
  const [showOption, setShowOption] = useState(false);

  const selectOption = (e: any, value: number | string) => {
    const selectedOption = e.target;
    let label = selectedOption.innerHTML;
    let unique = selectedOption.id;

    let curr = selected;
    let newObj = {
      value,
      label,
      unique,
    };

    let checkIfExists = curr.filter(
      (o: DefaultStateType) => o.unique == unique,
    ).length;

    if (checkIfExists) {
      const selectedValues = curr.map((o) => o.value);
      onInputChange(multiple ? selectedValues : selectedValues[0]);
      return;
    }

    if (multiple) {
      curr.push(newObj);
    } else {
      curr = [newObj];
    }

    const selectedValues = curr.map((o) => o.value);

    onInputChange(multiple ? selectedValues : selectedValues[0]);
    setShowOption(()=> false);
    setSelected(()=> curr);
  };

  const muilipleLabel = () => {
    if (!selected.length) return <div>Select An Option</div>;
    return selected.map((o) => (
      <div key={o.value} className="badge badge-success gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-4 h-4 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        {o.label}
      </div>
    ));
  };

  const renderOptions = () => {
    return (
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 w-full p-2 rounded-box"
      >
        <li className="menu-title">
          <label>Select An Option</label>
        </li>
        {options.map((o: any) => (
          <li
            key={unique ? o[unique] : o.id}
            onClick={(e) => selectOption(e, value ? o[value] : o.value)}
          >
            <label id={unique ? o[unique] : o.id}>
              {label ? o[label] : o.label}{' '}
            </label>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="dropdown" onClick={() => setShowOption(true)}>
      <label tabIndex={0} className="select select-bordered w-full">
        <div className="p-2">{muilipleLabel()}</div>
      </label>
      {showOption ? renderOptions() : ''}
    </div>
  );
};

export default SelectBox;