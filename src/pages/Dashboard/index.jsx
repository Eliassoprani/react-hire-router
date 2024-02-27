import { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople, setAllPeople } = props

  const [people, setPeople] = useState([])
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPeople(data.results);
        setAllPeople(data.results)
      });
  }, []);
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard