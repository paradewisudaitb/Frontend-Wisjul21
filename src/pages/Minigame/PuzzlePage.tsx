import { useRoute } from 'wouter';

import { Navbar } from '../../component/NavbarFooter/Navbar';

import NotFound from '../NotFound/NotFound';
import Puzzle from '../../component/Puzzle/Puzzle';
import { PUZZLE_PAGE } from '../../routes/routes';
import stages from '../../data/minigame.json';

const PuzzlePage = () => {
  const [match, param] = useRoute(PUZZLE_PAGE.path);
  
  if (match && param) {
    const current_stage = stages.filter(stage => {
      return stage.url == param.stage;
    })[0];

    if (current_stage) {
      return (
        <>
          <Navbar />
          <Puzzle stage={current_stage.name} size={current_stage.size} imageUrl={current_stage.image} />
        </>
      );
    }
  }
  
  return (
    <>
      <Navbar />
      <NotFound />
    </>
  );
};

export default PuzzlePage;