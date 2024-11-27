import { FC } from "react";

interface IPropsMiPrimerComponent {
  text: String;
  color: String;
  fontSize: number;
}

const MiPrimerComponent: FC<IPropsMiPrimerComponent> = ({ text, color, fontSize }) => {
  return (
    <div style={{ color: `${color}`, fontSize: `${fontSize}rem`}}>
      <p>{text}</p>
    </div>
  );
};

export default MiPrimerComponent;
