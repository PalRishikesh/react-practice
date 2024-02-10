import React, { useMemo, useState } from 'react'

const getAgeAnalytics = (data) => {
    // Something that take more time
    return data.age;
}
const UserAnalytics = () => {
    const [users, SetUser] = useState();

    // Every time component re render this function will take  take time 
    // const ageData = getAgeAnalytics(users);

    // To avoid we can use useMemo
    const ageData = useMemo(() => getAgeAnalytics(users), [users]);

    return (
        <div>
            {ageData}
        </div>
    )
}

export default UserAnalytics
