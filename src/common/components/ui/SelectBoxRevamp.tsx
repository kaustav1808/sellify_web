import { OptionType, SelectType, StateType } from '@customtypes/ui/SelectBox';
import { NextPage } from 'next';
import { Key, useEffect, useState } from 'react';

const SelectBoxRevamp: NextPage<SelectType> = ({
  options,
  multiple = false,
  onInputChange,
  unique = 'id',
  label = 'name',
  selected = []
}: SelectType) => {
  const [state, setState] = useState<StateType>({
    selected: [],
    opened: false,
  });

  useEffect(()=>{
    if(selected) {
      let updatedSelec = Array.isArray(selected) ?
        selected.map((o: any)=>({label:typeof o === 'object'? o[unique] : o,unique:typeof o === 'object'? o[label] : o}))
        : [{label:selected,unique:selected}]
      updateState({selected:updatedSelec})
    }
  },[selected])

  let tranOpt:OptionType[] = options.map((o: any)=>({label:typeof o === 'object'? o[unique] : o,unique:typeof o === 'object'? o[label] : o}))

  const updateState = (obj: any) => {
    const curr = state;
    setState({ ...curr, ...obj });
  };

  const selectOption = (e: any, value: number | string) => {
    e.stopPropagation();
    const selectedOption = e.target;
    let label = selectedOption.innerHTML;
    let unique = selectedOption.id;

    let curr = state.selected;
    let newObj = {
      label,
      unique,
    };

    let checkIfExists = curr.filter(
      (o: any) => o.unique == unique,
    ).length;

    if (checkIfExists) {
      returnSelected(curr);
      return;
    }

    if (multiple) {
      curr.push(newObj);
    } else {
      curr = [newObj];
    }

    returnSelected(curr);
    updateState({ selected: curr, opened: false });
  };

  const returnSelected = (arr: any) => {
    const selectedValues = arr.map((o: OptionType) => o.unique);
    onInputChange(selectedValues);
  };

  const removeItem = (e: any, key: Key|null|undefined) => {
    e.stopPropagation();
    let curr = state.selected;
    curr = curr.filter((o: { unique: Key|null|undefined }) => key !== o.unique);
    returnSelected(curr);
    updateState({ selected: curr });
  };

  const muilipleLabel = () => {
    if (!state.selected.length) return <div>Select An Option</div>;
    return state.selected.map((o: any) => (
      <div
        key={o.unique}
        className="badge badge-success gap-2"
        onClick={(e) => removeItem(e, o.unique)}
      >
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
        {tranOpt.map((o: any) => (
          <li
            key={o.unique}
            onClick={(e) => selectOption(e, o)}
          >
            <label id={o.unique}>
              {o.label}{' '}
            </label>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="dropdown" onClick={() => updateState({ opened: true })}>
      <label tabIndex={0} className="select select-bordered w-full">
        <div className="flex gap-1 p-2">{muilipleLabel()}</div>
      </label>
      {state.opened ? renderOptions() : ''}
    </div>
  );
};

export default SelectBoxRevamp;
