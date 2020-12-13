import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import Head from '../components/Head';
import UNMBackground from '../components/layouts/UNMBackground';

// TODO: Display work/collections/art
// const IndexWorks = () => {
//   return (
//     <IndexActions>
//       <section>
//         hihih
//       </section>
//       <section>
//         <ReactPlayer
//           height="100%"
//           width="100%"
//           url='https://www.youtube.com/watch?v=ajkItiDgTLY'
//           config={{ youtube: { playerVars: { color: 'white', controls: 1, playsinline: 0, rel: 0 } } }}
//         />
//       </section>
//     </IndexActions>
//   )
// }

const IndexActions = styled.div`
  position: relative;
  top: 100vh;
  min-height: 100vh;
  padding: 4em;
  section {
    height: 100vh;
    padding: 8em 0;
    background: black;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function IndexPage() {
  return (
    <>
      <Head />
      <UNMBackground />
    </>
  );
}
