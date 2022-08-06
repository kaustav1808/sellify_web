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

type StateType = {
  selected: DefaultStateType[],
  opened: boolean
}

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
  const [state, setState] = useState<StateType>({ selected:[], opened:false });

  const updateState = (obj: any) => {
    const curr = state
    setState({... curr, ... obj})
  }

  const selectOption = (e: any, value: number | string) => {
    e.stopPropagation();
    const selectedOption = e.target;
    let label = selectedOption.innerHTML;
    let unique = selectedOption.id;

    let curr = state.selected;
    let newObj = {
      value,
      label,
      unique,
    };

    let checkIfExists = curr.filter(
      (o: DefaultStateType) => o.unique == unique,
    ).length;

    if (checkIfExists) {
      returnSelected(curr)
      return;
    }

    if (multiple) {
      curr.push(newObj);
    } else {
      curr = [newObj];
    }

    returnSelected(curr)
    updateState({selected: curr, opened: false});
  };

  const returnSelected = (arr: DefaultStateType[] ) => {
    const selectedValues = arr.map((o) => o.value);
    onInputChange(selectedValues);
  }

  const removeItem = (e: any , key: number | string) => {
    e.stopPropagation();
    let curr = state.selected
    curr = curr.filter(o => key !== o.unique )
    returnSelected(curr)
    updateState({selected: curr})
  }

  const muilipleLabel = () => {
    if (!state.selected.length) return <div>Select An Option</div>;
    return state.selected.map((o) => (
      <div key={o.value} className="badge badge-success gap-2" onClick={(e)=> removeItem(e, o.unique)}>
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
    <div className="dropdown" onClick={() => updateState({ opened: true})}>
      <label tabIndex={0} className="select select-bordered w-full">
        <div className="flex gap-1 p-2">{muilipleLabel()}</div>
      </label>
      {state.opened ? renderOptions() : ''}
    </div>
  );
};

export default SelectBox;
