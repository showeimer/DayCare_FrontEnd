export const validate = values => {
  const errors = {}
  if(!values.account) {
    errors.account = 'Enter Account Information'
  } else {
    if (!values.account.daycare) {
      errors.account.daycare = 'Daycare Name Required!'
    }
    if (!values.account.street) {
      errors.account.street = 'Street Address Required!'
    }
    if (!values.account.city) {
      errors.account.city = 'City Required!'
    }
    if (!values.account.state) {
      errors.account.state = 'State Required!'
    }
    if (!values.account.street) {
      errors.account.street = 'Street Address Required!'
    }
    if (!values.account.zip) {
      errors.account.zip = 'Zipcode Required!'
    }
    if (!values.account.email) {
      errors.account.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.account.email = 'Invalid email address'
    }
  }

  return errors
}
