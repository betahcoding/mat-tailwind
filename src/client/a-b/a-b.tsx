import { ReactNode } from 'react';

interface ABProps {
  children?: ReactNode;
}

const AB = (props: ABProps) => {
  return (
    <div>
      <h1>AB Component</h1>
      {props.children}
    </div>
  );
};

export default AB
export { AB, type ABProps }