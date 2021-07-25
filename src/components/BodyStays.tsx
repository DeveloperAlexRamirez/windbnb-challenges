import '../css/bodyStays.css';
import CardBodyStays from './CardBodyStays';
import Data from '../stays.json';

const BodyStays = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
        }}
      >
        <h2 className="title-body-stays">Stays in Finlad</h2>
        <p style={{ color: 'gray' }}>12+ stays</p>
      </div>

      <div className="body-stays-container">
        {Data.map((item) => (
          <CardBodyStays
            url_photo={item.photo}
            super_host={item.superHost}
            rating={item.rating}
            beds={item.beds!}
            title={item.title}
            type={item.type}
            key={item.photo}
          />
        ))}
      </div>
    </>
  );
};

export default BodyStays;
