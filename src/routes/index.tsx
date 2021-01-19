import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Bin2Dec from '../pages/Bin2Dec';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Bin2Dec} />
    </Switch>
);

export default Routes;
