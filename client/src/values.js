const values = {}

values.base_url = 'http://backend.automanagement.co.uk/api'

values.isValidUKPostcode = postcode => {
  // Define a regular expression for UK postcodes
  const postcodeRegex = /^[A-Z]{1,2}[0-9R][0-9A-Z]? [0-9][ABD-HJLNP-UW-Z]{2}$/

  // Test the postcode against the regular expression
  return postcodeRegex.test(postcode.toUpperCase())
}

values.separateAddressComponents = address => {
  // Define regular expressions for common address components
  const postcodeRegex = /[A-Z]{1,2}[0-9R][0-9A-Z]? [0-9][A-Z]{2}/i
  const townRegex = /(,|^) ([\w\s]+)($|,)/
  const streetRegex = /^(.*?)(,|$)/

  // Extract postcode
  const postcodeMatch = address.match(postcodeRegex)
  const postcode = postcodeMatch ? postcodeMatch[0] : ''

  // Remove postcode from the address
  const addressWithoutPostcode = address.replace(postcodeRegex, '')

  // Extract town
  const townMatch = addressWithoutPostcode.match(townRegex)
  const town = townMatch ? townMatch[2] : ''

  // Remove town from the address
  const addressWithoutTown = addressWithoutPostcode.replace(townRegex, '')

  // Extract street
  const streetMatch = addressWithoutTown.match(streetRegex)
  let street = streetMatch ? streetMatch[1] : ''

  // Remove country from street only if it appears at the end
  const addressParts = address.split(',')
  const country = addressParts.pop().trim()
  street = street.replace(new RegExp(`,?\\s*${country}$`), '')

  // Modify the country as needed
  const modifiedCountry = country.toUpperCase() // Placeholder modification, you can adjust this as needed

  // Return the separated components
  return {
    street: street.trim(),
    town: town.trim(),
    postcode: postcode.trim(),
    country: modifiedCountry,
  }
}

export default values
