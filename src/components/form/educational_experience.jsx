export default function EducationalExperience({index, school, studyTitle, studyYearStart, studyYearEnd}) {
  return (
    <div>
      <div className="input-fields">
        <div>
          <label>School</label>

          <input
            type="text"
            id={'school' + index}
            name={'school' + index}
            defaultValue={school && school.value}
          />
        </div>

        <div>
          <label>Title</label>

          <input
            type='text'
            id={'studyTitle' + index}
            name={'studyTitle' + index}
            defaultValue={studyTitle && studyTitle.value}
          />
        </div>

        <div id="study-year">
          <label>Year</label>

          <div>
            <input
              type='number'
              id={'studyYearStart' + index}
              name={'studyYearStart' + index}
              placeholder="Start"
              defaultValue={studyYearStart && studyYearStart.value}
            />

            <input
              type='number'
              id={'studyYearEnd' + index}
              name={'studyYearEnd' + index}
              placeholder="End"
              defaultValue={studyYearEnd && studyYearEnd.value}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
