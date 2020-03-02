import React from "react"
import Layout from "./views/Layout"

class App extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <h1>Welcome To ProDocs</h1>
                <Layout />
            </div>
        )
    }
}

export default App
