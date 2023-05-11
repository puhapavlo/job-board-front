import React, {useState} from 'react';
import Container from "../../Container/Container";
import PhoneInput from "react-phone-input-2";
import {
  useAddResumeMutation,
  useUpdateResumeMutation,
} from '../../../redux/api/jobBoardApi';
import {useNavigate} from "react-router-dom";
import styles from './AddResume.module.scss';

const AddResumeForm = ({update= false, data= []}) => {
  const [summary, setSummary] = useState(update ? data.summary : '');
  const [phone, setPhone] = useState(update ? data.phone : '');
  const [education, setEducation] = useState(update ? data.education : '');
  const [experience, setExperience] = useState(update ? data.experience : '');
  const [skills, setSkills] = useState(update ? data.skills : '');
  const [certifications, setCertifications] = useState(update ? data.certifications : '');
  const [addResume, {isLoading}] = useAddResumeMutation();
  const [updateResume, {isUpdate}] = useUpdateResumeMutation();

  const navigate = useNavigate();

  const handleAddResume = async (e) => {
    e.preventDefault();
    let response = null;
    if (!update) {
      response = await addResume({
        summary,
        phone,
        education,
        experience,
        skills,
        certifications
      });
      if (!isLoading) {
        navigate(`/resume/${response.data.resume.id}`);
      }
    }
    else {
      response = await updateResume({
        body: {
        summary,
        phone,
        education,
        experience,
        skills,
        certifications
      },
       id: data.id,
      },
      );
      if (!isUpdate) {
        console.log(response)
        navigate(`/resume/${data.id}`);
      }
    }
  }

  return (
      <div className={styles.add_resume}>
        <Container>
          <h2 className={styles.title}>Add resume</h2>
          <form className={styles.form} onSubmit={handleAddResume}>
            <textarea
                required
                placeholder='Summary'
                defaultValue={summary}
                onChange={ (e) => setSummary(e.target.value) }
            />
            <div className={styles.phone}>
              <PhoneInput
                  value={phone}
                  inputClass={styles.phone_input}
                  specialLabel=''
                  placeholder="Phone Number"
                  onChange={(phone) => setPhone(phone)}
              />
            </div>
            <textarea
                defaultValue={education}
                placeholder='Education'
                onChange={(e) => setEducation(e.target.value)}
            />
            <textarea
                defaultValue={experience}
                placeholder='Experience'
                onChange={(e) => setExperience(e.target.value)}
            />
            <textarea
                defaultValue={skills}
                placeholder='Skills'
                onChange={(e) => setSkills(e.target.value)}
            />
            <textarea
                defaultValue={certifications}
                placeholder='Certifications'
                onChange={(e) => setCertifications(e.target.value)}
            />
            <button type='submit'>Submit</button>
          </form>
        </Container>
      </div>
  );
};

export default AddResumeForm;