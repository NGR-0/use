import { useRef, useEffect, useState } from "react";

// export default function USR() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//     countRef.current++;

//     console.log("State:", count);
//     console.log("Ref:", countRef.current);
//   };

//   return (
//     <div className="tutorial">
//       Count: {count}
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   );
// }

export default function USR() {
  // const inputRef = useRef<HTMLInputElement | null>(null);
  const refCount = useRef(0);

  // const [input, setInput] = useState("");
  const [stateCount, setStateCount] = useState(0);

  // useEffect(() => {
  //   inputRef.current?.select();
  // }, []);

  // const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput(e.target.value);
  // };

  const increaseRef = () => {
    refCount.current += 1;
    console.log("Ref count:", refCount.current);
  };

  const increaseState = () => {
    setStateCount((prev) => prev + 1);
  };

  return (
    <div className="tutorial">
      {/* <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={handleTyping}
        placeholder="Type something..."
      />
      <p>State input: {input}</p> */}

      <div className="flex gap-4 mt-4">
        <button onClick={increaseRef}>Increment useRef</button>
        <button onClick={increaseState}>Increment useState</button>
      </div>

      <p>useRef count (no re-render): {refCount.current}</p>
      <p>useState count (with re-render): {stateCount}</p>
    </div>
  );
}
