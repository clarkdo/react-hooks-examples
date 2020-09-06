const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return <div>Seconds: {seconds}</div>;
};
