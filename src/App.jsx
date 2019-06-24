import React from 'react';
import _ from 'lodash';


  function getMatches(regex, text) {
    var results = [];
    var result;
    if (regex.global) {
      while((result = regex.exec(text)) !== null) {
        results.push(result);
      }
    } else {
      results.push(regex.exec(text));
    }
    return results;
  } 


function getElements(text, highlight){

   const inputText = String(text);
   //console.log('inputText:', inputText);

   const searchWord = String(highlight);

   const regex = new RegExp(`\\b${highlight}\\b`, 'gi');

   //console.log('regex: ', regex);
   const results = getMatches(regex, inputText);

   let elements = [];

      
   for (let i = results.length - 1; i >= 0; i-- ) {
      let result = results[i];
      //console.log('result:',  result);
      let prefix = text.substr(0, result.index);
      let suffix = text.substr(result.index + searchWord.length);
      //console.log('prefix:',  prefix, 'suffix:', suffix);
      let element = {prefix, suffix};
      elements.push(element);


   }

   return elements;



}


const Highlighted = ({text = '', highlight = ''}) => {
   
   const elements = getElements(text, highlight);

   return (

         <div>{elements.map((element, index) => (
            <span key={index}>{element.prefix}<mark>{highlight}</mark>{element.suffix}</span>
          ))}

          </div>

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



