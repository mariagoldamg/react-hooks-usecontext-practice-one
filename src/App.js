
//useContext passes data into components without using props
// Redux does the same things

import './App.css';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import { useState } from 'react';
import { Context } from './Context';


function App() {

  const [context, setContext] = useState("Initial State")//context we gonna use in a different component

  return (

<Context.Provider value={[context, setContext]}> {/* have to use Provider i  order to use useContext */}
<ComponentOne/>{/* provider is a component that allows all daughter components to follow all the context changes */}
<ComponentTwo/>{/* prop value will be passed to other components, everything will be rendered as soon as the value will change  */}

</Context.Provider>
  
  );
}

export default App;
