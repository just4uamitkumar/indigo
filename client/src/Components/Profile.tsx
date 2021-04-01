import React from 'react';
import { connect } from 'react-redux';

const Profile = (props: any) => {
  return (
    <section className="contentBlock">
      <h1>{props.formdata.firstName}</h1>
      <h1>{props.formdata.lastName}</h1>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    formdata: state.form.myForm.values as any,
  };
};

export default connect(mapStateToProps)(Profile);
