export default function EducationalExperience({school, studyTitle, studyYear}) {
  return (
    <div>
      <h2>Education</h2>

      <span>
        <label htmlFor="school">School</label>
        <input
          type="text"
          id='school'
          name='school'
          defaultValue={school && school.value}
        />
      </span>

      <br />

      <span>
        <label htmlFor="studyTitle">Title</label>
        <input
          type='text'
          id='studyTitle'
          name='studyTitle'
          defaultValue={studyTitle && studyTitle.value}
        />
      </span>

      <br />

      <span>
        <label htmlFor="studyYear">Year</label>
        <input
           type='number'
           id='studyYear'
           name='studyYear'
           defaultValue={studyYear && studyYear.value}
        />
      </span>
    </div>
  )
}
