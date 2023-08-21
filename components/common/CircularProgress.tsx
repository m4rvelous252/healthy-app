import { CSSProperties, ReactNode } from 'react';

interface CircularProgressStyle {
  '--value': string;
  '--size': string;
  '--thickness': string;
}

const CircularProgress = ({
  label,
  value,
}: {
  label: string | ReactNode;
  value: number;
}) => {
  const style: CSSProperties & CircularProgressStyle = {
    '--value': `${value}`,
    '--size': '12rem',
    '--thickness': '2px',
  };

  return (
    <div
      className="radial-progress text-light shadow-[#FC7400] drop-shadow-[0px_0px_6px]"
      style={style}
    >
      {label}
    </div>
  );
};

export default CircularProgress;
