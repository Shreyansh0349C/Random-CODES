const Card = (props) => {
  console.log(props.image);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <img
        className="h-32 w-32 rounded-full mb-3"
        src={props.image}
        alt=""
      />

      <h1 className="text-xl font-bold">
        {props.user} Surname
      </h1>

      <h2>
        {props.city}, {props.age}
      </h2>

      <button className="bg-emerald-700 text-white px-4 py-2 rounded font-medium mt-2">
        Add Friend
      </button>
    </div>
  );
};

export default Card;


