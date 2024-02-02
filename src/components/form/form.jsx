import GeneralInformation from "./general_information"
import EducationalExperience from "./educational_experience"
import PracticalExperience from "./practical_experience"

export default function Form({formData, toSubmit}) {
  return (
    <form onSubmit={(e) => toSubmit(e)}>
      <div id="form-wrap">
        <div id="form-title">
          <h1>CV Form</h1>
        </div>

        <div className="input-cont">
          <div id="gen-info">
            <h3 className="section-title">
              General Information
            </h3>

            <GeneralInformation
              name={formData.name}
              email={formData.email}
              tel={formData.tel}
              objective={formData.objective}
            />
          </div>

          <div id="educ-info">
            <h3 className="section-title">
              Education
            </h3>

            <div className="section-items">
              <EducationalExperience
                index={'1'}
                school={formData.school1}
                studyTitle={formData.studyTitle1}
                studyYearStart={formData.studyYearStart1}
                studyYearEnd={formData.studyYearEnd1}
              />

              <EducationalExperience
                index={'2'}
                school={formData.school2}
                studyTitle={formData.studyTitle2}
                studyYearStart={formData.studyYearStart2}
                studyYearEnd={formData.studyYearEnd2}
              />

              <EducationalExperience
                index={'3'}
                school={formData.school3}
                studyTitle={formData.studyTitle3}
                studyYearStart={formData.studyYearStart3}
                studyYearEnd={formData.studyYearEnd3}
              />
            </div>
          </div>

          <div id="work-info">
            <h3 className="section-title">
              Work Experience
            </h3>

            <div className="section-items">
              <PracticalExperience
                index={'1'}
                company={formData.company1}
                position={formData.position1}
                responsibility={formData.responsibility1}
              />

              <PracticalExperience
                index={'2'}
                company={formData.company2}
                position={formData.position2}
                responsibility={formData.responsibility2}
              />

              <PracticalExperience
                index={'3'}
                company={formData.company3}
                position={formData.position3}
                responsibility={formData.responsibility3}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="submit-cont">
        <input type="submit" />
      </div>
    </form>
  )
}
