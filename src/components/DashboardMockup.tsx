import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";

const DashboardMockup = () => {
  // 5日間の時間ごとのデータ（通話状態別）
  const callStatusData = [
    // 4/28のデータ
    {
      date: "4/28",
      hour: "9:00",
      "9秒以内に通話確立": 12,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 1,
    },
    {
      date: "4/28",
      hour: "10:00",
      "9秒以内に通話確立": 15,
      "9秒以上待って通話確立": 4,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 1,
    },
    {
      date: "4/28",
      hour: "11:00",
      "9秒以内に通話確立": 10,
      "9秒以上待って通話確立": 2,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/28",
      hour: "12:00",
      "9秒以内に通話確立": 8,
      "9秒以上待って通話確立": 1,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/28",
      hour: "13:00",
      "9秒以内に通話確立": 9,
      "9秒以上待って通話確立": 2,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/28",
      hour: "14:00",
      "9秒以内に通話確立": 11,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/28",
      hour: "15:00",
      "9秒以内に通話確立": 13,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/28",
      hour: "16:00",
      "9秒以内に通話確立": 17,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 1,
    },
    {
      date: "4/28",
      hour: "17:00",
      "9秒以内に通話確立": 11,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/28",
      hour: "18:00",
      "9秒以内に通話確立": 8,
      "9秒以上待って通話確立": 2,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/28",
      hour: "19:00",
      "9秒以内に通話確立": 6,
      "9秒以上待って通話確立": 1,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },

    // 4/29のデータ
    {
      date: "4/29",
      hour: "9:00",
      "9秒以内に通話確立": 13,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/29",
      hour: "10:00",
      "9秒以内に通話確立": 16,
      "9秒以上待って通話確立": 4,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 1,
    },
    {
      date: "4/29",
      hour: "11:00",
      "9秒以内に通話確立": 14,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/29",
      hour: "12:00",
      "9秒以内に通話確立": 9,
      "9秒以上待って通話確立": 1,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/29",
      hour: "13:00",
      "9秒以内に通話確立": 10,
      "9秒以上待って通話確立": 2,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/29",
      hour: "14:00",
      "9秒以内に通話確立": 13,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/29",
      hour: "15:00",
      "9秒以内に通話確立": 14,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/29",
      hour: "16:00",
      "9秒以内に通話確立": 20,
      "9秒以上待って通話確立": 4,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 1,
    },
    {
      date: "4/29",
      hour: "17:00",
      "9秒以内に通話確立": 15,
      "9秒以上待って通話確立": 4,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/29",
      hour: "18:00",
      "9秒以内に通話確立": 12,
      "9秒以上待って通話確立": 2,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/29",
      hour: "19:00",
      "9秒以内に通話確立": 8,
      "9秒以上待って通話確立": 1,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },

    // 4/30のデータ
    {
      date: "4/30",
      hour: "9:00",
      "9秒以内に通話確立": 13,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/30",
      hour: "10:00",
      "9秒以内に通話確立": 14,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 1,
    },
    {
      date: "4/30",
      hour: "11:00",
      "9秒以内に通話確立": 11,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/30",
      hour: "12:00",
      "9秒以内に通話確立": 8,
      "9秒以上待って通話確立": 1,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/30",
      hour: "13:00",
      "9秒以内に通話確立": 8,
      "9秒以上待って通話確立": 2,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/30",
      hour: "14:00",
      "9秒以内に通話確立": 11,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/30",
      hour: "15:00",
      "9秒以内に通話確立": 15,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/30",
      hour: "16:00",
      "9秒以内に通話確立": 18,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 1,
    },
    {
      date: "4/30",
      hour: "17:00",
      "9秒以内に通話確立": 14,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/30",
      hour: "18:00",
      "9秒以内に通話確立": 9,
      "9秒以上待って通話確立": 2,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "4/30",
      hour: "19:00",
      "9秒以内に通話確立": 7,
      "9秒以上待って通話確立": 1,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },

    // 5/1のデータ
    {
      date: "5/1",
      hour: "9:00",
      "9秒以内に通話確立": 16,
      "9秒以上待って通話確立": 4,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "5/1",
      hour: "10:00",
      "9秒以内に通話確立": 17,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 1,
    },
    {
      date: "5/1",
      hour: "11:00",
      "9秒以内に通話確立": 12,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "5/1",
      hour: "12:00",
      "9秒以内に通話確立": 10,
      "9秒以上待って通話確立": 1,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "5/1",
      hour: "13:00",
      "9秒以内に通話確立": 11,
      "9秒以上待って通話確立": 2,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "5/1",
      hour: "14:00",
      "9秒以内に通話確立": 14,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "5/1",
      hour: "15:00",
      "9秒以内に通話確立": 16,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "5/1",
      hour: "16:00",
      "9秒以内に通話確立": 19,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 1,
    },
    {
      date: "5/1",
      hour: "17:00",
      "9秒以内に通話確立": 17,
      "9秒以上待って通話確立": 4,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "5/1",
      hour: "18:00",
      "9秒以内に通話確立": 12,
      "9秒以上待って通話確立": 2,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "5/1",
      hour: "19:00",
      "9秒以内に通話確立": 9,
      "9秒以上待って通話確立": 1,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },

    // 5/2のデータ
    {
      date: "5/2",
      hour: "9:00",
      "9秒以内に通話確立": 14,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "5/2",
      hour: "10:00",
      "9秒以内に通話確立": 18,
      "9秒以上待って通話確立": 4,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 1,
    },
    {
      date: "5/2",
      hour: "11:00",
      "9秒以内に通話確立": 12,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "5/2",
      hour: "12:00",
      "9秒以内に通話確立": 9,
      "9秒以上待って通話確立": 1,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "5/2",
      hour: "13:00",
      "9秒以内に通話確立": 10,
      "9秒以上待って通話確立": 2,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "5/2",
      hour: "14:00",
      "9秒以内に通話確立": 13,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "5/2",
      hour: "15:00",
      "9秒以内に通話確立": 14,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "5/2",
      hour: "16:00",
      "9秒以内に通話確立": 20,
      "9秒以上待って通話確立": 4,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 1,
    },
    {
      date: "5/2",
      hour: "17:00",
      "9秒以内に通話確立": 15,
      "9秒以上待って通話確立": 3,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "5/2",
      hour: "18:00",
      "9秒以内に通話確立": 12,
      "9秒以上待って通話確立": 2,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
    {
      date: "5/2",
      hour: "19:00",
      "9秒以内に通話確立": 8,
      "9秒以上待って通話確立": 1,
      "9秒以上待って放棄": 1,
      "9秒以内に放棄": 0,
    },
  ];

  // 日内データ - 9:00-19:00に統一
  const hourlyData = [
    { time: "9:00", count: 23 },
    { time: "9:30", count: 28 },
    { time: "10:00", count: 18 },
    { time: "10:30", count: 15 },
    { time: "11:00", count: 12 },
    { time: "11:30", count: 17 },
    { time: "12:00", count: 9 },
    { time: "12:30", count: 6 },
    { time: "13:00", count: 12 },
    { time: "13:30", count: 16 },
    { time: "14:00", count: 19 },
    { time: "14:30", count: 17 },
    { time: "15:00", count: 14 },
    { time: "15:30", count: 22 },
    { time: "16:00", count: 25 },
    { time: "16:30", count: 30 },
    { time: "17:00", count: 24 },
    { time: "17:30", count: 18 },
    { time: "18:00", count: 13 },
    { time: "18:30", count: 10 },
    { time: "19:00", count: 7 },
  ];

  // ツールチップの型定義
  interface TooltipProps {
    active?: boolean;
    payload?: Array<{
      value: number;
      name: string;
      color: string;
      dataKey: string;
      payload: Record<string, unknown>;
    }>;
    label?: string;
  }

  // カスタムツールチップ
  const CustomTooltip: React.FC<TooltipProps> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length) {
      const date = payload[0].payload.date as string;
      return (
        <div className="bg-gray-800 text-white p-2 rounded text-xs">
          <p className="font-bold">{date} {label}</p>
          {payload.map((entry, index: number) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {entry.name}: {entry.value}件
            </p>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bg-gray-100 p-6 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">コールセンターダッシュボード</h1>
        <div className="flex items-center space-x-3">
          <button className="text-gray-600 hover:text-blue-500 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
          <div className="flex items-center">
            <span className="mr-2 text-sm font-medium">電話受付</span>
            <div className="relative inline-block w-12 align-middle select-none">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="absolute block w-6 h-6 bg-white rounded-full border-4 appearance-none cursor-pointer focus:outline-none checked:right-0 checked:border-green-500 transition-all duration-200 ease-in-out"
                defaultChecked
              />
              <label
                htmlFor="toggle"
                className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer checked:bg-green-500"
              >
                <span className="sr-only">電話受付</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* 上段: 重要KPI */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm font-semibold text-gray-500">今日の着信数</h2>
          <p className="text-3xl font-bold">243</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm font-semibold text-gray-500">放棄呼数</h2>
          <p className="text-3xl font-bold">18</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm font-semibold text-gray-500">応答率</h2>
          <p className="text-3xl font-bold">92.6%</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm font-semibold text-gray-500">9秒内応答率</h2>
          <p className="text-3xl font-bold">85.1%</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm font-semibold text-gray-500">平均待ち時間</h2>
          <p className="text-3xl font-bold">7.2秒</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm font-semibold text-gray-500">
            9秒以上待たされた
          </h2>
          <p className="text-3xl font-bold">32</p>
        </div>
      </div>

      {/* 中段: グラフエリア */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* 左側: 一週間の受電状況 */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">
            直近5日間の1時間ごとの受電状況（通話状態別）
          </h2>
          <div className="border-t border-gray-200 pt-3">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={callStatusData}
                  margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                  barSize={12}
                  barGap={0}
                  barCategoryGap={1}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    opacity={0.3}
                  />
                  <XAxis
                    dataKey="hour"
                    height={0}
                    tick={false}
                    axisLine={false}
                  />
                  <YAxis hide={true} />
                  <Tooltip
                    content={<CustomTooltip />}
                    formatter={(value, name) => {
                      return [`${value}件`, name];
                    }}
                    labelFormatter={(label, payload) => {
                      if (payload && payload.length > 0) {
                        return `${payload[0].payload.date} ${label}`;
                      }
                      return label;
                    }}
                  />
                  <Bar
                    dataKey="9秒以内に通話確立"
                    stackId="status"
                    fill="#10B981"
                    name="9秒以内に通話確立"
                  />
                  <Bar
                    dataKey="9秒以上待って通話確立"
                    stackId="status"
                    fill="#FBBF24"
                    name="9秒以上待って通話確立"
                  />
                  <Bar
                    dataKey="9秒以上待って放棄"
                    stackId="status"
                    fill="#8B5CF6"
                    name="9秒以上待って放棄"
                  />
                  <Bar
                    dataKey="9秒以内に放棄"
                    stackId="status"
                    fill="#EF4444"
                    name="9秒以内に放棄"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 右側: 今日の対応状況 */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">今日の対応状況</h2>
          <div className="border-t border-gray-200 pt-3">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={hourlyData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#3B82F6"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="time" />
                  <YAxis hide={true} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="count"
                    stroke="#3B82F6"
                    fillOpacity={1}
                    fill="url(#colorCount)"
                    name="着信数"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* 中段下: オペレーター情報エリア */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* 左側: Idle状態のオペレーターと現在のオペレーター数 */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">オペレーター状況</h2>
            <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
              <span className="font-bold">現在のオペレーター数: </span>15
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <div className="max-h-32 overflow-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="text-left text-xs font-semibold text-gray-500">
                    <th className="pb-2">名前</th>
                    <th className="pb-2">Idle開始</th>
                    <th className="pb-2">ステータス</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="py-1">山田 花子</td>
                    <td className="py-1">12:05</td>
                    <td className="py-1">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs">
                        休憩中
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1">鈴木 一郎</td>
                    <td className="py-1">12:10</td>
                    <td className="py-1">
                      <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                        待機中
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1">佐藤 健太</td>
                    <td className="py-1">12:15</td>
                    <td className="py-1">
                      <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                        待機中
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 右側: 注意が必要なオペレーター */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">
            注意が必要なオペレーター
          </h2>
          <div className="border-t border-gray-200 pt-3">
            <div className="max-h-32 overflow-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="text-left text-xs font-semibold text-gray-500">
                    <th className="pb-2">名前</th>
                    <th className="pb-2">理由</th>
                    <th className="pb-2">値</th>
                    <th className="pb-2">ステータス</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="py-1">高橋 誠</td>
                    <td className="py-1">対応時間超過</td>
                    <td className="py-1 text-red-600 font-semibold">32分</td>
                    <td className="py-1">
                      <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs">
                        要対応
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1">渡辺 真理</td>
                    <td className="py-1">コール放棄率</td>
                    <td className="py-1 text-red-600 font-semibold">15%</td>
                    <td className="py-1">
                      <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs">
                        要対応
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1">中村 剛</td>
                    <td className="py-1">休憩時間超過</td>
                    <td className="py-1 text-orange-600 font-semibold">43分</td>
                    <td className="py-1">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs">
                        監視中
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* 下段: タスク情報エリア */}
      <div className="grid grid-cols-2 gap-6">
        {/* 左: 対応時間が15分以上のタスク */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">
            対応時間が15分以上のタスク
          </h2>
          <div className="border-t border-gray-200 pt-3">
            <div className="max-h-36 overflow-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="text-left text-xs font-semibold text-gray-500">
                    <th className="pb-2">オペレーター</th>
                    <th className="pb-2">顧客ID</th>
                    <th className="pb-2">開始時間</th>
                    <th className="pb-2">経過</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="py-1">田中 明</td>
                    <td className="py-1">CUS-7823</td>
                    <td className="py-1">11:45</td>
                    <td className="py-1 text-red-600 font-semibold">32分</td>
                  </tr>
                  <tr>
                    <td className="py-1">小林 恵</td>
                    <td className="py-1">CUS-8154</td>
                    <td className="py-1">11:52</td>
                    <td className="py-1 text-red-600 font-semibold">25分</td>
                  </tr>
                  <tr>
                    <td className="py-1">伊藤 大輔</td>
                    <td className="py-1">CUS-8192</td>
                    <td className="py-1">12:02</td>
                    <td className="py-1 text-orange-600 font-semibold">15分</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 右: 30分以上未報告のタスク */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">30分以上未報告のタスク</h2>
          <div className="border-t border-gray-200 pt-3">
            <div className="max-h-36 overflow-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="text-left text-xs font-semibold text-gray-500">
                    <th className="pb-2">タスクID</th>
                    <th className="pb-2">担当者</th>
                    <th className="pb-2">作成時間</th>
                    <th className="pb-2">未報告</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="py-1">TK-4562</td>
                    <td className="py-1">加藤 隆</td>
                    <td className="py-1">11:10</td>
                    <td className="py-1 text-red-600 font-semibold">
                      1時間7分
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1">TK-4570</td>
                    <td className="py-1">中村 優</td>
                    <td className="py-1">11:25</td>
                    <td className="py-1 text-red-600 font-semibold">52分</td>
                  </tr>
                  <tr>
                    <td className="py-1">TK-4583</td>
                    <td className="py-1">吉田 真</td>
                    <td className="py-1">11:38</td>
                    <td className="py-1 text-orange-600 font-semibold">39分</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
