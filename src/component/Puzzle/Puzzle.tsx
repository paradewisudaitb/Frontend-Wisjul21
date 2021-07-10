import { useRef, FC } from 'react';
import PuzzlePiece from './PuzzlePiece';
import PuzzleBoard from './PuzzleBoard';
import { completedStageCount } from '../../store';
import './Puzzle.scss';

type props = {
  stage: string,
  size: number,
  imageUrl: string,
};

const Puzzle: FC<props> = ({stage, size, imageUrl}: props) => {
  const n = size;
  // PUZZLE SIZE
  const boardSize = 35;
  const sizeUnit = 'em';
  const puzzlePieceSize = boardSize / n;
  let boardCellSize = '';
  for (let i = 0; i < n; ++i) {
    boardCellSize += puzzlePieceSize + sizeUnit + ' ';
  }
  boardCellSize.trim();

  const puzzlePieces: JSX.Element[] = [];
  const boards: string[] = [];
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= n; j+=1) {
      const num = (n*(i-1))+j;
      const offsetX = `${puzzlePieceSize*(n-j+1)}${sizeUnit}`;
      const offsetY = `${puzzlePieceSize*(n-i+1)}${sizeUnit}`;

      boards.push(`board-${num}`);
      puzzlePieces.push(
        <PuzzlePiece
          id={`piece-${num}`}
          key={`piece-${num}`}
          className='puzzle-piece'
          draggable='true'
          style={{
            backgroundImage: `url(${imageUrl})`,
            width: puzzlePieceSize + sizeUnit,
            height: puzzlePieceSize + sizeUnit,
            backgroundPositionX: offsetX,
            backgroundPositionY: offsetY,
          }}
        >
          <p className='text-center justify-content-middle'>{num}</p>
        </PuzzlePiece>
      );
    }
  }

  const listRef = useRef<HTMLInputElement>(null);

  const puzzleBoardBox = boards.map((board) => <PuzzleBoard key={board} id={board} className='puzzle-board'/>);

  const puzzleBoardStyle = {
    height: boardSize + sizeUnit,
    width: boardSize + sizeUnit,
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

  const unlockNextStage = () => {
    completedStageCount.incCompletedStages();
  };

  return (
    <div className='puzzle-page'>
      <h1 className='title'>{stage}</h1>
      <button onClick={unlockNextStage}>Test</button>
      <div className='puzzle-container'>
        {/* Puzzle Board */}
        <div className='puzzle-wrapper-1'>
          <div className='puzzle-board-wrapper' style={puzzleBoardStyle}>
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
      <img src="https://wisjul21.sgp1.cdn.digitaloceanspaces.com/assets/puzzle/Stage%203/full.png" alt="" />
    </div>
  );
};

export default Puzzle;