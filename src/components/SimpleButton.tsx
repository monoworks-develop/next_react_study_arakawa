type SimpleButtonProps = {
  children?: React.ReactNode;
  argFunction: () => void;
};

// 重い処理:ループで時間がかかる
let i = 0;
while (i < 999999999) {
  i++;
}

export const SimpleButton = ({ children, argFunction }: SimpleButtonProps) => {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={argFunction}
        className="px-12 py-2 bg-red-600 text-white rounded-md border-2 border-red-500 shadow-lg hover:bg-red-500 hover:border-red-400 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        {children}
      </button>
    </div>
  );
};
