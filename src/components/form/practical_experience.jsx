export default function PracticalExperience({suffix}) {
  return (
    <div>
      <div className="input-fields">
        <label id="contacts-header">Company</label>

        <div id="company">
          <div className="company-item">
            <label htmlFor="company" hidden={true}>Company</label>

            <input
              type="text"
              id={'company'}
              placeholder="Name"
              name={'company' + suffix}
            />
          </div>

          <div className="company-item">
            <label htmlFor="position" hidden={true}>Position</label>

            <input
              type="text"
              id={'position'}
              placeholder="Position"
              name={'position' + suffix}
            />
          </div>
        </div>

        <div>
          <label>Responsibility</label>

          <textarea
            type="text"
            id={'responsibility'}
            name={'responsibility' + suffix}
          />
        </div>
      </div>
    </div>
  )
}
