export default function Square({ value, squareHandleClick }) {
  return (
    <div>
      <button
        onClick={squareHandleClick}
        className={`p-2 m-1 bg-amber-50 border-2 rounded-xl sm:h-20 h-14 w-14 sm:w-20 font-bold text-xl `}
      >
        {value}
      </button>
    </div>
  );
}
