export default function GeneralInformation() {
  return (
    <div>
      <div className="input-fields">
        <div id="name">
          <label htmlFor="name">Name</label>

          <input
            type="text"
            id='name'
            name='name'
            required
          />
        </div>

        <div id="contacts">
          <label id="contacts-header">Contact Details</label>

          <div>
            <div className="contacts-item">
              <label htmlFor="email" hidden={true}>Email</label>

              <input
                type="email"
                id='email'
                name='email'
                placeholder="email"
              />
            </div>

            <div className="contacts-item">
              <label htmlFor="tel" hidden={true}>Tel</label>

              <input
                type="tel"
                id='tel'
                name='tel'
                placeholder="phone number"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="objective">Objective</label>

          <textarea
            type="text"
            id='objective'
            name='objective'
            minLength={80}
            maxLength={160}
          />
        </div>
      </div>
    </div>
  )
}
