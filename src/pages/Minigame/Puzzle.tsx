import React, {useRef} from 'react';
import './Puzzle.scss';

import PuzzlePiece from '../../component/Puzzle/PuzzlePiece';
import PuzzleBoard from '../../component/Puzzle/PuzzleBoard';


const boards = [
  'board-1',
  'board-2',
  'board-3',
  'board-4',
  'board-5',
  'board-6',
  'board-7',
  'board-8',
  'board-9',
  'board-10',
  'board-11',
  'board-12',
  'board-13',
  'board-14',
  'board-15',
  'board-16',
  'board-17',
  'board-18',
  'board-19',
  'board-20',
  'board-21',
  'board-22',
  'board-23',
  'board-24',
  'board-25',
];

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

  const puzzleBoardBox = boards.map((board) => (
    <PuzzleBoard id={board} className='puzzle-board' />
  ));

  return (
    <div className='puzzle-page'>
      <h1 className='title'>STAGE N</h1>
      <div className='puzzle-container'>
        <div className='puzzle-wrapper-1'>
          <div className='puzzle-board-wrapper'>
            {puzzleBoardBox}
          </div>
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