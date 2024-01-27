export default function GeneralInformation() {
  return (
    <div>
      <h2>Personal Information</h2>

      <span>
        <label htmlFor="name">Name</label>
        <input type="text" id='name'/>
      </span>

      <br />

      <span>
        <label htmlFor="email">Email</label>
        <input type="email" id="email"/>
      </span>

      <br />

      <span>
        <label htmlFor="number">Phone Number</label>
        <input type="tel" id="number"/>
      </span>
    </div>
  )
}
