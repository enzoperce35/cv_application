export default function PracticalExperience({company, position, responsibility}) {
  return (
    <div>
      <h2>Work Experience</h2>

      <span>
        <label htmlFor="company">Company</label>
        <input
           type="text"
           id='company'
           name='company'
           defaultValue={company && company.value}
        />
      </span>

      <br />

      <span>
        <label htmlFor="position">Position</label>
        <input
           type="text"
           id='position'
           name='position'
           defaultValue={position && position.value}
        />
      </span>

      <br />

      <span>
        <label htmlFor="responsibilty">Responsibility</label>
        <input
           type="text"
           id='responsibility'
           name='responsibility'
           defaultValue={responsibility && responsibility.value}
        />
      </span>
    </div>
  )
}
