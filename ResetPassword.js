import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (username && newPassword) {
      fetch("http://localhost:8000/user/" + username).then((res) => {
        return res.json();
      }).then((resp) => {
        if (Object.keys(resp).length === 0) {
          toast.error('User not found');
        } else {
          resp.password = newPassword;
          fetch("http://localhost:8000/user/" + username, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(resp)
          }).then((res) => {
            toast.success('Password reset successfully');
            navigate('/login');
          }).catch((err) => {
            toast.error('Failed to reset password: ' + err.message);
          });
        }
      }).catch((err) => {
        toast.error('Error: ' + err.message);
      });
    } else {
      toast.warning('Please enter both username and new password');
    }
  };

  const handleCancel = () => {
    navigate('/login');
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: '50px' }}>
        <form onSubmit={handleResetPassword} className="container">
          <div className="card">
            <div className="card-header">
              <h2>Reset Password</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>User Name <span className="errmsg">*</span></label>
                <input value={username} onChange={e => setUsername(e.target.value)} className="form-control"></input>
              </div>
              <div className="form-group">
                <label>New Password <span className="errmsg">*</span></label>
                <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="form-control"></input>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">Reset Password</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
