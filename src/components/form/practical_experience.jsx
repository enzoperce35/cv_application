export default function PracticalExperience({index, company, position, responsibility}) {
  return (
    <div>
      <div className="input-fields">
        <label>Company</label>

        <div id="company">
          <div>
            <input
              type="text"
              id={'company' + index}
              name={'company' + index}
              placeholder="Name"
              defaultValue={company && company.value}
            />

            <input
              type="text"
              id={'position' + index}
              name={'position' + index}
              placeholder="Position"
              defaultValue={position && position.value}
            />
          </div>
        </div>

        <div>
          <label>Responsibility</label>

          <textarea
            type="text"
            id={'responsibility' + index}
            name={'responsibility' + index}
            defaultValue={responsibility && responsibility.value}
          />
        </div>
      </div>
    </div>
  )
}
