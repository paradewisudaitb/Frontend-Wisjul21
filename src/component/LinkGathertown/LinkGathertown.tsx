import './LinkGathertown.scss';

const LinkGathertown = (props: {
  linkGathertown: string;
  className: string;
}): JSX.Element => {

  const timeToShow = new Date('2021-07-08T19:00').getTime();
  const timeNow = Date.now();

  return (
    <div className={props.className}>
      {timeNow >= timeToShow &&
        <a href={'https://' + props.linkGathertown} target='_blank'>
          {props.linkGathertown}
        </a> ||
        <p className='gathertown-nolink'>
          Treasure Games dimulai tanggal 08 Juli 2021 Pukul 19.00 WIB!
        </p>
      }
    </div>
  );
};

export default LinkGathertown;
