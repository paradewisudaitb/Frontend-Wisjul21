import './CardHMJ.scss';

const ASSET_URL = 'https://wisjul21.sgp1.cdn.digitaloceanspaces.com';

const HMJCardContainer = (props: {
  namaHMJ: string;
  namaFakultas: string;
  linkGathertown: string;
  linkFoto: string;
}) => {
  return (
    <div className='card-hmj-container'>
      <div className='card-hmj'>
        <div className='image-hmj'>
          <img
            alt={'logo ' + props.namaHMJ}
            src={props.linkFoto}
            width='185'
            height='185'
          />
        </div>
        <div className='info-hmj'>
          <h2>{props.namaHMJ}</h2>
          <div className='link-hmj'>
            <a href={'https://' + props.linkGathertown} target='_blank'>
              {props.linkGathertown}
            </a>
          </div>
        </div>
      </div>
      <img
        src={`${ASSET_URL}/assets/images/vistock/main/spark%201%20kanan%20atas-01.png`}
        alt='Percikan api'
        className='spark-card'
      />
    </div>
  );
};

export default HMJCardContainer;
