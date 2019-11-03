import React, { Component } from 'react';
import NavBAr from '../Layout/NavBAr';
import TemplateHome from '../Templates/TemplateHome';

class PageHome extends Component {
    render() {
        return (
            <div>
               <NavBAr/>
               <TemplateHome/>
            </div>
        )
    }
}

export default PageHome
