import React, {useRef} from 'react';
import './Puzzle.scss';

import PuzzlePiece from './PuzzlePiece';
import PuzzleBoard from './PuzzleBoard';

type props = {
  stage: string,
  n: number,
};

const Puzzle = ({stage, n}: props) => {

  // PUZZLE SIZE
  const boardSize = 35;
  const boardSizeUnit = 'em';
  const puzzlePieceSize = boardSize / n;
  let boardCellSize = '';
  for (let i = 0; i < n; ++i) {
    boardCellSize += puzzlePieceSize + boardSizeUnit + ' ';
  }
  boardCellSize.trim();

  const puzzlePieces: JSX.Element[] = [];
  const boards: string[] = [];
  for (let i = 1; i <= n * n; ++i) {
    boards.push(`board-${i}`);
    puzzlePieces.push(
      <PuzzlePiece
        id={`piece-${i}`}
        key={`piece-${i}`}
        className='puzzle-piece'
        draggable='true'
        style={{ width: puzzlePieceSize + boardSizeUnit, height: puzzlePieceSize + boardSizeUnit }}
      >
        <p className='text-center justify-content-middle'>{i}</p>
      </PuzzlePiece>
    );
  }

  const listRef = useRef<HTMLInputElement>(null);

  const puzzleBoardBox = boards.map((board) => <PuzzleBoard key={board} id={board} className='puzzle-board'/>);

  const puzzleBoardStyle = {
    height: boardSize + boardSizeUnit,
    width: boardSize + boardSizeUnit,
    gridTemplateColumns: boardCellSize,
    gridTemplateRows: boardCellSize,
  };

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
      <h1 className='title'>{stage}</h1>
      <div className='puzzle-container'>

        {/* Puzzle Board */}
        <div className='puzzle-wrapper-1'>
          <div className='puzzle-board-wrapper' style={puzzleBoardStyle}>
            {/* {boards.map((board) => <PuzzleBoard id={board} className='puzzle-board' />)} */}
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
                {puzzlePieces}
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