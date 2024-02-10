import { useEffect, useState } from 'react'

// Hooks
const useGitHub = (username) => {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true);
            try {
               const response = await fetch(`https://api.github.com/users/${username}`)
               const responseData = await response.json();
               console.log("responseData: ",responseData);
               setUser(responseData);
               setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

         fetchData();
    },[username])
  return  {
    user,
    loading,
    error
  }
}

export default useGitHub
