import { connect } from 'react-redux';
import { changeQuery, changeRecord } from '../actions';
import App from './App';

const mapStateToProps = ({ records, query }) => ({
  records,
  query,
});

const mapDispatchToProps = dispatch => ({
  changeRecord: record => dispatch(changeRecord(record)),
  changeQuery: query => dispatch(changeQuery(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
