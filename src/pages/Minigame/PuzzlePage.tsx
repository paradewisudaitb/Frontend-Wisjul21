import { useRoute } from 'wouter';
import { Navbar } from '../../component/NavbarFooter/Navbar';
import NotFound from '../NotFound/NotFound';
import Puzzle from '../../component/Puzzle/Puzzle';
import { PUZZLE_PAGE } from '../../routes/routes';
import stages from '../../data/minigame.json';
import Sponsor from '../../component/Sponsor/Sponsor';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { stageStateSelector } from '../../config/Redux/Stage/selector';
import { NotAvailableStage } from '../../component/NotFound/NotFound';

const PuzzlePage = () => {
  const [match, param] = useRoute(PUZZLE_PAGE.path);
  const stageState = useSelector(stageStateSelector);

  if (match && param) {
    const current_stage = stages.filter(stage => {
      return stage.url == param.stage;
    })[0];

    // Berarti stage 1 atau stage 2 atau stage 3
    if (current_stage) {
      
      // Kalau stage-1, oke
      // Kalau stage-2 atau stage-3, cek state prereqnya
      if (current_stage.url == 'stage-1' || (current_stage.prereq && stageState[current_stage.prereq])) {
        return (
          <>
            <Navbar />
            <Puzzle stage={current_stage.name} size={current_stage.size} folderUrl={current_stage.folder}/>
            <Sponsor />
          </>
        ); 
      } else {
        return (
          <>
            <Navbar />
            <NotAvailableStage />
            <Sponsor />
          </>
        );
      }
    }
  }

  return (
    <>
      <Navbar />
      <NotFound />
      <Sponsor />
    </>
  );
};

export default PuzzlePage;