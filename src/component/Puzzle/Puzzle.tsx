import { useRef, FC, useEffect, useState } from 'react';
import PuzzlePiece from './PuzzlePiece';
import PuzzleBoard from './PuzzleBoard';
import { completedStageCount } from '../../store';
import './Puzzle.scss';
import FinishStage from '../FinishStage/FinishStage';

type props = {
  stage: string,
  size: number,
  folderUrl: string,
};

const Puzzle: FC<props> = ({stage, size, folderUrl}: props) => {
  const n = size;

  const puzzleBoardBoxRef = useRef<HTMLDivElement>(null);

  // PUZZLE SIZE
  const [width, setWidth] = useState(window.innerWidth);
  const boardSize = width > 960 ? 40 : width > 500 ? 50 : 80;
  const sizeUnit = 'vw';
  const puzzlePieceSize = boardSize / n;
  let boardCellSize = '';
  for (let i = 0; i < n; ++i) {
    boardCellSize += puzzlePieceSize + sizeUnit + ' ';
  }
  boardCellSize.trim();

  const imageUrl = folderUrl + 'full.png';

  const [isWin, setWin] = useState(false);

  const checkWin = () => {
    const puzzleBoardBoxChildren = puzzleBoardBoxRef.current?.children;

    if (puzzleBoardBoxChildren) {
      let winning = puzzleBoardBoxChildren.length == (n * n);

      for (let i = 0; i < puzzleBoardBoxChildren.length && winning; ++i) {
        const currChild = puzzleBoardBoxChildren.item(i);
        const currID = parseInt(currChild?.
          children?.
          item(0)?.
          id?.
          match(/\d+$/)?.[0] ?? '-1');
        winning = currID == (i + 1);
      }

      if (winning) {
        setWin(true);
      }
    }
  };

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
          checkWin={checkWin}
          style={{
            width: puzzlePieceSize + sizeUnit,
            height: puzzlePieceSize + sizeUnit,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: boardSize + sizeUnit,
            backgroundPositionX: offsetX,
            backgroundPositionY: offsetY,
          }}
        >
        </PuzzlePiece>
      );

      puzzlePieces.sort(() => Math.random() - 0.5);
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

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: -150,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 150,
        behavior: 'smooth',
      });
    }
  };

  const unlockNextStage = () => {
    completedStageCount.incCompletedStages();
    window.alert('Menang anjay');
    setWin(true);
  };
  const puzzleTray = () => {
    const trayWidth = puzzlePieceSize * 2 + sizeUnit;

    return (
      <PuzzleBoard id='board-2' className='puzzle-board'>
        <div className='board-2-container' ref={listRef} style={{
          width: trayWidth
        }}>
          {puzzlePieces}
        </div>
      </PuzzleBoard>
    );
  };

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div className='puzzle-page'>
      <h1 className='title'>{stage}</h1>
      {!isWin ?
        <>
          {/* <button onClick={unlockNextStage} className="tombol-orang-dalam">Use Power of Orang Dalam</button> */}
          <div className='puzzle-container'>
            {/* Puzzle Board */}
            <div className='puzzle-wrapper-1'>
              <div className='puzzle-board-wrapper' ref={puzzleBoardBoxRef} style={puzzleBoardStyle}>
                {puzzleBoardBox}
              </div>
            </div>

            {/* Puzzle Tray */}
            <div className='puzzle-piece-container'>
              <div className='arrow-up-wrapper'>
                <div className='arrow-up' onClick={scrollUp}></div>
                <div className='arrow-left' onClick={scrollLeft}></div>
              </div>

              {puzzleTray()}

              <div className='arrow-down-wrapper'>
                <div className='arrow-down' onClick={scrollDown}></div>
                <div className='arrow-right' onClick={scrollRight}></div>
              </div>
            </div>
          </div>
        </>
        :
        <FinishStage folderUrl={folderUrl} />
      }
    </div>
  );
};

export default Puzzle;
