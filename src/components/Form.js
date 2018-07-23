import React from 'react';

const Form = () => (
    <div className="container">
    <div className="row">
        <div className="col-md-6">
            <h2 className="content-container__heading">City:</h2>
            <input type="text" defaultValue="Bengaluru" name="city" placeholder="City..." readOnly />
        </div>
        <div className="col-md-6">
            <h2 className="content-container__heading">Country:</h2>
            <input type="text" defaultValue="IN" name="country" placeholder="Country..." readOnly />
        </div>
    </div>
</div>
);
   
export default Form;