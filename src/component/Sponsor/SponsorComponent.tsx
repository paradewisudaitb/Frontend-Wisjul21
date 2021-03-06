import ISponsor from '../../interfaces/ISponsor';
// import './SponsorComponent.scss';

export const SponsorComponent = ({nama, items}: ISponsor) => {
  const itemS = items.filter(image => (image.includes('S_')));
  const itemM = items.filter(image => (image.includes('M_')));
  const itemL = items.filter(image => (image.includes('L_') && !image.includes('XL_')));
  const itemXL = items.filter(image => (image.includes('XL_')));

  return (
    <div className='sponsors-group pb-5'>
      <h1 className='text-center my-3'>{ nama }</h1>
      <div className="sponsor-container">

        <div className='item'>
          { itemXL.map(image => (
            <div key={image} className='item-xl'>
              <img src={image} alt={
                image.split('/')[image.split('/').length - 1]
                  .replace(/.(((jpe?)|(pn))g)/gi, '')
              } />
            </div>
          )
          ) }
        </div>

        <div className='item'>
          { itemL.map(image => (
            <div key={image} className='item-l'>
              <img src={image} alt={
                image.split('/')[image.split('/').length - 1]
                  .replace(/.(((jpe?)|(pn))g)/gi, '')
              } />
            </div>
          )
          ) }
        </div>

        <div className='item'>
          { itemM.map(image => (
            <div key={image} className='item-m'>
              <img src={image} alt={
                image.split('/')[image.split('/').length - 1]
                  .replace(/.(((jpe?)|(pn))g)/gi, '')
              } />
            </div>
          )
          ) }
        </div>

        <div className='item'>
          { itemS.map(image => (
            <div key={image} className='item-s'>
              <img src={image} alt={
                image.split('/')[image.split('/').length - 1]
                  .replace(/.(((jpe?)|(pn))g)/gi, '')
              } />
            </div>
          )
          ) }
        </div>

      </div>
    </div>
  );
};
