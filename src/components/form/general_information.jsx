import React from 'react';

export default function GeneralInformation() {
  return (
    <div>
      <div className="input-fields">
        <div id="name">
          <label htmlFor="name">
            Name

            <input
              type="text"
              id="name"
              name="name"
              required
            />
          </label>
        </div>

        <div id="contacts">
          <span className="head-names">Contact Details</span>

          <div>
            <div className="contacts-item">
              <label htmlFor="email">
                <span className="sub-names">Email</span>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                />
              </label>
            </div>

            <div className="contacts-item">
              <label htmlFor="tel">
                <span className="sub-names">Tel</span>

                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="phone number"
                />
              </label>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="objective">
            Objective

            <textarea
              type="text"
              id="objective"
              name="objective"
              minLength={80}
              maxLength={160}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
