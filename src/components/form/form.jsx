import GeneralInformation from "./general_information"
import EducationalExperience from "./educational_experience"
import PracticalExperience from "./practical_experience"

export default function Form({formData, toSubmit}) {

  return (
    <form onSubmit={(e) => toSubmit(e)}>
      <div>
        <GeneralInformation
          name={formData.name}
          email={formData.email}
          tel={formData.tel}
        />

        <EducationalExperience
          school={formData.school}
          studyTitle={formData.studyTitle}
          studyYear={formData.studyYear}
        />

        <PracticalExperience
          company={formData.company}
          position={formData.position}
          responsibility={formData.responsibility}
        />
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
  )
}
