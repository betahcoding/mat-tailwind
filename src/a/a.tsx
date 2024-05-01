import { ReactNode } from 'react';

interface AProps {
  children?: ReactNode;
}

const A = (props: AProps) => {
  return (
    <div>
      <h1>A Component</h1>
      {props.children}
    </div>
  );
};

export default A
export { A, type AProps }