import GeneralInformation from "./general_information"
import EducationalExperience from "./educational_experience"
import PracticalExperience from "./practical_experience"

export default function Form() {
  return (
    <form>
      <GeneralInformation />
      <EducationalExperience />
      <PracticalExperience />
    </form>
  )
}
