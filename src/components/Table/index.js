import { connect } from "react-redux";
import Table from "./presenter";

function mapStateToProps (state) {
  const {result} = {...state};
  return {
    result,
  };
}

export default connect(mapStateToProps, null)(Table);
