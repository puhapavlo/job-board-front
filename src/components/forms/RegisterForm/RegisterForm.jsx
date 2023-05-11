import React, {useState} from 'react';
import Select from "react-select";
import styles from "./RegisterForm.module.scss";
import {loginSuccess} from "../../../redux/features/auth/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, redirect} from "react-router-dom";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond/dist/filepond.min.css';
import {
  useAuthUserMutation,
  useRegisterUserMutation,
} from '../../../redux/api/jobBoardApi';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

const RegisterForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [picture, setPicture] = useState(null);
  const dispatch = useDispatch();
  const [authUser, loginData] = useAuthUserMutation();
  const [registerUser, {isLoading, error}] = useRegisterUserMutation();
  const token = useSelector(state => state.auth.token);

  const rolesOptions = [
    {'value': 'ROLE_JOB_SEEKER', 'label': 'Job Seeker'},
    {'value': 'ROLE_RECRUITER', 'label': 'Recruiter'}
  ];
  registerPlugin(FilePondPluginFileValidateType, FilePondPluginFileEncode, FilePondPluginImagePreview);
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', username);
    formData.append('password', password);
    formData.append('role', role.value);
    formData.append('picture', JSON.stringify(picture));
    const response = await registerUser(formData).unwrap().then(data => console.log(data));
    if (!isLoading) {
      const loginResponse = await authUser({
        username,
        password
      });
      const { token } = await loginResponse.data;
      dispatch(loginSuccess(token));
      if (!loginData.isLoading) {
        return <Navigate to='/profile' />;
      }
    }
  };

  if (token) {
    return <Navigate to='/profile' />;
  }

  return (
      <div className={styles.register_form}>
        <h2 className={styles.title}>Register</h2>
        <form className={styles.form} onSubmit={handleRegister}>
          <input
              required
              placeholder="Email"
              type="email"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
          />
          <input
              required
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <Select
              required
              className={styles.select}
              placeholder="Role"
              options={rolesOptions}
              value={role}
              onChange={(choice) => setRole(choice)}
          />
          <FilePond
              labelIdle='Drag & Drop your account picture or <span class="filepond--label-action"> Browse </span>'
              allowMultiple={false}
              allowFileTypeValidation={true}
              acceptedFileTypes={['image/*']}
              dropValidation={true}
              checkValidity={true}
              stylePanelLayout='integrated'
              allowFileEncode={true}
              allowImagePreview={true}
              onupdatefiles={file => file.length != 0 ? setPicture({name: file[0].filename, base64: file[0].getFileEncodeBase64String()}) : setPicture(null) }
          />

          <button>Register</button>
        </form>
      </div>
  );
};

export default RegisterForm;