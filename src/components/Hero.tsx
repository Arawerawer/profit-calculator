import { useState, useEffect } from "react";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [borderColorIndex, setBorderColorIndex] = useState(0);
  const [customProfit, setCustomProfit] = useState<string>("");

  // 生成 5% 到 100% 的数组
  const percentages = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);

  // 处理自订利润提交
  const handleCustomProfitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const profit = parseFloat(customProfit);
    if (!isNaN(profit) && profit >= 0) {
      setActiveButton(profit);
      setCustomProfit(""); // 清空输入框
    }
  };

  // 颜色循环：红 → 黄 → 蓝 → 绿
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

  // 每3秒切换颜色
  useEffect(() => {
    const interval = setInterval(() => {
      setBorderColorIndex((prev) => (prev + 1) % borderColors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col p-4 space-y-4">
      <header
        className="h-16 bg-white dark:bg-gray-700 rounded-2xl
                   flex items-center px-4 gap-2"
      >
        {/* 自訂利潤標籤 */}
        <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">
          自訂利潤：
        </span>

        <form
          onSubmit={handleCustomProfitSubmit}
          className="flex items-center gap-2"
        >
          <div className="max-w-md">
            <input
              type="number"
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
                       hover:bg-[#00DD00] transition-colors"
          >
            提交
          </button>
        </form>
      </header>

      <div className="h-full bg-gray-100 dark:bg-gray-700 rounded-2xl p-4">
        <div className="h-3/4">
          <div className="grid grid-cols-4 grid-rows-5 gap-8 h-full p-10 place-items-center">
            {percentages.map((percentage) => (
              <Button
                key={percentage}
                onClick={() =>
                  setActiveButton(
                    activeButton === percentage ? null : percentage
                  )
                }
                isActive={activeButton === percentage}
              >
                {percentage}%
              </Button>
            ))}
          </div>
        </div>

        <div className="h-1/4 w-full pl-25 flex items-center justify-around">
          <div
            className={`w-40 h-40 rounded-full border-4 ${borderColors[borderColorIndex]}
                          bg-gray-100 flex items-center justify-center transition-colors duration-500`}
          >
            <h1
              className={`text-2xl font-bold transition-colors duration-500 overflow-auto
                             ${textColors[borderColorIndex]}`}
            >
              {activeButton || 0}%
            </h1>
          </div>

          <Link
            to="/profit"
            state={{ percentage: activeButton || 0 }}
            className="py-10 px-30 bg-yellow-300 rounded-2xl
                       font-extrabold text-2xl text-red-500
                       hover:bg-yellow-400 transition-colors
                       flex items-center justify-center cursor-pointer"
          >
            導向計算頁面
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
