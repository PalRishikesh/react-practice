import fetchData from "../api/fetchData"

const resrouce = fetchData("https://restcountries.com/v3.1/all");

const CountryListSuspsense = () => {

const data = resrouce.read();

  return (
    <div>
        <ul>
        {data.map((singleData) => (
          <li key={singleData.name.common}>{singleData.name.common}</li>
        ))}
      </ul>
    </div>
  )
}
export default CountryListSuspsense
