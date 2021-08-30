import { useDispatch, useSelector } from "react-redux";
import { updatePlace, updatePlaceData } from "../Actions";
const Form = () => {
  const place = useSelector((state) => state.place);
  const theme = useSelector((state) => state.theme);

    const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 form">
          <input
            type="text"
            value={place}
            onChange={(e) => {
              dispatch(updatePlace(e.target.value));
            }}
          />
          <button
            className={theme ? "btn btn-light" : "btn btn-dark"}
            onClick={() => {
              console.log(place);
              dispatch(updatePlaceData(place));
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Form;
