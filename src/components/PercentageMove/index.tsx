type PercentageMoveProps = {
  value: string;
  fontSize?: string;
};

const PercentageMove = ({ value, fontSize = '' }: PercentageMoveProps) => {
  const isMinus = value[0] === '-';
  const textClassName = isMinus ? 'ml-2 font-bold text-red-500 ' : 'ml-2 font-bold text-green-500 ';
  const arrowClassName = isMinus
    ? 'w-0 h-0 border-l-[6px] border-l-transparent border-t-[9px] border-t-red-500 border-r-[6px] border-r-transparent'
    : 'w-0 h-0 border-l-[6px] border-l-transparent border-b-[9px] border-b-green-500 border-r-[6px] border-r-transparent';

  return (
    <div className="flex items-center mt-2">
      <div className={arrowClassName} />
      <span className={textClassName + fontSize}>{(isMinus ? value.slice(1) : value) + '%'}</span>
    </div>
  );
};

PercentageMove.displayName = 'PercentageMoveComponent';

export default PercentageMove;
