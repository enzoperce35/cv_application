export default function GeneralInformation({name, email, tel}) {
return (
    <div>
      <h2>General Information</h2>

      <span>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id='name'
          name='name'
          defaultValue={name && name.value}
        />
      </span>

      <br />

      <span>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id='email'
          name='email'
          defaultValue={email && email.value}
        />
      </span>

      <br />

      <span>
        <label htmlFor="tel">Phone Number</label>
        <input
          type="tel"
          id='tel'
          name='tel'
          defaultValue={tel && tel.value}
        />
      </span>
    </div>
  )
}
