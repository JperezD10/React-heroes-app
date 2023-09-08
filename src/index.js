import React from 'react';
import {createRoot} from 'react-dom/client';
import { HeroesApp } from './HeroesApp';

const root = createRoot(document.getElementById('root'));

root.render(
    <HeroesApp />
);
