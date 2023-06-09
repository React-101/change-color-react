import { useEffect, useState } from "react";
import colors from "./common/colors";


function AppFunction() {

  // console.log('h1');
  // useEffect(()=> {
  //   console.log('h2');
  //   const randomIndex = Math.floor(Math.random() * colors.length);


  //   document.body.style.backgroundColor = colors[randomIndex];
  //   console.log(randomIndex)
  // }, []);

  

  const [state, setState] = useState({ currentIndexColor: 0 })
  console.log('state', state);
  console.log('setState', setState);

  useEffect(()=>{
    const randomIndex = Math.floor(Math.random() * colors.length);
    setState({ currentIndexColor: randomIndex })
  }, []);

  useEffect(()=> {
    document.body.style.backgroundColor = colors[state.currentIndexColor];
  }, [state.currentIndexColor])


  return (
    <div id="app">
      <h1 id="current-color">{colors[state.currentIndexColor]}</h1>

      <div className="colors">
        {
          colors.map(
            (color, index) => {
              return <button
                key={`color-${index}`}
                className={index === state.currentIndexColor ? 'active': ''}
                style={{
                  backgroundColor: color
                }}
                onClick={()=> {
                  console.log('clicked', index)
                  setState({ currentIndexColor: index })
                }}
              ></button>
            }
          )
        }
      </div>
    </div>
  );
}

export default AppFunction;
