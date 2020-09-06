const useTimerSeconds = maxSeconds => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (maxSeconds && seconds >= maxSeconds) {
      return undefined;
    }
    const timer = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearTimeout(interval);
  });

  return seconds;
};
