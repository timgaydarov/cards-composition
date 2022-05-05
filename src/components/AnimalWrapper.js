export default function AnimalWrapper(props) {
  return (
    <div className="card">
      <h2 className="card-details">{props.title}</h2>
      <div>{props.children}</div>
    </div>
  );
}
