import CounterRedux from "./CounterRedux/page";
import HelloRedux from "./HelloRedux/page";
import AddRedux from "./AddRedux/page";
import todos from "./todos/TodoList";
export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      {todos()}
    </div>
  );
};
