import logo from './logo.svg';
import './App.css';

import React from 'react';
import DisplaySimpson from './QuoteCard';

import axios from 'axios';

const sampleSimpson = {
  quote:
  "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
  character: 'Lisa Simpson',
  image:
  'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
  characterDirection: 'Right',
}


function App() {
  const [simpson, setSimpson] = useState(sampleSimpson);
  const getSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      console.log(data);
      });
  };
  return (
    <div className='App'>
      <DisplaySimpson simpson={sampleSimpson} />
      <button type="button" onClick={getSimpson}>Get Simpson</button>
    </div>
  );
}

export default App;

// FONCTION DE L'EXERCICE DE LA QUETE 12  AVEC QUOTECARD :
// function App() {
//   const [queSimpson, setShowFailedOnly] = React.useState(false);
//   const [quoteList, setQuoteList] = React.useState([
//     {
//       quote:
//         "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
//       character: 'Lisa Simpson',
//       image:
//         'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
//       characterDirection: 'Right',
//     },
//     {
//       quote:
//         'I live in a single room above a bowling alley...and below another bowling alley.',
//       character: 'Frank Grimes',
//       image:
//         'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887',
//       characterDirection: 'Left',
//     },
//     {
//       quote: 'Ahh! Sweet liquor eases the pain.',
//       character: 'Troy McClure',
//       image:
//         'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112',
//       characterDirection: 'Right',
//     },
//     {
//       quote:
//         'Shoplifting is a victimless crime, like punching someone in the dark.',
//       character: 'Nelson Muntz',
//       image:
//         'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
//       characterDirection: 'Left',
//     },
//     {
//       quote:
//         "You're turning me into a criminal when all I want to be is a petty thug.",
//       character: 'Bart Simpson',
//       image:
//         'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
//       characterDirection: 'Right',
//     },
//     {
//       quote: "But my mom says I'm cool.",
//       character: 'Milhouse Van Houten',
//       image:
//         'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002',
//       characterDirection: 'Right',
//     },
//     {
//       quote:
//         'For once maybe someone will call me "sir" without adding, "You\'re making a scene."',
//       character: 'Homer Simpson',
//       image:
//         'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
//       characterDirection: 'Right',
//     },
//     {
//       quote: "Nothing you say can upset us. We're the MTV generation.",
//       character: 'Bart Simpson',
//       image:
//         'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
//       characterDirection: 'Right',
//     },
//     {
//       quote: 'Oh, so they have Internet on computers now!',
//       character: 'Homer Simpson',
//       image:
//         'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
//       characterDirection: 'Right',
//     },
//     {
//       quote: 'Ahh! Sweet liquor eases the pain.',
//       character: 'Troy McClure',
//       image:
//         'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112',
//       characterDirection: 'Right',
//     },
//   ]);
//   function handleShowFailedOnlyClick() {
//     setShowFailedOnly(!queSimpson);
//   }
//   return (
//     <div>
//       <button onClick={handleShowFailedOnlyClick}>
//         Simpsons family Only :{queSimpson ? true : false}
//       </button>
//       {quoteList
//         .filter(
//           (personnage) => queSimpson || personnage.character.includes('Simpson')
//         )
//         .map((quote, index) => (
//           <QuoteCard key={index} {...quote} />
//         ))}
//     </div>
//   );
// }
