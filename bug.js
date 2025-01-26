```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic to update count only when it's even
    if (count % 2 === 0) {
      setCount(count + 1);
    }
  }, [count]);

  return <div>Count: {count}</div>;
}
```