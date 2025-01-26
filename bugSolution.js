```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct usage of functional update to avoid infinite loop
    if (count % 2 === 0) {
      setCount(prevCount => prevCount + 1);
    }
  }, [count]);

  return <div>Count: {count}</div>;
}
```