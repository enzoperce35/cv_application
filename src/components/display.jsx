export default function Display({formData, toEdit}) {
  return (
    <div>
      <div>
        <h2>GeneralInformation</h2>

        <ul>
          <li>{formData.name.value}</li>
          <li>{formData.email.value}</li>
          <li>{formData.tel.value}</li>
        </ul>
      </div>

      <div>
        <h2>EducationalExperience</h2>

        <ul>
          <li>{formData.school.value}</li>
          <li>{formData.studyTitle.value}</li>
          <li>{formData.studyYear.value}</li>
        </ul>
      </div>

      <div>
        <h2>PracticalExperience</h2>

        <ul>
          <li>{formData.company.value}</li>
          <li>{formData.position.value}</li>
          <li>{formData.responsibility.value}</li>
        </ul>
      </div>

      <button onClick={() => toEdit()}>
        Edit
      </button>
    </div>
  )
}
