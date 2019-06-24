import React from 'react';
import _ from 'lodash';


const Highlighted = ({text = '', highlight = ''}) => {
   if (!highlight.trim()) {
     return <span>{text}</span>
   }
   const regex = new RegExp(`(${_.escapeRegExp(highlight)})`, 'gi')
   //const regex = new RegExp(`${(highlight)}`, 'gi')
   const parts = text.split(regex)
   return (
     <span>
        {parts.filter(part => part).map((part, i) => (
            regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
        ))}
    </span>
   )
}

class App extends  React.Component {

  render() {
    const search = "jumps";
    const sentence = "The quick brown fox jumps over the lazy dog";
    return (

    	<div>
  			<Highlighted text={sentence} highlight={search}/>
    	</div>

    );
  }
}

export default App;



