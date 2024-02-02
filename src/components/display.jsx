export default function Display({formData, toEdit}) {
  const yearInfo = (start, end) => {
    if (start && end) {
      return `${start} - ${end}`
    }

    return ''
  }

  return (
    <div id="display" onClick={() => toEdit()}>
      <div className="header-info">
        <h1>{formData.name.value}</h1>

        <div id='contact-values'>
          <span>{formData.email.value}</span>
          <span>{formData.tel.value}</span>
        </div>

        <div id="obj-value">
          <p>{formData.objective.value}</p>
        </div>
      </div>

      <div className="body-info">
        <h3>Educational Experience</h3>

        <hr />

        <div className="body-values">
          <div>
            <span>{formData.school1.value}</span>
            <span>{formData.studyTitle1.value}</span>
            <span>{yearInfo(formData.studyYearStart1.value, formData.studyYearEnd1.value)}</span>
          </div>

          <div>
            <span>{formData.school2.value}</span>
            <span>{formData.studyTitle2.value}</span>
            <span>{yearInfo(formData.studyYearStart2.value, formData.studyYearEnd2.value)}</span>
          </div>

          <div>
            <span>{formData.school3.value}</span>
            <span>{formData.studyTitle3.value}</span>
            <span>{yearInfo(formData.studyYearStart3.value, formData.studyYearEnd3.value)}</span>
          </div>
        </div>
      </div>

     <div className="body-info">
        <h3>Practical Experience</h3>

        <hr />

        <div className="body-values" id="company-values">
          <div>
            <span>{formData.company1.value}</span>
            <span>{formData.position1.value}</span>
            <span>{formData.responsibility1.value}</span>
          </div>

          <div>
            <span>{formData.company2.value}</span>
            <span>{formData.position2.value}</span>
            <span>{formData.responsibility2.value}</span>
          </div>

          <div>
            <span>{formData.company3.value}</span>
            <span>{formData.position3.value}</span>
            <span>{formData.responsibility3.value}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
