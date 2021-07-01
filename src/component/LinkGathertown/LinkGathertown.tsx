import './LinkGathertown.scss';

const LinkGathertown = (props: { linkGathertown: string }) => {
  return (
    <div className='link-hmj'>
      <a href={'https://' + props.linkGathertown} target='_blank'>
        {props.linkGathertown}
      </a>
    </div>
  );
};

export default LinkGathertown;
