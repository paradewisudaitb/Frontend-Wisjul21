import React, {useRef, FC} from 'react';
import './Puzzle.scss';

import PuzzlePiece from '../../component/Puzzle/PuzzlePiece';
import PuzzleBoard from '../../component/Puzzle/PuzzleBoard';

type props = {
  stage: number,
  n: number,
};

const Puzzle = ({ stage, n }: props) => {

  const boards: string[] = [];
  for (let i = 1; i <= n; ++i) {
    boards.push(`board-${i}`);
  }

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
      <h1 className='title'>STAGE {stage.toString()}</h1>
      <div className='puzzle-container'>

        {/* Puzzle Board */}
        <div className='puzzle-wrapper-1'>
          <div className='puzzle-board-wrapper'>
            {puzzleBoardBox}
          </div>
        </div>

        {/* Puzzle Tray */}
        <div className='puzzle-piece-container'>
          <div className='arrow-up-wrapper'>
            <div className='arrow-up' onClick={scrollUp}></div>
          </div>

          <div className='puzzle-wrapper-2'>
            <PuzzleBoard id='board-2' className='puzzle-board'>
              <div className='board-2-container' ref={listRef}>
                <PuzzlePiece id='piece-1' className='puzzle-piece' draggable='true'>
                  <p className='text-center justify-content-middle'>1</p>
                </PuzzlePiece>
                <PuzzlePiece id='piece-2' className='puzzle-piece' draggable='true'>
                  <p className='text-center justify-content-middle'>2</p>
                </PuzzlePiece>
                <PuzzlePiece id='piece-3' className='puzzle-piece' draggable='true'>
                  <p className='text-center justify-content-middle'>3</p>
                </PuzzlePiece>
                <PuzzlePiece id='piece-4' className='puzzle-piece' draggable='true'>
                  <p className='text-center justify-content-middle'>4</p>
                </PuzzlePiece>
                <PuzzlePiece id='piece-5' className='puzzle-piece' draggable='true'>
                  <p className='text-center justify-content-middle'>5</p>
                </PuzzlePiece>
                <PuzzlePiece id='piece-6' className='puzzle-piece' draggable='true'>
                  <p className='text-center justify-content-middle'>6</p>
                </PuzzlePiece>
                <PuzzlePiece id='piece-7' className='puzzle-piece' draggable='true'>
                  <p className='text-center justify-content-middle'>7</p>
                </PuzzlePiece>
                <PuzzlePiece id='piece-8' className='puzzle-piece' draggable='true'>
                  <p className='text-center justify-content-middle'>8</p>
                </PuzzlePiece>
                <PuzzlePiece id='piece-9' className='puzzle-piece' draggable='true'>
                  <p className='text-center justify-content-middle'>9</p>
                </PuzzlePiece>
                <PuzzlePiece id='piece-10' className='puzzle-piece' draggable='true'>
                  <p className='text-center justify-content-middle'>6</p>
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