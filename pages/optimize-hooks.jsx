import {
  useState,
  useEffect,
  useReducer,
  useRef,
  memo,
  useMemo,
  useCallback
} from "react";
import { Button, Input } from "antd";

// 根据action类型对state进行更新
function countReducer(state, action) {
  switch (action.type) {
    case "add":
      // 如果是对象，需要返使用Object.assign,才能在子组件监听到数据变化
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
}

function MyCounter() {
  const inputRef = useRef();
  const [count, dispatchCount] = useReducer(countReducer, 0);
  const [name, setName] = useState("jack");

  /**
   * 1.name更新，导致MyCounter函数组件重新渲染，config也会被重新声明
   * 2.使用useMemo声明config,通过传入count控制config是否要重新声明
   * 3.只有count变化才会重新声明config,Child组件才会重新渲染
   * 4.同理对handleButtonClick使用useCallback
   * 5.useMemo用于对象优化，useCallback用于函数优化
   */
  const config = useMemo(() => {
    return {
      text: `count is ${count}`,
      color: count > 3 ? "red" : "green"
    };
  }, [count]);

  const handleButtonClick = useCallback(
    () => dispatchCount({ type: "add" }),
    []
  );

  // 闭包陷阱优化
  const countRef = useRef();
  countRef.current = count;

  const handleAlertButtonClick = function() {
    setTimeout(() => {
      // 闭包陷阱：alert弹出来的值是2s之前的count值
      // class组件的count一般是挂在this上面
      // alert(count);
      alert(countRef.current);
    }, 2000);
  };

  return (
    <div className="optimize">
      <Input
        ref={inputRef}
        value={name}
        onChange={e => setName(e.target.value)}
        type="text"
      />
      <Child config={config} onButtonClick={handleButtonClick} />
      <Button onClick={handleAlertButtonClick}>Alert</Button>
      <style jsx>{`
        .optimize {
          width: 300px;
        }
      `}</style>
    </div>
  );
}

const Child = memo(function Child({ onButtonClick, config }) {
  console.log("child render");
  return (
    <>
      <Button onClick={onButtonClick} style={{ color: config.color }}>
        {config.text}
      </Button>
    </>
  );
});

export default MyCounter;
