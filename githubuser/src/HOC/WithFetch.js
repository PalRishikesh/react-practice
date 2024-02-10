
import  React  from 'react';
const withFetch = (WrapperComponent) => {
    console.log("compon");
    // Create a Class Component that will enhance the wrappdComponent
    class WithFetch extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                movies: []
            };
        }
        componentDidMount(){
            console.log("mmmount");
        }
        //  componentDidMount() {
        //     fetch(`https://jsonplaceholder.typicode.com/photos`)
        //         .then((response) => response.json())
        //         .then((data) => {
        //             console.log("data: ",data);
        //             this.setState({ movies: data })
        //         });
        // }

        render() {
            return (
                <>
                    {
                        this.state.movies.length > 0 && (<WrapperComponent movies={this.state.movies} />)
                    }
                </>
            )
        }
    }
    // It is optional to set the display name of the component but useful when comes to debug the HOC.
    WithFetch.displayNAme = `WithFetch(${WithFetch.name})`;
    // Return the component
    return WithFetch;


}

export default withFetch