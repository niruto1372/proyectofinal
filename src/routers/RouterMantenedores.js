import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MantenedoresLanding from '../modules/mantenedores/screens/MantenedoresLanding'

const RouterGuest = () => {
    return (
        
        <Switch>
            <Route path={"/"} component={MantenedoresLanding}/>
        </Switch>
    )
}

export default RouterGuest
