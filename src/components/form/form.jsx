import GeneralInformation from "./general_information"
import EducationalExperience from "./educational_experience"
import PracticalExperience from "./practical_experience"

export default function Form({toEdit, toSubmit}) {

  return (
    <form style={{display: toEdit ? 'block' : 'none'}} onSubmit={(e) => toSubmit(e)}>
      <div id="form-wrap">
        <div id="form-title">
          <h1>CV Form</h1>
        </div>

        <div className="input-cont">
          <div id="gen-info">
            <h3 className="section-title">
              General Information
            </h3>

            <GeneralInformation/>
          </div>

          <div id="educ-info">
            <h3 className="section-title">
              Education
            </h3>

            <div className="section-items">
              <EducationalExperience suffix={'1'} />

              <EducationalExperience suffix={'2'} />

              <EducationalExperience suffix={'3'} />
            </div>
          </div>

          <div id="work-info">
            <h3 className="section-title">
              Work Experience
            </h3>

            <div className="section-items">
              <PracticalExperience suffix={'1'} />

              <PracticalExperience suffix={'2'} />

              <PracticalExperience suffix={'3'} />
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
