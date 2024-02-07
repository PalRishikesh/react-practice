import './App.css';

function App() {

  const pets = [
    {
      name:"Dolly",
      type:'cat',
      description:'Dolly is funnny and loves around the people',
      skills:['fetch','play dead','roll over']
    },
    {
      name:"Volley",
      type:'cat',
      description:'Volley is funnny and loves around the people',
      skills:['roll over']
    },
    {
      name:"Simbha",
      type:'Dog',
      description:'Dog is funnny and loves around the people',
      skills:['running','roll over']
    },
    {
      name:"Simbha part2",
      type:'Dog',
      description:'Dog is funnny and loves around the people',
      skills:['running','roll over','fetching']
    }
  ];

  return (
    <div>
        <h1>My pet</h1>
        <ul>
          {
            pets.map((pet,index)=>{
              return (
              <li key={index}>
                <h1>{pet.name}</h1>
                <p>{pet.description}</p>
                <ul>
                  <li>
                    {
                      pet.skills.map((skill,index)=>(
                        <li key={skill}>
                          {skill}
                        </li>
                      ))
                    }
                  </li>
                </ul>
              </li>
              )
            })
          }
        </ul>
      </div>
  );
}

export default App;
