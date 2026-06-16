"use client";

import { useState, useEffect } from "react";

const DAY_MAP: Record<string, number> = {
  Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 0,
};

function parseTime(s: string): number {
  const m = s.match(/^(\d+)(?::(\d+))?(am|pm)$/);
  if (!m) return 0;
  let h = parseInt(m[1]);
  const min = m[2] ? parseInt(m[2]) : 0;
  const period = m[3];
  if (period === "pm" && h !== 12) h += 12;
  if (period === "am" && h === 12) h = 0;
  return h * 60 + min;
}

function checkOpen(hours: string[]): boolean {
  const ptStr = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
  const pt = new Date(ptStr);
  const dayOfWeek = pt.getDay();
  const currentMins = pt.getHours() * 60 + pt.getMinutes();

  for (const line of hours) {
    // matches "Mon–Thu 11:30am–11pm" or "Fri–Sat 11:30am–12am" or "Sun 11:30am–11pm"
    const m = line.match(/^([A-Z][a-z]+)(?:[–\-]([A-Z][a-z]+))?\s+(\S+)[–\-](\S+)$/);
    if (!m) continue;
    const startDay = DAY_MAP[m[1]];
    const endDay = m[2] ? DAY_MAP[m[2]] : startDay;
    const openMins = parseTime(m[3]);
    let closeMins = parseTime(m[4]);
    if (closeMins === 0) closeMins = 1440; // 12am = end of day

    const inRange =
      startDay <= endDay
        ? dayOfWeek >= startDay && dayOfWeek <= endDay
        : dayOfWeek >= startDay || dayOfWeek <= endDay;

    if (inRange && currentMins >= openMins && currentMins < closeMins) return true;
  }
  return false;
}

export default function OpenStatus({ hours }: { hours: string[] }) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(checkOpen(hours));
    const id = setInterval(() => setOpen(checkOpen(hours)), 60_000);
    return () => clearInterval(id);
  }, [hours]);

  if (open === null) return null;

  return (
    <span
      className="inline-flex items-center gap-1.5 font-grotesk text-[11px] font-bold uppercase tracking-[0.1em]"
      style={{ color: open ? "#22c55e" : "#a89880" }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: open ? "#22c55e" : "#a89880" }}
      />
      {open ? "Open Now" : "Closed"}
    </span>
  );
}
