import { useState, useEffect } from "react";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [borderColorIndex, setBorderColorIndex] = useState(0);
  const [customProfit, setCustomProfit] = useState<string>("");

  // 生成 5% 到 100%
  const percentages = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);

  const handleCustomProfitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const profit = parseFloat(customProfit);
    if (!isNaN(profit) && profit >= 0) {
      setActiveButton(profit);
      setCustomProfit("");
    }
  };

  const handleButtonClick = (percentage: number) => {
    setActiveButton((prev) => (prev === percentage ? null : percentage));
  };

  const borderColors = [
    "border-red-500",
    "border-yellow-500",
    "border-blue-500",
    "border-green-500",
  ];

  const textColors = [
    "text-red-700",
    "text-yellow-700",
    "text-blue-700",
    "text-green-700",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBorderColorIndex((prev) => (prev + 1) % borderColors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col p-4 space-y-4 overflow-auto">
      <header
        className="h-16 bg-white dark:bg-gray-700 rounded-2xl
                   flex items-center px-4 gap-2"
      >
        {/* 自訂利潤表單 */}
        <form
          onSubmit={handleCustomProfitSubmit}
          className="flex items-center gap-2"
        >
          <label
            htmlFor="customProfitInput"
            className="text-gray-700 dark:text-gray-300 font-medium text-lg whitespace-nowrap"
          >
            自訂利潤：
          </label>

          <div className="max-w-md">
            <input
              type="number"
              id="customProfitInput"
              value={customProfit}
              onChange={(e) => setCustomProfit(e.target.value)}
              className="w-full py-1.5 pl-2  pr-4 rounded-2xl
                            bg-gray-100 dark:bg-gray-800 text-yellow-400
                            border-2 border-yellow-200 text-center
                            focus:outline-none focus:border-transparent
                            focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-1 bg-[#00FF00] rounded-2xl
                       font-medium  text-gray-800 text-lg
                       hover:bg-[#00DD00] transition-colors whitespace-nowrap"
          >
            提交
          </button>
        </form>
      </header>

      <div className="h-full bg-gray-100 dark:bg-gray-700 rounded-2xl p-4 overflow-auto flex flex-col">
        <div className="flex-3">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 h-full p-6 place-items-center">
            {percentages.map((percentage) => (
              <Button
                key={percentage}
                onClick={() => handleButtonClick(percentage)}
                isActive={activeButton === percentage}
              >
                {percentage}%
              </Button>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full flex flex-col md:flex-row items-center justify-around gap-4 md:gap-0">
          <div
            className={`w-32 h-32 md:w-40 md:h-40 rounded-full border-4 ${borderColors[borderColorIndex]}
                        bg-gray-100 flex items-center justify-center transition-colors duration-500`}
          >
            <h1
              className={`text-xl md:text-2xl font-bold transition-colors duration-500 overflow-auto
                          ${textColors[borderColorIndex]}`}
            >
              {activeButton || 0}%
            </h1>
          </div>

          <Link
            to="/profit"
            state={{ percentage: activeButton || 0 }}
            className="py-4 px-6 md:py-10 md:px-30 bg-yellow-300 rounded-2xl
                       font-extrabold text-xl md:text-2xl text-red-500
                       hover:bg-yellow-400 transition-colors
                       flex items-center justify-center cursor-pointer whitespace-nowrap"
          >
            導向計算頁面
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
