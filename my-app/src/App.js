import React, { useState } from 'react';
import ComponenteFuncao from './ComponenteFuncao';
import ComponenteClasse from './ComponenteClasse';

const App = () => {
    return (
        <div>
            <ComponenteClasse />
            <ComponenteFuncao nome="Fabio" />
        </div>
    );
};

export default App;
