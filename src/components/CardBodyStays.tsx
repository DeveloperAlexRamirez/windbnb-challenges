import '../css/bodyStays.css';

interface Props {
  url_photo?: string;
  super_host?: boolean;
  rating: number;
  beds?: number;
  title: string;
  type: string;
}

const CardBodyStays = ({
  url_photo,
  super_host,
  rating,
  beds,
  title,
  type,
}: Props) => {
  return (
    <div className="card-cody bg-red">
      <img src={url_photo} alt="img-1" className="img-card-body" />

      <div className="card-pie">
        {super_host && (
          <div className="super-host">
            <p>SUPER HOST</p>
          </div>
        )}

        <p className="poppins">
          {type}. {beds} beds
        </p>
        <p>{rating}</p>
      </div>
      <h3 className="title-card">{title}</h3>
    </div>
  );
};

export default CardBodyStays;
