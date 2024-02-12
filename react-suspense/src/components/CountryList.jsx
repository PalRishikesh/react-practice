
const CountryList = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((singleData) => (
          <li key={singleData.name.common}>{singleData.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
