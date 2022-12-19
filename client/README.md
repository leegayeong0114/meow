## client

<hr>

### useReducer
- reducer(리듀서)와 initialState(초기 상태)를 전달하면 useReducer란 훅(Hook)이 새로운 상태(state)와 dispatch(디스패치)함수를 리턴

<pre>
  <code>
    const [state, dispatch] = useReducer(reducer, initialState)

    const reducer = (state, action) => {
      switch (action.type) {
        case 'INCREASE_COUNTER'
          return state + 1
        case 'SET_COUNTER':
          return action.payload
        default:
          return state
      }
    }

    const Test = () => {
      const [state, dispatch] = useReducer(reducer, 0)
      dispatch({type: 'INCREASE_COUNTER', payload: 'qwer'})
    }
  </code>
</pre>
