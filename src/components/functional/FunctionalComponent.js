import React from "react";
// add more
import { connect } from "react-redux";
import * as TYPE from "../../constant";

function FunctionalComponent(props) {
  console.log(props);
  const renderText = () => props.text.map((d, i) => <p key={i}>{d}</p>);
  return (
    <div>
      <h1>This is Functional + saga</h1>
      <hr />
      <button onClick={() => props.actionFetchImages(Math.random() * 40)}>
        Fetch text from api
      </button>
      {/* <button>Fetch Images from api</button> */}
      <hr />
      <div>{renderText()}</div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    text: state.textReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actionFetchImages: data =>
      dispatch({
        type: TYPE.FETCH_TEXT,
        payload: data
      })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FunctionalComponent);
