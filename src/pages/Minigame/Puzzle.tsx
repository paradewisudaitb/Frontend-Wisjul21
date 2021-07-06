import React, {useRef} from 'react';
import './Puzzle.scss';

import PuzzlePiece from '../../component/Puzzle/PuzzlePiece';
import PuzzleBoard from '../../component/Puzzle/PuzzleBoard';

const Puzzle = () => {

  const listRef = useRef<HTMLInputElement>(null);

  const scrollUp = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: -150,
        behavior: 'smooth',
      });
    }
  };

  const scrollDown = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 150,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='puzzle-page'>
      <h1 className='title'>STAGE N</h1>
      <div className='puzzle-container'>
        <div className='puzzle-wrapper-1'>
          <PuzzleBoard id='board-1' className='puzzle-board'>
          </PuzzleBoard>
        </div>

        <div className='puzzle-piece-container'>
          <div className='arrow-up-wrapper'>
            <div className='arrow-up' onClick={scrollUp}></div>
          </div>
          <div className='puzzle-wrapper-2'>
            <PuzzleBoard id='board-2' className='puzzle-board'>
              <div className='board-2-container' ref={listRef}>
                <PuzzlePiece id='piece-1' className='puzzle-piece' draggable='true'>
                </PuzzlePiece>
                <PuzzlePiece id='piece-2' className='puzzle-piece' draggable='true'>
                </PuzzlePiece>
                <PuzzlePiece id='piece-3' className='puzzle-piece' draggable='true'>
                </PuzzlePiece>
                <PuzzlePiece id='piece-4' className='puzzle-piece' draggable='true'>
                </PuzzlePiece>
                <PuzzlePiece id='piece-5' className='puzzle-piece' draggable='true'>
                </PuzzlePiece>
                <PuzzlePiece id='piece-6' className='puzzle-piece' draggable='true'>
                </PuzzlePiece>
                <PuzzlePiece id='piece-7' className='puzzle-piece' draggable='true'>
                </PuzzlePiece>
                <PuzzlePiece id='piece-8' className='puzzle-piece' draggable='true'>
                </PuzzlePiece>
                <PuzzlePiece id='piece-9' className='puzzle-piece' draggable='true'>
                </PuzzlePiece>
                <PuzzlePiece id='piece-10' className='puzzle-piece' draggable='true'>
                </PuzzlePiece>
              </div>
            </PuzzleBoard>      
          </div>
          <div className='arrow-down-wrapper'>
            <div className='arrow-down' onClick={scrollDown}></div>
          </div>
        </div>    
      </div>
    </div>
  );
};

export default Puzzle;