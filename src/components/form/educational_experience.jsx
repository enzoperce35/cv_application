export default function EducationalExperience({suffix}) {
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  function optionItems(prefix) {
    return (
      <>
        <option value="" disabled selected>{prefix.substr(4)}</option>

        {years.map((year) => {
          return <option key={suffix + prefix + year}>{year}</option>
        })}

        <option value=""></option>
      </>
    )
  }

  return (
    <div>
      <div className="input-fields">
        <div>
          <label>School</label>

          <input
            type="text"
            id={'school'}
            name={'school' + suffix}
          />
        </div>

        <div>
          <label>Title</label>

          <input
            type='text'
            id={'studyTitle'}
            name={'studyTitle' + suffix}
          />
        </div>

        <div id="study-year">
          <label>Year</label>

          <div>
            <select id={'studyYearStart'} placeholder="Start" name={'studyYearStart' + suffix}>
               {optionItems('yearStart')}
            </select>

            <select id={'studyYearStart'} placeholder="End" name={'studyYearEnd' + suffix}>
               {optionItems('yearEnd')}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
