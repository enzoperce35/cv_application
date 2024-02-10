import React from 'react';
import GeneralInformation from './general_information';
import EducationalExperience from './educational_experience';
import PracticalExperience from './practical_experience';

export default function Form({ toEdit, toSubmit }) {
  return (
    <form style={{ display: toEdit ? 'block' : 'none' }} onSubmit={(e) => toSubmit(e)}>
      <div id="form-wrap">
        <div id="form-title">
          <h1>CV Form</h1>
        </div>

        <div className="input-cont">
          <div id="gen-info">
            <h3 className="section-title">
              General Information
            </h3>

            <GeneralInformation />
          </div>

          <div id="educ-info">
            <h3 className="section-title">
              Education
            </h3>

            <div className="section-items">
              <EducationalExperience section="1" />

              <EducationalExperience section="2" />

              <EducationalExperience section="3" />
            </div>
          </div>

          <div id="work-info">
            <h3 className="section-title">
              Work Experience
            </h3>

            <div className="section-items">
              <PracticalExperience section="1" />

              <PracticalExperience section="2" />

              <PracticalExperience section="3" />
            </div>
          </div>
        </div>
      </div>

      <div id="submit-cont">
        <input type="submit" />
      </div>
    </form>
  );
}
