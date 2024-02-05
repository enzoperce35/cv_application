export default function Display({toEdit, formData, handleEdit}) {
  const yearInfo = (start, end) => {
    if (start && end) {
      return `${start} - ${end}`
    }

    return ''
  }

  function fetchValue(data) {
    return (
      formData && formData[data].value
    )
  }

  return (
    <div style={{display: toEdit ? 'none' : 'block'}} id="display" onClick={() => handleEdit()}>
      <div className="header-info">
        <h1>{fetchValue('name')}</h1>

        <div id='contact-values'>
          <span>{fetchValue('email')}</span>
          <span>{fetchValue('tel')}</span>
        </div>

        <div id="obj-value">
          <p>{fetchValue('objective')}</p>
        </div>
      </div>

      <div className="body-info">
        <h3>Educational Experience</h3>

        <hr />

        <div className="body-values">
          <div>
            <span>{fetchValue('school1')}</span>
            <span>{fetchValue('studyTitle1')}</span>
            <span>{formData && yearInfo(formData.studyYearStart1.value, formData.studyYearEnd1.value)}</span>
          </div>

          <div>
            <span>{fetchValue('school2')}</span>
            <span>{fetchValue('studyTitle2')}</span>
            <span>{formData && yearInfo(formData.studyYearStart2.value, formData.studyYearEnd2.value)}</span>
          </div>

          <div>
            <span>{fetchValue('school3')}</span>
            <span>{fetchValue('studyTitle3')}</span>
            <span>{formData && yearInfo(formData.studyYearStart3.value, formData.studyYearEnd3.value)}</span>
          </div>
        </div>
      </div>

     <div className="body-info">
        <h3>Practical Experience</h3>

        <hr />

        <div className="body-values" id="company-values">
          <div>
            <span>{fetchValue('company1')}</span>
            <span>{fetchValue('position1')}</span>
            <span>{fetchValue('responsibility1')}</span>
          </div>

          <div>
            <span>{fetchValue('company2')}</span>
            <span>{fetchValue('position2')}</span>
            <span>{fetchValue('responsibility2')}</span>
          </div>

          <div>
            <span>{fetchValue('company3')}</span>
            <span>{fetchValue('position3')}</span>
            <span>{fetchValue('responsibility3')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
