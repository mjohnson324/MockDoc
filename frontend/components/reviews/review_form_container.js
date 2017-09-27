import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import { clearErrors } from '../../actions/error_actions';
import { selectErrors } from '../../reducers/selectors';
import ReviewForm from './review_form';

const mapStatetoProps = state => {
  return {
    errors: selectErrors(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(ReviewForm));
