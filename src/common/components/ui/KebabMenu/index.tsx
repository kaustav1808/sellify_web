import { NextPage } from 'next';
import styles from './style.module.css';
import { ReactElement, useRef } from 'react';

const KebabMenu: NextPage<{ children: ReactElement }> = (props: {
  children: ReactElement;
}) => {
  const kebab = useRef<HTMLDivElement>(null);
  const middle = useRef<HTMLElement>(null);
  const cross = useRef<HTMLParagraphElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);

  const onButtonClick = () => {
    if (middle.current)
      middle.current?.classList.toggle(`${styles.middle_active}`);
    if (cross.current)
      cross.current?.classList.toggle(`${styles.cross_active}`);
    if (dropdown.current) dropdown.current?.classList.toggle(`dropdown-open`);
  };

  return (
    <div ref={kebab} onClick={onButtonClick} className={styles.kebab}>
      <figure className={styles.figure}></figure>
      <figure ref={middle} className={styles.middle}></figure>
      <p ref={cross} className={styles.cross}>
        x
      </p>
      <figure></figure>
      <div ref={dropdown} className="dropdown dropdown-bottom dropdown-end">
        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          {props.children}
        </ul>
      </div>
    </div>
  );
};

export default KebabMenu;
