import { NextPage } from 'next';
import { TabsType, DefaultTabItem } from '@customtypes/business/Item';
import { getClass } from 'src/services/helpers';

const Tabs: NextPage<TabsType> = (props: TabsType) => {
  return (
    <ul className="flex flex-wrap pl-4 border-b border-gray-200 dark:border-gray-700">
      {props.list.map((item) => (
        <li key={item} className="mr-2" onClick={() => props.changeTab(item)}>
          <a
            href="#"
            aria-current="page"
            className={getClass({
              'inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center':
                true,
              'bg-gray-600 text-blue-500 border-b border-white  active':
                props.selected === item,
              'text-gray-400  hover:bg-gray-600 hover:text-gray-300':
                props.selected !== item,
            })}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
