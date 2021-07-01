import './LinkGathertown.scss';

const LinkGathertown = (props: {
  linkGathertown: string;
  className: string;
}) => {
  return (
    <div className={props.className}>
      <a href={'https://' + props.linkGathertown} target='_blank'>
        {props.linkGathertown}
      </a>
    </div>
  );
};

export default LinkGathertown;