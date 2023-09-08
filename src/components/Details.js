import React, { useState } from 'react';
import { validIFSC } from './Regex.js';

export const Details = () => {
  const [ifsc, setIfsc] = useState('');
  const [district, setDistrict] = useState('Adilabad');
  const [coreBank, setCoreBank] = useState('SBI');
  const [branchName, setBranchName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    if (!validIFSC.test(ifsc)) {
      window.alert("Enter a valid IFSC code");
    }else if (!branchName) {
        window.alert("Branch Name cannot be empty");
    } 
    else {
      setSubmitted(true);
    }
  };

  return (
    <div className='container'>
      {submitted ? (
        <div>
          <h3><b>Details:</b></h3>
          <table className="table">
            <tbody>
              <tr>
                <td><b className="colored-label">District:</b></td>
                <td>{district}</td>
              </tr>
              <tr>
                <td><b className="colored-label">Core Bank:</b></td>
                <td>{coreBank}</td>
              </tr>
              <tr>
                <td><b className="colored-label">IFSC Code:</b></td>
                <td>{ifsc}</td>
              </tr>
              <tr>
                <td><b className="colored-label">Branch Name:</b></td>
                <td>{branchName}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <table className="table">
            <tbody>
              <tr>
                <td><label  htmlFor="districts" className="colored-label">Districts:</label></td>
                <td>
                  <select
                    className="form-control"
                    id="districts"
                    name="Districts"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                  >
                    <option value="Adilabad">Adilabad</option>
                    <option value="Nalgonda">Nalgonda</option>
                    <option value="Karimnagar">Karimnagar</option>
                    <option value="Warangal">Warangal</option>
                    <option value="Wanaparthy">Wanaparthy</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="coreBank" className="colored-label">Core Bank:</label></td>
                <td>
                  <select
                    className="form-control"
                    id="coreBank"
                    name="Core_Bank"
                    value={coreBank}
                    onChange={(e) => setCoreBank(e.target.value)}
                  >
                    <option value="SBI">State Bank of India</option>
                    <option value="HDFC">HDFC</option>
                    <option value="ICICI">ICICI</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="ifscCode" className="colored-label">IFSC Code:</label></td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="ifscCode"
                    name="IFSC_Code"
                    value={ifsc}
                    onChange={(e) => setIfsc(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="branchName" className="colored-label">Branch Name:</label></td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="branchName"
                    name="Branch_Name"
                    value={branchName}
                    onChange={(e) => setBranchName(e.target.value)}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col-md-12">
              <button onClick={validate} type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
