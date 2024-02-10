import useGitHub from "../hooks/useGitHub"

const GitHubUser = ({ username }) => {

    const { user, loading, error } = useGitHub(username);
    return (
        <div className='github-user'>
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {
                user && (
                    <ul>
                        <li>
                            <img src={user.avatar_url} alt={user.login} />
                        </li>
                        <li>
                            Name: {user.login}
                        </li>

                    </ul>
                )
            }
        </div>
    )
}
export default GitHubUser