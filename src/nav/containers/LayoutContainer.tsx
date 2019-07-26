import { connect } from 'react-redux';
import Layout from '../components/Layout';

// tslint:disable-next-line:no-any
const mapStateToProps = (state: any) => ({
  isLoggined: true,
  currentUser: {name:'test'},
});


export default connect(
  mapStateToProps,
)(Layout);
