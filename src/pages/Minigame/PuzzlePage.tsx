import React, {useRef} from 'react';


import { Navbar } from '../../component/NavbarFooter/Navbar';

import Puzzle from '../../component/Puzzle/Puzzle';

const PuzzlePage = () => {

  return (
    <>
      <Navbar />
      <Puzzle stage={1} n={4}/>
    </>
  );
};

export default PuzzlePage;