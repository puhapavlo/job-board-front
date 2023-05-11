import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Select from 'react-select';
import jobCategories from '../../../../job/jobCategories';
import {
  setCategory,
  setLocation,
  setType,
} from '../../../../redux/features/jobs/jobsSlice';
import jobTypes from '../../../../job/jobTypes';
import ReactGoogleAutocomplete from 'react-google-autocomplete';
import styles from './JobsFilterForm.module.scss';

const JobsFilterForm = ({category, type, location}) => {

  const dispatch = useDispatch();

  return (
      <form className={styles.form}>
          <Select
              required
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: '400px'
                }),
              }}
              options={jobCategories}
              placeholder="Category"
              defaultValue={category ? {value: category, label: category} : null}
              onChange={
                (e) => dispatch(setCategory(e.value))
              }
          />
        <Select
            required
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: '400px'
              }),
            }}
            options={jobTypes}
            placeholder='Type'
            defaultValue={type ? {value: type, label: type} : null}
            onChange={
              (e) => dispatch(setType(e.value))
            }
        />
        <ReactGoogleAutocomplete
            required
            apiKey="AIzaSyB_Vc2T95RFsJxQtpx_ZBk7cDOJvOD6fFI"
            placeholder="Location"
            defaultValue={location}
            onPlaceSelected={
              (place) => dispatch(setLocation(place ? place.formatted_address : null))
            }
            onBlur={(place) => dispatch(setLocation(null))}
        />
      </form>
  );
};

export default JobsFilterForm;