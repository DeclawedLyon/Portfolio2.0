import { useState } from 'react';

export default function useVisualMode(initial: string) {
  const [mode, setMode] = useState<string>(initial);
  const [history, setHistory] = useState<string[]>([initial]);

  const back = (): void => {
    if (history.length > 1) {
      let tempHistory = [...history];
      tempHistory.pop();
      setHistory(tempHistory);
      setMode(history[history.length - 2]);
    }
  };

  const transition = (newMode: string, replace: boolean = false): void => {
    if (replace) {
      let tempHistory = [...history];
      tempHistory.pop();
      tempHistory.push(newMode);
      setHistory(tempHistory);
      setMode(newMode);
    } else {
      setHistory(prevHistory => [...prevHistory, newMode]);
      setMode(newMode);
    }
  };

  return { mode, transition, back };
}
