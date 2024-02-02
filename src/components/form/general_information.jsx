export default function GeneralInformation({name, email, tel, objective}) {
return (
    <div>
      <div className="input-fields">
        <div id="name">
          <label htmlFor="name">Name</label>

          <input
            type="text"
            id='name'
            name='name'
            defaultValue={name && name.value}
          />
        </div>

        <div id="contacts">
          <label>Contact Details</label>

          <div>
            <input
              type="email"
              id='email'
              name='email'
              placeholder="email"
              defaultValue={email && email.value}
            />

            <input
              type="tel"
              id='tel'
              name='tel'
              placeholder="tel"
              defaultValue={tel && tel.value}
            />
          </div>
        </div>

        <div>
          <label htmlFor="objective">Objective</label>

          <textarea
            type="text"
            id='objective'
            name='objective'
            defaultValue={objective && objective.value}
          />
        </div>
      </div>
    </div>
  )
}
