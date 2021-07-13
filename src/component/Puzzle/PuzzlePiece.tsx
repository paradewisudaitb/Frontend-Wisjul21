const PuzzlePiece = (props: any) => {

  const dragStart = (e: any) => {
    const target = e.target;

    e.dataTransfer.setData('piece_id', target.id);

    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  const dragOver = (e: any) => {
    e.stopPropagation();
  };

  const dragEnd = (e: any) => {
    if (e.target.style.display == 'none') {
      e.target.style.display = 'block';
    }
    props.checkWin();
  };


  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default PuzzlePiece;
