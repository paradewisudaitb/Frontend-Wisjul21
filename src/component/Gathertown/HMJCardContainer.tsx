import dummyImage from '../../images/ukj.png';

const HMJCardContainer = (props: {
  namaHMJ: string;
  namaFakultas: string;
  link: string;
}) => {
  return (
    <div className='card-hmj'>
      <div className='image-hmj'>
        <img
          alt={'logo ' + props.namaHMJ}
          src={dummyImage}
          width='185'
          height='185'
        />
      </div>
      <div className='info-hmj'>
        <h2>{props.namaHMJ}</h2>
        <div className='link-hmj'>
          <a href={props.link} target='_blank'>
            {props.link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HMJCardContainer;
